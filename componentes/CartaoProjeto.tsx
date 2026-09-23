import Link from 'next/link';
import type { Projeto } from '@/conteudo/projetos';

export default function CartaoProjeto({ projeto: p }: { projeto: Projeto }) {
  return (
    <Link
      href={`/projetos/${p.slug}`}
      className="group flex flex-col rounded-2xl border border-borda bg-papel p-5 transition-colors hover:border-borda-forte"
    >
      {/* Faixa da cor do projeto. É o que dá identidade própria a cada
          cartão numa grade em que todos têm a mesma forma. */}
      <span
        className="h-1 w-10 rounded-full transition-all group-hover:w-16"
        style={{ background: p.cor }}
      />

      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">{p.nome}</h3>
      <p className="mt-1 text-sm leading-relaxed text-tinta-media">{p.chamada}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {p.para.slice(0, 4).map((ramo) => (
          <li
            key={ramo}
            className="rounded-md bg-areia px-2 py-0.5 text-[11px] text-tinta-media"
          >
            {ramo}
          </li>
        ))}
        {p.para.length > 4 && (
          <li className="px-1 py-0.5 text-[11px] text-tinta-fraca">
            +{p.para.length - 4}
          </li>
        )}
      </ul>

      <span className="mt-4 flex items-center gap-3 border-t border-borda pt-3 text-sm">
        {p.demo && <span className="font-medium text-acento">Testar o modelo</span>}
        {!p.demo && p.real && <span className="font-medium text-acento">Ver no ar</span>}
        <span className="ml-auto text-tinta-fraca transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
