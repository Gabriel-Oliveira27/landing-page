/**
 * Ícones das propostas de restaurante.
 *
 * Mesmo princípio dos ícones da vitrine: SVG inline, traço único,
 * `currentColor`. Ficam separados porque são de outro vocabulário —
 * prato, hashi, taça, balão — e cada página herda a cor da marca dela.
 */

type P = { className?: string };

function T({ children, className = 'size-5' }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const I = {
  telefone: (p: P) => (
    <T {...p}>
      <path d="M5 3h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 5.1 5.1l1.4-2.3L19 13.5V17a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </T>
  ),
  whatsapp: (p: P) => (
    <T {...p}>
      <path d="M4 20l1.3-3.9A8.5 8.5 0 1 1 8.2 19z" />
      <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.1.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .6-.5.8-.6.3-1.6.5-3.2-.3a9 9 0 0 1-3.8-3.8c-.7-1.5-.5-2.6-.2-3.1z" />
    </T>
  ),
  instagram: (p: P) => (
    <T {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M16.8 7.2h.01" />
    </T>
  ),
  facebook: (p: P) => (
    <T {...p}>
      <path d="M14 21v-7.5h2.6l.4-3H14V8.6c0-.9.3-1.5 1.6-1.5H17V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9v2.3H8.5v3H11V21" />
    </T>
  ),
  local: (p: P) => (
    <T {...p}>
      <path d="M12 21s7-5.6 7-11.2A7 7 0 0 0 5 9.8C5 15.4 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </T>
  ),
  relogio: (p: P) => (
    <T {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </T>
  ),
  calendario: (p: P) => (
    <T {...p}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </T>
  ),
  pessoas: (p: P) => (
    <T {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.3a3.2 3.2 0 0 1 0 5.4M18 20a6 6 0 0 0-2.6-4.9" />
    </T>
  ),
  cartao: (p: P) => (
    <T {...p}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="1" />
      <path d="M2.5 10h19M6 15h4" />
    </T>
  ),
  moto: (p: P) => (
    <T {...p}>
      <circle cx="6" cy="17" r="2.8" />
      <circle cx="18" cy="17" r="2.8" />
      <path d="M9 17h6l-2.5-6H9M15.5 11H18l2 3.5M7 11h3" />
      <path d="M13 6h3l1.5 5" />
    </T>
  ),
  sacola: (p: P) => (
    <T {...p}>
      <path d="M5 8h14l-1 12.5H6z" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" />
    </T>
  ),
  taca: (p: P) => (
    <T {...p}>
      <path d="M7 3h10l-.6 5.3A4.4 4.4 0 0 1 12 12.3a4.4 4.4 0 0 1-4.4-4L7 3z" />
      <path d="M12 12.3V20M8.5 20.5h7" />
    </T>
  ),
  garrafa: (p: P) => (
    <T {...p}>
      <path d="M10 2.5h4M10.5 2.5v4.2L8.3 10v10.5h7.4V10l-2.2-3.3V2.5" />
      <path d="M8.3 13.5h7.4" />
    </T>
  ),
  prato: (p: P) => (
    <T {...p}>
      <circle cx="12" cy="13" r="6.5" />
      <circle cx="12" cy="13" r="3.2" />
      <path d="M3 4v5a1.5 1.5 0 0 0 3 0V4M4.5 4v16M21 4c-1.7 0-2.8 2-2.8 5 0 2 1 3 2.8 3M21 4v16" />
    </T>
  ),
  hashi: (p: P) => (
    <T {...p}>
      <path d="M4 20 17 4M7.5 20.5 20 6" />
      <ellipse cx="9" cy="16.5" rx="4.5" ry="2" />
    </T>
  ),
  pizza: (p: P) => (
    <T {...p}>
      <path d="M12 21 3.2 6.2a14 14 0 0 1 17.6 0z" />
      <path d="M4.8 9a11 11 0 0 1 14.4 0" />
      <circle cx="10" cy="11.5" r="1" />
      <circle cx="13.5" cy="14" r="1" />
    </T>
  ),
  balao: (p: P) => (
    <T {...p}>
      <path d="M12 15.5c3 0 5.5-3 5.5-6.5a5.5 5.5 0 0 0-11 0c0 3.5 2.5 6.5 5.5 6.5z" />
      <path d="m11 15.5.5 1.5h1l.5-1.5M12 17c0 1.5-1.5 2-1.5 3.5" />
    </T>
  ),
  musica: (p: P) => (
    <T {...p}>
      <path d="M9 18V5.5L20 3.5V16" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="16" r="2.5" />
    </T>
  ),
  neve: (p: P) => (
    <T {...p}>
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
      <path d="m9.5 4.5 2.5 2 2.5-2M9.5 19.5l2.5-2 2.5 2" />
    </T>
  ),
  arvore: (p: P) => (
    <T {...p}>
      <path d="M12 21v-6M7 15h10l-2.5-4H16l-4-7-4 7h1.5z" />
    </T>
  ),
  estrela: (p: P) => (
    <T {...p}>
      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
    </T>
  ),
  aspas: (p: P) => (
    <T {...p}>
      <path d="M9.5 7C6.5 8 5 10.2 5 13.5V17h4.5v-4.5H7.3C7.4 10.7 8.3 9.5 10 9zM19 7c-3 1-4.5 3.2-4.5 6.5V17H19v-4.5h-2.2c.1-1.8 1-3 2.7-3.5z" />
    </T>
  ),
  presente: (p: P) => (
    <T {...p}>
      <rect x="3.5" y="9" width="17" height="4" />
      <path d="M5 13v7.5h14V13M12 9v11.5M12 9C10 5 7 5.5 7.5 7.5S12 9 12 9zm0 0c2-4 5-3.5 4.5-1.5S12 9 12 9z" />
    </T>
  ),
  rota: (p: P) => (
    <T {...p}>
      <path d="M12 2.5 21.5 12 12 21.5 2.5 12z" />
      <path d="M9.5 14v-2.5h5m-2-2 2 2-2 2" />
    </T>
  ),
  brilho: (p: P) => (
    <T {...p}>
      <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z" />
    </T>
  ),
  busca: (p: P) => (
    <T {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </T>
  ),
  esquerda: (p: P) => (
    <T {...p}>
      <path d="m15 5-7 7 7 7" />
    </T>
  ),
  direita: (p: P) => (
    <T {...p}>
      <path d="m9 5 7 7-7 7" />
    </T>
  ),
  mais: (p: P) => (
    <T {...p}>
      <path d="M12 5v14M5 12h14" />
    </T>
  ),
  menos: (p: P) => (
    <T {...p}>
      <path d="M5 12h14" />
    </T>
  ),
  fechar: (p: P) => (
    <T {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </T>
  ),
  ampliar: (p: P) => (
    <T {...p}>
      <path d="M14 4h6v6M10 20H4v-6M20 4l-6.5 6.5M4 20l6.5-6.5" />
    </T>
  ),
};
