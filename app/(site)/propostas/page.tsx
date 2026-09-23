import type { Metadata } from 'next';
import { propostas } from '@/conteudo/propostas';
import ListaPropostas from '@/componentes/ListaPropostas';

export const metadata: Metadata = {
  title: 'Propostas',
  description: 'Sites de comércios de Iguatu como eles poderiam ser, com o conteúdo de cada um.',
  // As propostas usam nome, cardápio e endereço de empresas reais, e
  // cada página já é noindex. A lista também: ela existe para quem
  // chegou na vitrine, não para aparecer quando alguém procura pelo
  // restaurante no Google.
  robots: { index: false, follow: false },
};

export default function Propostas() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-[family-name:var(--font-titulo)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        Propostas
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-tinta-media">
        O site de comércios daqui como ele poderia ser — com o cardápio, as fotos e o endereço de
        verdade de cada um. Veja no computador e no celular antes de abrir.
      </p>

      <div className="mt-10">
        <ListaPropostas propostas={propostas} />
      </div>
    </div>
  );
}
