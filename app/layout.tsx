import type { Metadata } from 'next';
import { Geist, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-texto', subsets: ['latin'] });

// Bricolage Grotesque nos títulos.
//
// Antes era uma serifa, e ela estava errada aqui: dava ar editorial,
// de revista, a uma página que está vendendo sistema. Esta é uma
// grotesca de largura variável, com personalidade própria — não é a
// geométrica limpinha que toda página de SaaS usa, mas também não
// finge ser texto de jornal.
const titulo = Bricolage_Grotesque({
  variable: '--font-titulo',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gabriel-oliveira.vercel.app'),
  title: {
    default: 'Gabriel Oliveira — sistemas para o comércio de Iguatu e região',
    template: '%s · Gabriel Oliveira',
  },
  description:
    'Site, loja on-line e sistema sob medida para comércio do interior do Ceará. ' +
    'Veja os modelos prontos funcionando antes de decidir.',
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'Gabriel Oliveira' },
};

/**
 * Aplica o tema salvo ANTES da primeira pintura.
 *
 * Sem isto, quem escolheu escuro vê um lampejo branco a cada
 * carregamento — o React só hidrata depois que a página já pintou, e
 * corrigir ali é tarde. Roda síncrono no <head> de propósito: é o
 * único lugar onde bloquear a renderização por um milissegundo é a
 * coisa certa a fazer.
 */
const SEM_PISCAR = `
try {
  var d = document.documentElement;
  var t = localStorage.getItem('tema');
  var m = localStorage.getItem('modo');
  if (t) d.dataset.tema = t;
  if (m && m !== 'sistema') d.dataset.modo = m;
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${titulo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SEM_PISCAR }} />
      </head>
      <body className="font-[family-name:var(--font-texto)] antialiased">{children}</body>
    </html>
  );
}
