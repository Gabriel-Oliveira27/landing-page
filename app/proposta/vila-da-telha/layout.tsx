import type { Metadata } from 'next';
import '../_restaurante/estilos.css';
import { Fraunces } from 'next/font/google';

// Serifa de pouco contraste e bojo macio, com cara de letreiro pintado
// à mão — conversa com o tijolo e a madeira do salão e com o letreiro
// da logo, sem imitar a letra dela.
const fraunces = Fraunces({ variable: '--font-marca', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Proposta · Vila da Telha Gastrobar',
  description: 'Proposta de site para o Vila da Telha Gastrobar, em Iguatu — CE.',
  // Não indexar: usa nome, preços e endereço reais de uma casa que
  // existe. Se aparecer no Google, alguém acaba pedindo por aqui.
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={fraunces.variable}>{children}</div>;
}
