import type { Metadata } from 'next';
import { Geist, Instrument_Serif } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-texto', subsets: ['latin'] });

// Serifa nos títulos. Página de venda de software quase sempre usa
// uma grotesca geométrica e acaba parecendo com todas as outras; a
// serifa lê como "estabelecido", que é justamente o que falta a quem
// ainda não tem site e está decidindo se confia.
const serifa = Instrument_Serif({
  variable: '--font-titulo',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Gabriel Oliveira',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${serifa.variable}`}>
      <body className="font-[family-name:var(--font-texto)] antialiased">{children}</body>
    </html>
  );
}
