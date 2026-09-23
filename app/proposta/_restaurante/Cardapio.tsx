'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import FaixaRolavel from './FaixaRolavel';
import { I } from './Icones';
import { real, whatsapp, type Item, type Secao } from './tipos';

/**
 * O cardápio em TEXTO.
 *
 * Hoje as duas casas publicam o cardápio como PDF no Google Drive,
 * linkado na bio do Instagram — 21 MB o do Vila, 9 MB o do Nori. No 4G,
 * quem está na calçada decidindo onde jantar desiste antes de abrir; o
 * Google não lê o que está dentro; e mudar um preço é refazer o
 * arquivo inteiro.
 *
 * Aqui o cardápio é dado: dá para buscar, filtrar o que é novidade, e
 * — o que o PDF nunca vai fazer — montar o pedido e mandar pronto no
 * WhatsApp, com os códigos que a cozinha já usa.
 */

type Linha = { chave: string; cod?: string; nome: string; medida?: string; rotulo?: string; valor: number };

const normaliza = (s: string) =>
  s
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase();

export default function Cardapio({
  secoes,
  numeroWhatsApp,
  casa,
  rodape,
}: {
  secoes: Secao[];
  numeroWhatsApp: string;
  casa: string;
  rodape?: string;
}) {
  const [grupo, setGrupo] = useState<'cozinha' | 'bar'>('cozinha');
  const [ativa, setAtiva] = useState(secoes[0].id);
  const [busca, setBusca] = useState('');
  const [soNovos, setSoNovos] = useState(false);
  const [pedido, setPedido] = useState<Record<string, { linha: Linha; qtd: number }>>({});
  const [abertoPedido, setAbertoPedido] = useState(false);
  const topo = useRef<HTMLDivElement>(null);

  const doGrupo = secoes.filter((s) => s.grupo === grupo);
  const temNovos = secoes.some((s) => s.itens.some((i) => i.novo));
  const termo = normaliza(busca.trim());

  // Busca e "novidades" atravessam as seções; sem elas, mostra uma
  // seção por vez. O cardápio do Vila tem mais de duzentos itens —
  // rolar tudo de uma vez é o PDF de novo, só que mais comprido.
  const visiveis = useMemo(() => {
    if (!termo && !soNovos) return secoes.filter((s) => s.id === ativa);
    return secoes
      .map((s) => ({
        ...s,
        itens: s.itens.filter(
          (i) =>
            (!soNovos || i.novo) &&
            (!termo || normaliza(`${i.nome} ${i.desc ?? ''} ${i.cod ?? ''}`).includes(termo)),
        ),
      }))
      .filter((s) => s.itens.length);
  }, [secoes, ativa, termo, soNovos]);

  const escolhe = (id: string) => {
    setAtiva(id);
    setBusca('');
    setSoNovos(false);
    topo.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const trocaGrupo = (g: 'cozinha' | 'bar') => {
    setGrupo(g);
    const primeira = secoes.find((s) => s.grupo === g);
    if (primeira) escolhe(primeira.id);
  };

  const soma = (linha: Linha, delta: number) => {
    // Saiu o último item? O painel fecha junto — senão ele reabriria
    // sozinho no próximo "+", sem ninguém ter pedido.
    const restantes = Object.values(pedido).reduce((s, l) => s + l.qtd, 0) + delta;
    if (restantes <= 0) setAbertoPedido(false);
    setPedido((p) => {
      const qtd = (p[linha.chave]?.qtd ?? 0) + delta;
      const novo = { ...p };
      if (qtd <= 0) delete novo[linha.chave];
      else novo[linha.chave] = { linha, qtd };
      return novo;
    });
  };

  const linhas = Object.values(pedido);
  const totalItens = linhas.reduce((s, l) => s + l.qtd, 0);
  const total = linhas.reduce((s, l) => s + l.qtd * l.linha.valor, 0);

  return (
    <div ref={topo} className="scroll-mt-28">
      {/* ── Controles ─────────────────────────────────────── */}
      <div className="sticky top-[6.25rem] z-30 -mx-5 border-b border-[var(--borda)] bg-[var(--fundo)]/95 px-5 pb-3 pt-3 backdrop-blur">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex border border-[var(--borda)] bg-[var(--papel)] p-0.5 text-sm">
            {(['cozinha', 'bar'] as const).map((g) => (
              <button
                key={g}
                onClick={() => trocaGrupo(g)}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-medium transition-colors ${
                  grupo === g
                    ? 'bg-[var(--marca)] text-[var(--sobre-marca)]'
                    : 'text-[var(--tinta-media)] hover:text-[var(--tinta)]'
                }`}
              >
                {g === 'cozinha' ? <I.prato className="size-4" /> : <I.taca className="size-4" />}
                {g === 'cozinha' ? 'Cozinha' : 'Bebidas'}
              </button>
            ))}
          </div>

          <label className="relative min-w-0 flex-1 basis-48">
            <span className="sr-only">Buscar no cardápio</span>
            <I.busca className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--tinta-fraca)]" />
            <input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar: camarão, salmão, 1174…"
              className="w-full border border-[var(--borda)] bg-[var(--papel)] py-2 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-[var(--tinta-fraca)] focus:border-[var(--marca)]"
            />
          </label>

          {temNovos && (
            <button
              onClick={() => setSoNovos((v) => !v)}
              aria-pressed={soNovos}
              className={`flex items-center gap-1.5 border px-3 py-2 text-sm font-medium transition-colors ${
                soNovos
                  ? 'border-[var(--marca)] bg-[var(--marca)] text-[var(--sobre-marca)]'
                  : 'border-[var(--borda)] bg-[var(--papel)] text-[var(--tinta-media)] hover:text-[var(--tinta)]'
              }`}
            >
              <I.brilho className="size-4" />
              Novidades
            </button>
          )}
        </div>

        <div className="mt-3">
          <FaixaRolavel rotulo="Seções do cardápio">
            <div className="flex gap-1.5 px-0.5 md:px-10">
              {doGrupo.map((s) => {
                const marcada = !termo && !soNovos && s.id === ativa;
                return (
                  <button
                    key={s.id}
                    onClick={() => escolhe(s.id)}
                    className={`shrink-0 border px-3.5 py-1.5 text-[13px] transition-colors ${
                      marcada
                        ? 'border-[var(--tinta)] bg-[var(--tinta)] text-[var(--fundo)]'
                        : 'border-[var(--borda)] text-[var(--tinta-media)] hover:border-[var(--tinta-fraca)] hover:text-[var(--tinta)]'
                    }`}
                  >
                    {s.nome}
                  </button>
                );
              })}
            </div>
          </FaixaRolavel>
        </div>
      </div>

      {/* ── Pratos ────────────────────────────────────────── */}
      <div key={`${ativa}|${termo}|${soNovos}`} className="rest-troca mt-6 space-y-10">
        {visiveis.length === 0 && (
          <p className="py-10 text-center text-[var(--tinta-media)]">
            Nada com “{busca}”. Tente outra palavra — ou chame no WhatsApp, que a casa responde.
          </p>
        )}

        {visiveis.map((s) => (
          <section key={s.id}>
            <div className="flex items-baseline gap-3 border-b border-[var(--tinta)] pb-2">
              <h3 className="font-[family-name:var(--font-marca)] text-2xl">{s.nome}</h3>
              {s.nota && <p className="text-sm text-[var(--tinta-fraca)]">{s.nota}</p>}
              <span className="ml-auto text-xs tabular-nums text-[var(--tinta-fraca)]">{s.itens.length} itens</span>
            </div>
            <ul className="grid gap-x-10 md:grid-cols-2">
              {s.itens.map((i) => (
                <Prato key={`${s.id}|${i.cod}|${i.nome}|${i.medida}`} secao={s.id} item={i} pedido={pedido} soma={soma} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      {rodape && <p className="mt-8 text-sm text-[var(--tinta-fraca)]">{rodape}</p>}

      {/* ── Barra do pedido ───────────────────────────────────
          Sempre montada: sobe quando entra o primeiro item e desce
          quando o último sai, em vez de piscar na tela. */}
      <button
        onClick={() => setAbertoPedido(true)}
        aria-hidden={!totalItens}
        tabIndex={totalItens ? 0 : -1}
        className={`fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-md items-center gap-3 bg-[var(--marca)] px-5 py-3.5 text-left text-[var(--sobre-marca)] shadow-2xl shadow-black/30 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
          totalItens && !abertoPedido ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-[160%] opacity-0'
        }`}
      >
        <span className="grid size-8 place-items-center bg-[var(--sobre-marca)]/15">
          <I.sacola className="size-4" />
        </span>
        <span className="flex-1 font-semibold">
          Ver pedido
          <span key={totalItens} className="rest-pulo ml-2 inline-block text-sm font-bold tabular-nums">
            · {totalItens} {totalItens === 1 ? 'item' : 'itens'}
          </span>
        </span>
        <span className="font-semibold tabular-nums">{real(total)}</span>
      </button>

      {abertoPedido && totalItens > 0 && (
        <Pedido
          linhas={linhas}
          total={total}
          soma={soma}
          fecha={() => setAbertoPedido(false)}
          numeroWhatsApp={numeroWhatsApp}
          casa={casa}
        />
      )}
    </div>
  );
}

/**
 * O "+" que vira "− 1 +".
 *
 * Os três botões existem sempre, alinhados à direita numa caixa que
 * cresce: fechada, ela só tem largura para o "+"; aberta, o "−" e o
 * número entram deslizando pela esquerda. O número pula a cada troca.
 */
function Contador({ qtd, soma, rotulo }: { qtd: number; soma: (d: number) => void; rotulo: string }) {
  const aberto = qtd > 0;
  return (
    <div
      className={`flex h-8 items-center justify-end overflow-hidden border transition-[width,background-color,color] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${
        aberto
          ? 'w-[5.75rem] border-[var(--marca)] bg-[var(--marca)] text-[var(--sobre-marca)]'
          : 'w-8 border-[var(--marca)] text-[var(--marca)] hover:bg-[var(--marca)] hover:text-[var(--sobre-marca)]'
      }`}
    >
      <button
        type="button"
        onClick={() => soma(-1)}
        tabIndex={aberto ? 0 : -1}
        aria-label={`Tirar um: ${rotulo}`}
        className="grid h-full w-7 shrink-0 place-items-center"
      >
        <I.menos className="size-3.5" />
      </button>
      <span key={qtd} className="rest-pulo w-6 shrink-0 text-center text-sm font-bold tabular-nums">
        {qtd || ''}
      </span>
      <button
        type="button"
        onClick={() => soma(1)}
        aria-label={aberto ? `Mais um: ${rotulo}` : `Adicionar ao pedido: ${rotulo}`}
        className="grid h-full w-[1.875rem] shrink-0 place-items-center"
      >
        <I.mais className="size-3.5" />
      </button>
    </div>
  );
}

function Prato({
  secao,
  item,
  pedido,
  soma,
}: {
  secao: string;
  item: Item;
  pedido: Record<string, { qtd: number }>;
  soma: (l: Linha, d: number) => void;
}) {
  const opcoes = Array.isArray(item.preco)
    ? item.preco.map((p) => ({ rotulo: p.rotulo, valor: p.valor, cod: p.cod ?? item.cod }))
    : [{ rotulo: undefined, valor: item.preco, cod: item.cod }];

  return (
    <li className="flex gap-4 border-b border-dashed border-[var(--borda)] py-4">
      {item.foto && (
        <div className="relative size-16 shrink-0 overflow-hidden bg-[var(--areia)] sm:size-20">
          <Image src={item.foto} alt={item.nome} fill sizes="5rem" className="object-cover" />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="font-medium leading-snug">
          {item.nome}
          {item.medida && <span className="ml-1.5 text-sm font-normal text-[var(--tinta-fraca)]">{item.medida}</span>}
          {item.novo && (
            <span className="ml-2 inline-flex items-center gap-1 bg-[var(--marca)]/10 px-1.5 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wider text-[var(--marca)]">
              <I.brilho className="size-3" />
              novo
            </span>
          )}
        </p>
        {item.desc && <p className="mt-1 text-sm leading-relaxed text-[var(--tinta-media)]">{item.desc}</p>}
        {item.cod && <p className="mt-1 text-[11px] text-[var(--tinta-fraca)]">cód. {item.cod}</p>}
      </div>

      <div className="flex shrink-0 flex-col items-end gap-1.5">
        {opcoes.map((o) => {
          const linha: Linha = {
            // Código sozinho não basta: o cardápio impresso do Vila
            // repete o 3612 para duas cervejas diferentes.
            chave: `${secao}|${item.cod}|${item.nome}|${item.medida}|${o.rotulo}`,
            cod: o.cod,
            nome: item.nome,
            medida: item.medida,
            rotulo: o.rotulo,
            valor: o.valor,
          };
          const qtd = pedido[linha.chave]?.qtd ?? 0;
          return (
            <div key={linha.chave} className="flex items-center gap-2">
              {o.rotulo && <span className="text-[11px] text-[var(--tinta-fraca)]">{o.rotulo}</span>}
              <span className="font-semibold tabular-nums">{real(o.valor)}</span>
              <Contador
                qtd={qtd}
                soma={(d) => soma(linha, d)}
                rotulo={`${item.nome}${o.rotulo ? `, ${o.rotulo}` : ''}`}
              />
            </div>
          );
        })}
      </div>
    </li>
  );
}

/**
 * O pedido vira uma mensagem de WhatsApp pronta.
 *
 * Nada de app de delivery no meio, e nada de comissão por pedido — o
 * pedido já chega hoje pelo WhatsApp, só que desorganizado: foto do
 * PDF, "o 3º da página 5", áudio. Aqui ele chega com código,
 * quantidade e endereço, na ordem que a cozinha lê.
 */
function Pedido({
  linhas,
  total,
  soma,
  fecha,
  numeroWhatsApp,
  casa,
}: {
  linhas: { linha: Linha; qtd: number }[];
  total: number;
  soma: (l: Linha, d: number) => void;
  fecha: () => void;
  numeroWhatsApp: string;
  casa: string;
}) {
  const [modo, setModo] = useState<'entrega' | 'retirada'>('entrega');
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [obs, setObs] = useState('');

  useEffect(() => {
    const tecla = (e: KeyboardEvent) => e.key === 'Escape' && fecha();
    window.addEventListener('keydown', tecla);
    return () => window.removeEventListener('keydown', tecla);
  }, [fecha]);

  // Linha em branco é separador de propósito; `false` é campo que a
  // pessoa não preencheu e some da mensagem.
  const texto = [
    `Olá! Quero fazer um pedido no ${casa}:`,
    '',
    ...linhas.map(
      ({ linha: l, qtd }) =>
        `${qtd}x ${l.cod ? `${l.cod} · ` : ''}${l.nome}${l.medida ? ` ${l.medida}` : ''}${l.rotulo ? ` (${l.rotulo})` : ''} — ${real(qtd * l.valor)}`,
    ),
    '',
    `Itens: ${real(total)}`,
    modo === 'entrega' ? `Entregar em: ${endereco.trim() || '(vou mandar o endereço)'}` : 'Vou retirar no balcão.',
    nome.trim() ? `Nome: ${nome.trim()}` : false,
    obs.trim() ? `Obs.: ${obs.trim()}` : false,
    '',
    modo === 'entrega' ? 'Pode me confirmar o total com a entrega?' : 'Me avisa quando estiver pronto?',
  ]
    .filter((l): l is string => l !== false)
    .join('\n');

  return (
    <div className="rest-troca fixed inset-0 z-50 flex items-end justify-center bg-black/55 sm:items-center" onClick={fecha}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Seu pedido"
        onClick={(e) => e.stopPropagation()}
        className="rest-entrada max-h-[90dvh] w-full max-w-lg overflow-y-auto bg-[var(--papel)] p-6 text-[var(--tinta)]"
      >
        <div className="flex items-center gap-3">
          <I.sacola className="size-5 text-[var(--marca)]" />
          <h3 className="font-[family-name:var(--font-marca)] text-2xl">Seu pedido</h3>
          <button
            onClick={fecha}
            aria-label="Fechar"
            className="ml-auto grid size-9 place-items-center text-[var(--tinta-fraca)] hover:bg-[var(--areia)]"
          >
            <I.fechar className="size-4" />
          </button>
        </div>

        <ul className="mt-4 divide-y divide-[var(--borda)]">
          {linhas.map(({ linha: l, qtd }) => (
            <li key={l.chave} className="flex items-center gap-3 py-3 text-sm">
              <span className="min-w-0 flex-1">
                {l.nome}
                {(l.medida || l.rotulo) && (
                  <span className="text-[var(--tinta-fraca)]"> · {[l.medida, l.rotulo].filter(Boolean).join(', ')}</span>
                )}
              </span>
              <Contador qtd={qtd} soma={(d) => soma(l, d)} rotulo={l.nome} />
              <span className="w-20 text-right font-semibold tabular-nums">{real(qtd * l.valor)}</span>
            </li>
          ))}
        </ul>

        <p className="mt-2 flex border-t border-[var(--tinta)] pt-3 font-semibold">
          <span className="flex-1">Itens</span>
          <span className="tabular-nums">{real(total)}</span>
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
          {(['entrega', 'retirada'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setModo(m)}
              className={`flex items-center justify-center gap-2 border py-2.5 font-medium transition-colors ${
                modo === m
                  ? 'border-[var(--marca)] bg-[var(--marca)] text-[var(--sobre-marca)]'
                  : 'border-[var(--borda)] text-[var(--tinta-media)]'
              }`}
            >
              {m === 'entrega' ? <I.moto className="size-4" /> : <I.sacola className="size-4" />}
              {m === 'entrega' ? 'Entregar em casa' : 'Vou buscar'}
            </button>
          ))}
        </div>

        <div className="mt-3 space-y-2.5">
          <Campo rotulo="Seu nome" valor={nome} muda={setNome} />
          {modo === 'entrega' && (
            <Campo rotulo="Endereço, com ponto de referência" valor={endereco} muda={setEndereco} />
          )}
          <Campo rotulo="Observação (sem cebola, troco para…)" valor={obs} muda={setObs} />
        </div>

        <a
          href={whatsapp(numeroWhatsApp, texto)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 bg-[#1FA855] py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
        >
          <I.whatsapp className="size-5" />
          Enviar pedido pelo WhatsApp
        </a>
        <p className="mt-2.5 text-center text-xs text-[var(--tinta-fraca)]">
          A mensagem abre pronta no WhatsApp da casa. Nada é cobrado por aqui.
        </p>
      </div>
    </div>
  );
}

function Campo({ rotulo, valor, muda }: { rotulo: string; valor: string; muda: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-xs text-[var(--tinta-fraca)]">{rotulo}</span>
      <input
        value={valor}
        onChange={(e) => muda(e.target.value)}
        className="mt-1 w-full border border-[var(--borda)] bg-[var(--fundo)] px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--marca)]"
      />
    </label>
  );
}
