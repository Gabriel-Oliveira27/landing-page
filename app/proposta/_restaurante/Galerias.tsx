'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import FaixaRolavel from './FaixaRolavel';
import { I } from './Icones';
import { real } from './tipos';

export type Foto = {
  src: string;
  alt: string;
  titulo: string;
  detalhe?: string;
  preco?: number | string;
};

/**
 * O carrossel "da cozinha".
 *
 * Todas as fotos são da própria casa, tiradas do Instagram dela — é o
 * mesmo princípio da proposta do Diocesano: prato bonito de banco de
 * imagem cria expectativa que a cozinha não prometeu.
 */
export function Carrossel({ fotos, rotulo }: { fotos: Foto[]; rotulo: string }) {
  return (
    <FaixaRolavel rotulo={rotulo} grande>
      <ul className="flex snap-x snap-mandatory gap-3 px-0.5 pb-1">
        {fotos.map((f, i) => (
          <li
            key={f.src}
            data-revelar
            style={{ '--i': Math.min(i, 5) } as React.CSSProperties}
            className="group relative w-64 shrink-0 snap-start overflow-hidden bg-[var(--areia)] sm:w-72"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="18rem"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 pt-16 text-white">
              <p className="font-[family-name:var(--font-marca)] text-xl leading-tight">{f.titulo}</p>
              <div className="mt-1 flex items-baseline gap-3 text-sm text-white/75">
                {f.detalhe && <span className="min-w-0 flex-1 truncate">{f.detalhe}</span>}
                {f.preco !== undefined && (
                  <span className="ml-auto shrink-0 font-semibold text-white">
                    {typeof f.preco === 'number' ? real(f.preco) : f.preco}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </FaixaRolavel>
  );
}

/**
 * O espaço, em mosaico — e em tela cheia ao tocar.
 *
 * A primeira foto é a maior porque é a que decide: quem abre a página
 * de um restaurante quer saber, antes do cardápio, se é o lugar certo
 * para aquela noite.
 */
export function Galeria({ fotos }: { fotos: Foto[] }) {
  const [aberta, setAberta] = useState<number | null>(null);

  const anda = useCallback(
    (d: number) => setAberta((a) => (a === null ? a : (a + d + fotos.length) % fotos.length)),
    [fotos.length],
  );

  useEffect(() => {
    if (aberta === null) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberta(null);
      if (e.key === 'ArrowRight') anda(1);
      if (e.key === 'ArrowLeft') anda(-1);
    };
    window.addEventListener('keydown', tecla);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', tecla);
      document.body.style.overflow = '';
    };
  }, [aberta, anda]);

  return (
    <>
      <div className="grid auto-rows-[11rem] grid-cols-2 gap-2 sm:auto-rows-[14rem] lg:grid-cols-4">
        {fotos.map((f, i) => (
          <button
            key={f.src}
            type="button"
            onClick={() => setAberta(i)}
            data-revelar
            style={{ '--i': i } as React.CSSProperties}
            className={`group relative overflow-hidden bg-[var(--areia)] text-left ${
              i === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <Image
              src={f.src}
              alt={f.alt}
              fill
              sizes={i === 0 ? '(min-width: 1024px) 36rem, 100vw' : '(min-width: 1024px) 18rem, 50vw'}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-end gap-2 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 text-sm text-white">
              <span className="flex-1">{f.titulo}</span>
              <I.ampliar className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </button>
        ))}
      </div>

      {aberta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={fotos[aberta].titulo}
          onClick={() => setAberta(null)}
          className="rest-troca fixed inset-0 z-[60] grid grid-rows-[1fr_auto] bg-black/92 p-4 sm:p-8"
        >
          <div className="relative min-h-0" onClick={(e) => e.stopPropagation()}>
            <Image
              key={fotos[aberta].src}
              src={fotos[aberta].src}
              alt={fotos[aberta].alt}
              fill
              sizes="100vw"
              className="rest-troca object-contain"
            />
          </div>
          <div className="mt-4 flex items-center gap-3 text-white" onClick={(e) => e.stopPropagation()}>
            <p className="flex-1">
              {fotos[aberta].titulo}
              {fotos[aberta].detalhe && <span className="text-white/60"> — {fotos[aberta].detalhe}</span>}
            </p>
            <span className="text-sm tabular-nums text-white/50">
              {aberta + 1}/{fotos.length}
            </span>
            <button type="button" onClick={() => anda(-1)} aria-label="Foto anterior" className="grid size-10 place-items-center border border-white/20 hover:bg-white/10">
              <I.esquerda className="size-4" />
            </button>
            <button type="button" onClick={() => anda(1)} aria-label="Próxima foto" className="grid size-10 place-items-center border border-white/20 hover:bg-white/10">
              <I.direita className="size-4" />
            </button>
            <button type="button" onClick={() => setAberta(null)} aria-label="Fechar" className="grid size-10 place-items-center border border-white/20 hover:bg-white/10">
              <I.fechar className="size-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Faixa de destaques com ícone — o que a casa tem, lido de relance. */
export function Destaques({
  itens,
}: {
  itens: { icone: (p: { className?: string }) => React.ReactNode; titulo: string; texto: string }[];
}) {
  return (
    <ul className="grid gap-px bg-[var(--borda)] sm:grid-cols-2 lg:grid-cols-5">
      {itens.map((d, i) => {
        const Icone = d.icone;
        return (
          <li
            key={d.titulo}
            data-revelar
            style={{ '--i': i } as React.CSSProperties}
            className="flex gap-3 bg-[var(--fundo)] p-5"
          >
            <span className="grid size-10 shrink-0 place-items-center border border-[var(--borda)] text-[var(--marca)]">
              <Icone className="size-5" />
            </span>
            <div>
              <p className="font-semibold leading-snug">{d.titulo}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-[var(--tinta-media)]">{d.texto}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
