'use client';

import Link from 'next/link';
import { useLinkStatus } from 'next/link';
import { Icone } from './Icones';

/**
 * Peças de carregamento.
 *
 * O problema que elas resolvem é concreto: sem nada, quem clica fica
 * olhando a tela parada e clica de novo. Feedback imediato vale mais
 * que carregar rápido — três segundos com sinal de vida incomodam
 * menos que um segundo de tela morta.
 */

/** Marca circular girando. Herda a cor do contexto. */
export function Roda({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} animate-girar`} aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.2"
      />
      {/* Um quarto de volta desenhado por cima do anel apagado: é o
          que dá a sensação de giro. Arco inteiro girando não se
          percebe girar. */}
      <path
        d="M21 12a9 9 0 0 0-9-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * As três faixas da marca, pulsando em cascata.
 *
 * É o spinner da casa: em vez de um círculo genérico, a própria
 * marca respirando. A cascata vem do atraso escalonado — sem ele as
 * três piscariam juntas e pareceria defeito.
 */
export function MarcaPulsando({ className = 'size-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {[
        { x: 3, y: 4.2, w: 18, atraso: '0s' },
        { x: 5.7, y: 10.1, w: 12.6, atraso: '0.18s' },
        { x: 8.2, y: 16, w: 7.6, atraso: '0.36s' },
      ].map((f) => (
        <rect
          key={f.w}
          x={f.x}
          y={f.y}
          width={f.w}
          height="3.8"
          rx="1.9"
          className="animate-pulsar"
          style={{ animationDelay: f.atraso }}
        />
      ))}
    </svg>
  );
}

/** Bloco cintilante, para esqueleto de página. */
export function Barra({
  className = '',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return <span className={`cintilar block rounded-md ${className}`} style={style} />;
}

/**
 * Tela cheia de carregamento, para os `loading.tsx` que não têm um
 * esqueleto próprio.
 */
export function TelaCarregando({ texto = 'Carregando' }: { texto?: string }) {
  return (
    <div className="grid min-h-[60vh] place-items-center px-5">
      <div className="flex flex-col items-center gap-3 text-center">
        <MarcaPulsando className="size-10 text-acento" />
        <p className="text-sm text-tinta-fraca">{texto}…</p>
      </div>
    </div>
  );
}

/**
 * Indicador dentro de um <Link>.
 *
 * `useLinkStatus` só funciona dentro de um Link, e só acende quando a
 * navegação realmente espera — se a rota já foi pré-carregada, ele
 * nunca aparece, que é o certo. Tamanho fixo e só a opacidade muda,
 * senão o rótulo dança a cada clique.
 */
export function PontoDeEspera({ className = '' }: { className?: string }) {
  const { pending } = useLinkStatus();
  return (
    <Roda
      className={`size-3.5 shrink-0 transition-opacity ${pending ? 'opacity-100' : 'opacity-0'} ${className}`}
    />
  );
}

/**
 * Link com indicador embutido.
 *
 * Existe para não repetir o par <Link><PontoDeEspera/></Link> em toda
 * chamada para ação da vitrine.
 */
export function LinkComEspera({
  href,
  children,
  className = '',
  comSeta = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  comSeta?: boolean;
}) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 ${className}`}>
      {children}
      {comSeta && <Icone.seta className="size-4 shrink-0" />}
      <PontoDeEspera />
    </Link>
  );
}
