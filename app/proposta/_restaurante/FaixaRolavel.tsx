'use client';

import { useEffect, useRef, useState } from 'react';
import { I } from './Icones';

/**
 * Uma fileira que rola para o lado — com setas.
 *
 * No celular todo mundo sabe arrastar; no computador, uma fileira de
 * botões cortada na borda não diz a ninguém que continua. As setas
 * aparecem só do lado em que ainda há conteúdo, e a borda esmaece para
 * mostrar que tem mais.
 */
export default function FaixaRolavel({
  children,
  className = '',
  grande = false,
  rotulo,
}: {
  children: React.ReactNode;
  className?: string;
  /** Setas maiores e sempre à vista — para o carrossel de fotos. */
  grande?: boolean;
  rotulo: string;
}) {
  const trilho = useRef<HTMLDivElement>(null);
  const [lados, setLados] = useState({ esq: false, dir: false });

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    const mede = () =>
      setLados({ esq: el.scrollLeft > 4, dir: el.scrollLeft + el.clientWidth < el.scrollWidth - 4 });
    mede();
    el.addEventListener('scroll', mede, { passive: true });
    const obs = new ResizeObserver(mede);
    obs.observe(el);
    return () => {
      el.removeEventListener('scroll', mede);
      obs.disconnect();
    };
  }, []);

  const anda = (sentido: 1 | -1) =>
    trilho.current?.scrollBy({ left: sentido * trilho.current.clientWidth * 0.8, behavior: 'smooth' });

  const seta = (lado: 'esq' | 'dir') => {
    const visivel = lados[lado];
    return (
      <button
        type="button"
        onClick={() => anda(lado === 'esq' ? -1 : 1)}
        aria-label={`${lado === 'esq' ? 'Voltar' : 'Avançar'} — ${rotulo}`}
        tabIndex={visivel ? 0 : -1}
        className={`absolute top-1/2 z-10 -translate-y-1/2 place-items-center border border-[var(--borda)] bg-[var(--papel)] text-[var(--tinta)] shadow-lg shadow-black/10 transition-all duration-300 hover:border-[var(--marca)] hover:text-[var(--marca)] ${
          grande ? 'grid size-11' : 'hidden size-8 md:grid'
        } ${lado === 'esq' ? 'left-0' : 'right-0'} ${
          visivel ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {lado === 'esq' ? <I.esquerda className="size-4" /> : <I.direita className="size-4" />}
      </button>
    );
  };

  return (
    <div className="relative" role="region" aria-label={rotulo}>
      {seta('esq')}
      <div
        ref={trilho}
        className={`rest-sem-barra overflow-x-auto scroll-smooth ${className}`}
        style={{
          // A borda esmaece só do lado em que ainda há o que ver.
          maskImage: `linear-gradient(90deg, ${lados.esq ? 'transparent' : '#000'} 0, #000 ${
            grande ? '0' : '2.5rem'
          }, #000 calc(100% - ${grande ? '0px' : '2.5rem'}), ${lados.dir ? 'transparent' : '#000'} 100%)`,
        }}
      >
        {children}
      </div>
      {seta('dir')}
    </div>
  );
}
