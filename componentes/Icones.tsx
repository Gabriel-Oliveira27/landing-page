/**
 * Ícones.
 *
 * Inline em SVG, sem biblioteca. São dezesseis desenhos — trazer um
 * pacote inteiro para isso custa mais em bytes do que o site todo, e
 * o traço fica consistente porque todos partem do mesmo `viewBox` e
 * da mesma espessura.
 *
 * `currentColor` em tudo: o ícone herda a cor do contexto, então ele
 * acompanha a troca de tema sem nenhuma variante.
 */

type Props = { className?: string };

function Traco({ children, className = 'size-5' }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const Icone = {
  loja: (p: Props) => (
    <Traco {...p}>
      <path d="M3 9 4.5 4h15L21 9" />
      <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
      <path d="M5 11v9h14v-9" />
      <path d="M10 20v-5h4v5" />
    </Traco>
  ),
  pao: (p: Props) => (
    <Traco {...p}>
      <path d="M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H8a4 4 0 0 1-4-4z" />
      <path d="M9 9.5 8 14.5M13 9.5l-1 5" />
    </Traco>
  ),
  predio: (p: Props) => (
    <Traco {...p}>
      <path d="M3 21h18M6 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M14 21V10h4a1 1 0 0 1 1 1v10" />
      <path d="M9 8h2M9 12h2M9 16h2M17 14h.01M17 18h.01" />
    </Traco>
  ),
  carro: (p: Props) => (
    <Traco {...p}>
      <path d="M5 17h14M3 17v-4l2-5h14l2 5v4" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
      <path d="M5.5 13h13" />
    </Traco>
  ),
  documento: (p: Props) => (
    <Traco {...p}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </Traco>
  ),
  relogio: (p: Props) => (
    <Traco {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Traco>
  ),
  cracha: (p: Props) => (
    <Traco {...p}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <circle cx="12" cy="11" r="2" />
      <path d="M8.5 17a3.5 3.5 0 0 1 7 0" />
    </Traco>
  ),
  livro: (p: Props) => (
    <Traco {...p}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </Traco>
  ),
  conversa: (p: Props) => (
    <Traco {...p}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z" />
    </Traco>
  ),
  busca: (p: Props) => (
    <Traco {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Traco>
  ),
  relogioAreia: (p: Props) => (
    <Traco {...p}>
      <path d="M6 3h12M6 21h12" />
      <path d="M8 3v3.5c0 2 4 3.5 4 5.5s-4 3.5-4 5.5V21" />
      <path d="M16 3v3.5c0 2-4 3.5-4 5.5s4 3.5 4 5.5V21" />
    </Traco>
  ),
  celular: (p: Props) => (
    <Traco {...p}>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18.5h2" />
    </Traco>
  ),
  monitor: (p: Props) => (
    <Traco {...p}>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8.5 21h7M12 17v4" />
    </Traco>
  ),
  mapa: (p: Props) => (
    <Traco {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Traco>
  ),
  raio: (p: Props) => (
    <Traco {...p}>
      <path d="M13 2 4.5 13H11l-1 9 8.5-11H12z" />
    </Traco>
  ),
  chave: (p: Props) => (
    <Traco {...p}>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 8-8 2 2-2 2 2 2-2 2-2-2-2 2z" />
    </Traco>
  ),
  seta: (p: Props) => (
    <Traco {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Traco>
  ),
  externo: (p: Props) => (
    <Traco {...p}>
      <path d="M14 4h6v6M20 4l-8 8" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </Traco>
  ),
  paleta: (p: Props) => (
    <Traco {...p}>
      <path d="M12 21a9 9 0 1 1 9-9c0 1.7-1.3 3-3 3h-1.5a2 2 0 0 0-1.4 3.4c.3.3.4.7.4 1.1 0 .8-.7 1.5-1.5 1.5z" />
      <circle cx="7.5" cy="12" r="1" fill="currentColor" />
      <circle cx="9.5" cy="8" r="1" fill="currentColor" />
      <circle cx="14" cy="7.5" r="1" fill="currentColor" />
    </Traco>
  ),
  sol: (p: Props) => (
    <Traco {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Traco>
  ),
  lua: (p: Props) => (
    <Traco {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </Traco>
  ),
};

export type NomeIcone = keyof typeof Icone;
