import Link from 'next/link';
import { Icone } from './Icones';
import { PontoDeEspera } from './Carregando';
import type { Projeto } from '@/conteudo/projetos';

export default function CartaoProjeto({ projeto: p }: { projeto: Projeto }) {
  const Simbolo = Icone[p.icone];

  return (
    <Link
      href={`/projetos/${p.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-borda bg-papel p-5 transition-all hover:-translate-y-0.5 hover:border-borda-forte hover:shadow-lg"
    >
      {/* Véu da cor do projeto, aceso só no hover. É o que dá a cada
          cartão identidade própria numa grade em que todos têm a
          mesma forma — sem pintar a coisa toda e virar semáforo. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
        style={{ background: p.cor }}
      />

      <span
        className="grid size-11 shrink-0 place-items-center rounded-xl transition-transform group-hover:scale-105"
        style={{ background: `${p.cor}1A`, color: p.cor }}
      >
        <Simbolo className="size-[22px]" />
      </span>

      <h3 className="mt-4 font-[family-name:var(--font-titulo)] text-lg font-bold leading-snug tracking-tight">
        {p.nome}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-tinta-media">{p.chamada}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {p.para.slice(0, 4).map((ramo) => (
          <li key={ramo} className="rounded-md bg-areia px-2 py-0.5 text-[11px] text-tinta-media">
            {ramo}
          </li>
        ))}
        {p.para.length > 4 && (
          <li className="px-1 py-0.5 text-[11px] text-tinta-fraca">+{p.para.length - 4}</li>
        )}
      </ul>

      <span className="mt-auto flex items-center gap-2 pt-4 text-sm">
        <span className="font-medium text-acento">
          {p.demo ? 'Testar o modelo' : p.real ? 'Ver no ar' : 'Saber mais'}
        </span>
        <Icone.seta className="size-4 text-acento transition-transform group-hover:translate-x-1" />
        <PontoDeEspera className="ml-auto" />
      </span>
    </Link>
  );
}
