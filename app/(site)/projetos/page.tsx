import type { Metadata } from 'next';
import { projetos } from '@/conteudo/projetos';
import CartaoProjeto from '@/componentes/CartaoProjeto';

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Modelos prontos de site, loja on-line e sistema para comércio de Iguatu e região. ' +
    'Cada um pode ser testado antes de qualquer decisão.',
};

export default function Projetos() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-[family-name:var(--font-titulo)] text-4xl tracking-tight sm:text-5xl">
        Projetos
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-tinta-media">
        Tudo aqui já foi construído e está no ar. Abra o que parecer com o seu caso — a versão
        de demonstração tem nome e produtos inventados, mas funciona igual.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projetos.map((p) => (
          <CartaoProjeto key={p.slug} projeto={p} />
        ))}
      </div>
    </div>
  );
}
