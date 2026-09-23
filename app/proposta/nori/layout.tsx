import type { Metadata } from 'next';
import '../_restaurante/estilos.css';
import { Josefin_Sans } from 'next/font/google';

// Geométrica fina e espaçada — é a mesma família de traço do "NORI" da
// logo. Em peso leve e caixa alta, dá o ar de casa de sushi sem cair
// no pincel "oriental" de cardápio de delivery.
const josefin = Josefin_Sans({ variable: '--font-marca', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Proposta · Nori Restaurante',
  description: 'Proposta de site para o Nori Restaurante, em Iguatu — CE.',
  // Não indexar: usa nome, preços e endereço reais de uma casa que
  // existe. Se aparecer no Google, alguém acaba pedindo por aqui.
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={josefin.variable}>{children}</div>;
}
