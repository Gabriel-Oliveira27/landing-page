import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { perfil } from "@/content/perfil";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--fonte-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--fonte-sans",
  display: "swap",
});

const titulo = `${perfil.nome} — ${perfil.titulo}`;
const descricao =
  "Portfólio de Gabriel Oliveira, desenvolvedor full-stack em Iguatu-CE: seis projetos próprios levados até o deploy — e-commerce completo, sistema de ponto e escalas em uso, sites institucionais com painel. Next.js, React Native, Prisma e Postgres.";

export const metadata: Metadata = {
  title: { default: titulo, template: `%s · ${perfil.nome}` },
  description: descricao,
  keywords: [
    "desenvolvedor full-stack",
    "Next.js",
    "React Native",
    "Prisma",
    "PostgreSQL",
    "e-commerce",
    "portfólio",
  ],
  authors: [{ name: perfil.nome, url: perfil.contato.github }],
  openGraph: {
    title: titulo,
    description: descricao,
    type: "website",
    locale: "pt_BR",
    siteName: perfil.nome,
  },
  twitter: { card: "summary_large_image", title: titulo, description: descricao },
  robots: { index: true, follow: true },
};

// Resolve o tema antes da primeira pintura: usa o salvo, senão a preferência do
// sistema, com escuro como padrão do site.
const iniciarTema = `(function(){try{var t=localStorage.getItem('tema');if(t!=='claro'&&t!=='escuro'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'claro':'escuro';}if(t==='escuro')document.documentElement.classList.add('dark');document.documentElement.dataset.tema=t;}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: iniciarTema }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
