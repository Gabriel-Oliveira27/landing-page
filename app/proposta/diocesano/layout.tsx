import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proposta · Diocesano Hotel',
  description: 'Proposta de redesenho do site do Diocesano Hotel, em Iguatu — CE.',
  // Não indexar. A página usa o nome, os preços e o endereço reais de
  // um hotel que existe: se ela aparecer no Google, mais cedo ou mais
  // tarde alguém acha por engano e tenta reservar por aqui. Ela
  // existe para ser mandada por link, não para competir com o site
  // que pretende substituir.
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
