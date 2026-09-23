'use client';

import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { perfil, linkWhatsApp } from '@/conteudo/perfil';
import { Icone } from './Icones';
import { Roda } from './Carregando';

/**
 * Pedido de contato.
 *
 * O WhatsApp continua em primeiro lugar e é o caminho que fecha mais
 * — mas nem todo mundo quer abrir uma conversa às onze da noite, e
 * quem está no computador do trabalho muitas vezes não tem WhatsApp
 * à mão. Este formulário é para esses.
 *
 * Três campos obrigatórios viram dois: nome e um jeito de responder.
 * Cada campo a mais é uma pessoa a menos.
 */
export default function FormularioContato() {
  const pagina = usePathname();
  const [dados, setDados] = useState({ nome: '', contato: '', negocio: '', mensagem: '' });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // Armadilha para robô. Escondida do olho E do leitor de tela, com
  // autocomplete desligado para o navegador não preencher sozinho.
  const [isca, setIsca] = useState('');

  /**
   * Acorda o banco no primeiro toque em qualquer campo.
   *
   * O Neon dorme depois de 5 minutos parado e leva alguns segundos
   * para voltar. Sem isto, esses segundos caem no clique em Enviar —
   * o pior momento possível, porque a pessoa já decidiu falar e a
   * tela trava. Disparando aqui, o banco levanta enquanto ela digita.
   *
   * `useRef` e não `useState`: acordar é efeito colateral, não muda
   * nada na tela, e não deve provocar renderização.
   */
  const acordou = useRef(false);
  function acorda() {
    if (acordou.current) return;
    acordou.current = true;
    // Sem await e sem catch visível: se falhar, o envio avisa.
    void fetch('/api/contato/acordar').catch(() => {});
  }

  async function envia(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setErro(null);
    try {
      const r = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...dados, sobrenome: isca, pagina }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.erro ?? 'não consegui enviar');
      setEnviado(true);
    } catch (e) {
      setErro((e as Error).message);
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="rounded-2xl border border-mato/40 bg-mato/5 p-6">
        <span className="grid size-10 place-items-center rounded-xl bg-mato/15 text-mato">
          <Icone.conversa className="size-5" />
        </span>
        <h3 className="mt-3 font-[family-name:var(--font-titulo)] text-xl font-bold">
          Recebido, {dados.nome.split(' ')[0]}.
        </h3>
        <p className="mt-1.5 leading-relaxed text-tinta-media">
          Respondo em {dados.contato.includes('@') ? 'até um dia' : 'algumas horas'}. Se for
          urgente, o WhatsApp é mais rápido.
        </p>
        <a
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-acento hover:text-acento-forte"
        >
          <Icone.conversa className="size-4" />
          {perfil.contato.whatsappExibicao}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={envia} className="rounded-2xl border border-borda bg-papel p-6">
      <h3 className="font-[family-name:var(--font-titulo)] text-xl font-bold">
        Ou deixe seu contato
      </h3>
      <p className="mt-1 text-sm text-tinta-media">
        Escrevo de volta. Só preciso do seu nome e de um jeito de te responder.
      </p>

      <div className="mt-5 grid gap-3">
        <label className="text-sm">
          <span className="font-medium">Seu nome</span>
          <input
            required
            maxLength={120}
            value={dados.nome}
            onFocus={acorda}
            onChange={(e) => setDados((d) => ({ ...d, nome: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-borda bg-fundo px-3 py-2 outline-none focus:border-acento"
          />
        </label>

        <label className="text-sm">
          <span className="font-medium">WhatsApp ou e-mail</span>
          <input
            required
            maxLength={120}
            value={dados.contato}
            onFocus={acorda}
            onChange={(e) => setDados((d) => ({ ...d, contato: e.target.value }))}
            placeholder="(88) 9 0000-0000"
            className="mt-1 w-full rounded-lg border border-borda bg-fundo px-3 py-2 outline-none placeholder:text-tinta-fraca focus:border-acento"
          />
        </label>

        <label className="text-sm">
          <span className="font-medium">
            O que você vende <span className="font-normal text-tinta-fraca">· opcional</span>
          </span>
          <input
            maxLength={160}
            value={dados.negocio}
            onFocus={acorda}
            onChange={(e) => setDados((d) => ({ ...d, negocio: e.target.value }))}
            placeholder="padaria, loja de roupa, construtora…"
            className="mt-1 w-full rounded-lg border border-borda bg-fundo px-3 py-2 outline-none placeholder:text-tinta-fraca focus:border-acento"
          />
        </label>

        <label className="text-sm">
          <span className="font-medium">
            Mensagem <span className="font-normal text-tinta-fraca">· opcional</span>
          </span>
          <textarea
            rows={4}
            maxLength={1500}
            value={dados.mensagem}
            onFocus={acorda}
            onChange={(e) => setDados((d) => ({ ...d, mensagem: e.target.value }))}
            className="mt-1 w-full resize-none rounded-lg border border-borda bg-fundo px-3 py-2 outline-none focus:border-acento"
          />
        </label>

        <input
          type="text"
          name="sobrenome"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={isca}
          onChange={(e) => setIsca(e.target.value)}
          className="absolute left-[-9999px] size-0 opacity-0"
        />
      </div>

      {erro && <p className="mt-3 text-sm text-red-500">{erro}</p>}

      <button
        type="submit"
        disabled={enviando}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-acento px-5 py-3 font-medium text-white transition-colors hover:bg-acento-forte disabled:opacity-50"
      >
        {enviando && <Roda className="size-4" />}
        {enviando ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  );
}
