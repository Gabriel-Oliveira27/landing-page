'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { perfil, linkWhatsApp } from '@/conteudo/perfil';
import type { Fala } from '@/lib/ia';

const ABERTURA: Fala = {
  papel: 'agente',
  texto:
    'Oi! Me conta rapidinho: o que o seu negócio vende? ' +
    'Com isso eu já sei qual dos modelos do Gabriel serve para você.',
};

const ATALHOS = ['Tenho uma padaria', 'Vendo roupa pelo WhatsApp', 'Presto serviço', 'Ainda não sei'];

/**
 * Transforma os caminhos internos citados pelo agente em links.
 *
 * Ele foi instruído a só escrever endereços que existem, mas escrever
 * "/projetos/loja-online" numa bolha de texto e esperar que a pessoa
 * digite na barra é jogar fora a recomendação que acabou de ser dada.
 *
 * Só caminhos internos viram link. URL externa escrita pelo modelo
 * não vira clique — se um dia ele alucinar um domínio, o pior que
 * acontece é a pessoa ler um endereço estranho, não visitá-lo.
 */
function ComLinks({ texto }: { texto: string }) {
  const pedacos = texto.split(/(\/(?:projetos|demo)\/[a-z0-9-]+)/g);
  return (
    <>
      {pedacos.map((p, i) =>
        /^\/(projetos|demo)\//.test(p) ? (
          <Link key={i} href={p} className="font-medium text-acento underline underline-offset-2">
            {p}
          </Link>
        ) : (
          p
        ),
      )}
    </>
  );
}

/**
 * O assistente.
 *
 * Existe para quem chegou sem saber o que quer — que é a maioria.
 * Uma pessoa que já sabe que precisa de loja on-line clica em
 * Projetos; quem só sabe que "tá vendendo mal pelo WhatsApp" não sabe
 * nem o nome do que procura, e é essa que ia embora sem falar com
 * ninguém.
 *
 * Fica fechado por padrão. Chat que abre sozinho em cima do conteúdo
 * é a primeira coisa que todo mundo fecha.
 */
export default function Assistente() {
  const [aberto, setAberto] = useState(false);
  const [falas, setFalas] = useState<Fala[]>([ABERTURA]);
  const [texto, setTexto] = useState('');
  const [pensando, setPensando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const fim = useRef<HTMLDivElement>(null);
  const campo = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (aberto) {
      fim.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      campo.current?.focus();
    }
  }, [falas, aberto]);

  // Esc fecha. Quem abriu sem querer não deveria precisar caçar o X.
  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [aberto]);

  async function envia(mensagem: string) {
    const conteudo = mensagem.trim();
    if (!conteudo || pensando) return;

    const novas: Fala[] = [...falas, { papel: 'usuario', texto: conteudo }];
    setFalas(novas);
    setTexto('');
    setErro(null);
    setPensando(true);

    try {
      const r = await fetch('/api/assistente', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Manda sem a abertura: ela é enfeite da tela, e gastar
        // contexto com ela é gastar token à toa.
        body: JSON.stringify({ historico: novas.slice(1) }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.erro ?? 'não consegui responder agora');
      setFalas([...novas, { papel: 'agente', texto: d.texto }]);
    } catch (e) {
      setErro((e as Error).message);
    } finally {
      setPensando(false);
    }
  }

  if (!aberto) {
    return (
      <button
        onClick={() => setAberto(true)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-acento py-3 pl-4 pr-5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-acento-forte"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z" />
        </svg>
        Não sei o que preciso
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 flex max-h-[min(34rem,90dvh)] w-full flex-col overflow-hidden border border-borda bg-papel shadow-2xl sm:bottom-5 sm:right-5 sm:w-[24rem] sm:rounded-2xl">
      <header className="flex items-center gap-2 border-b border-borda bg-areia/60 px-4 py-3">
        <span className="size-2 rounded-full bg-mato" />
        <p className="text-sm font-medium">Assistente</p>
        <button
          onClick={() => setAberto(false)}
          aria-label="Fechar"
          className="ml-auto text-tinta-fraca transition-colors hover:text-tinta"
        >
          ✕
        </button>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {falas.map((f, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
              f.papel === 'usuario'
                ? 'ml-auto bg-acento text-white'
                : 'bg-areia text-tinta'
            }`}
          >
            {f.papel === 'agente' ? <ComLinks texto={f.texto} /> : f.texto}
          </div>
        ))}

        {pensando && (
          <p className="text-sm text-tinta-fraca">escrevendo…</p>
        )}

        {erro && (
          <div className="rounded-xl border border-borda bg-areia/60 px-3.5 py-3 text-sm">
            <p className="text-tinta-media">{erro}</p>
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-block font-medium text-acento"
            >
              Falar no WhatsApp →
            </a>
          </div>
        )}

        {falas.length === 1 && !pensando && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {ATALHOS.map((a) => (
              <button
                key={a}
                onClick={() => void envia(a)}
                className="rounded-full border border-borda px-3 py-1.5 text-xs text-tinta-media transition-colors hover:border-acento hover:text-acento"
              >
                {a}
              </button>
            ))}
          </div>
        )}

        <div ref={fim} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          void envia(texto);
        }}
        className="flex gap-2 border-t border-borda p-3"
      >
        <input
          ref={campo}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          maxLength={600}
          placeholder="Escreva aqui…"
          className="min-w-0 flex-1 rounded-xl border border-borda bg-fundo px-3 py-2 text-sm outline-none placeholder:text-tinta-fraca focus:border-acento"
        />
        <button
          type="submit"
          disabled={pensando || !texto.trim()}
          className="shrink-0 rounded-xl bg-acento px-4 text-sm font-medium text-white transition-colors hover:bg-acento-forte disabled:opacity-40"
        >
          Enviar
        </button>
      </form>

      <p className="border-t border-borda px-4 py-2 text-center text-[11px] text-tinta-fraca">
        Respostas geradas por IA. Preço e prazo, só com o Gabriel —{' '}
        {perfil.contato.whatsappExibicao}
      </p>
    </div>
  );
}
