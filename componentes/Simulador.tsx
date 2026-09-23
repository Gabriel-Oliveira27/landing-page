'use client';

import { useEffect, useRef, useState } from 'react';

export type Tela = 'computador' | 'celular';

// A página é desenhada na largura real do aparelho e só então
// encolhida para caber. Desenhar direto na largura do quadro mostraria
// o layout de tablet — que não é o que ninguém vê em aparelho nenhum.
const LARGURA: Record<Tela, number> = { computador: 1280, celular: 390 };
const ALTURA_CELULAR = 820;

/**
 * Uma página dentro de uma moldura de computador ou de celular.
 *
 * O `scale` reduz o desenho, não o layout: a página acredita estar num
 * monitor de 1280px ou num celular de 390px, e é esse layout que
 * aparece, miniaturizado.
 */
export default function Simulador({ src, tela, titulo }: { src: string; tela: Tela; titulo: string }) {
  const caixa = useRef<HTMLDivElement>(null);
  const [tam, setTam] = useState({ w: 0, h: 0 });
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    const el = caixa.current;
    if (!el) return;
    const obs = new ResizeObserver(([e]) => setTam({ w: e.contentRect.width, h: e.contentRect.height }));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const largura = LARGURA[tela];
  const escala =
    tela === 'computador'
      ? Math.min(1, tam.w / largura)
      : Math.min(1, (tam.h - 40) / ALTURA_CELULAR, (tam.w - 40) / largura);
  const altura = tela === 'computador' ? tam.h / (escala || 1) - 28 / (escala || 1) : ALTURA_CELULAR;

  return (
    <div
      ref={caixa}
      className={`relative h-[min(78vh,760px)] overflow-hidden rounded-2xl border border-borda ${
        tela === 'celular' ? 'grid place-items-center bg-areia' : 'bg-papel'
      }`}
    >
      {!pronto && (
        <p className="absolute inset-0 grid place-items-center text-sm text-tinta-fraca">Abrindo a proposta…</p>
      )}

      {tam.w > 0 && tela === 'computador' && (
        <div className="flex h-full flex-col">
          {/* Barra de navegador, só para ler como "isto é um site". */}
          <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-borda bg-areia px-3">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 truncate rounded bg-papel px-2 py-0.5 text-[11px] text-tinta-fraca">{src}</span>
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <iframe
              title={titulo}
              src={src}
              onLoad={() => setPronto(true)}
              style={{ width: largura, height: altura, transform: `scale(${escala})`, transformOrigin: '0 0' }}
              className="border-0 bg-white"
            />
          </div>
        </div>
      )}

      {tam.w > 0 && tela === 'celular' && (
        <div
          style={{ width: largura * escala + 20, height: ALTURA_CELULAR * escala + 20 }}
          className="rounded-[2.2rem] bg-[#141312] p-[10px] shadow-2xl shadow-black/30"
        >
          <div
            style={{ width: largura * escala, height: ALTURA_CELULAR * escala }}
            className="overflow-hidden rounded-[1.7rem] bg-white"
          >
            <iframe
              title={titulo}
              src={src}
              onLoad={() => setPronto(true)}
              style={{ width: largura, height: ALTURA_CELULAR, transform: `scale(${escala})`, transformOrigin: '0 0' }}
              className="border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
