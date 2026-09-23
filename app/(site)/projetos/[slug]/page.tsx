import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projetos, projetoPorSlug } from '@/conteudo/projetos';
import { linkWhatsApp } from '@/conteudo/perfil';

type Ctx = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Ctx): Promise<Metadata> {
  const { slug } = await params;
  const p = projetoPorSlug(slug);
  if (!p) return {};
  return { title: p.nome, description: p.chamada };
}

export default async function Projeto({ params }: Ctx) {
  const { slug } = await params;
  const p = projetoPorSlug(slug);
  if (!p) notFound();

  const mensagem = `Olá, Gabriel! Vi o projeto "${p.nome}" no seu site e queria conversar.`;

  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <Link href="/projetos" className="text-sm text-tinta-fraca transition-colors hover:text-acento">
        ← Projetos
      </Link>

      <header className="mt-6">
        <span className="block h-1 w-12 rounded-full" style={{ background: p.cor }} />
        <h1 className="mt-5 font-[family-name:var(--font-titulo)] text-4xl leading-tight tracking-tight sm:text-5xl">
          {p.nome}
        </h1>
        <p className="mt-3 text-xl leading-relaxed text-tinta-media">{p.chamada}</p>
      </header>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {p.para.map((ramo) => (
          <span key={ramo} className="rounded-md bg-areia px-2.5 py-1 text-xs text-tinta-media">
            {ramo}
          </span>
        ))}
      </div>

      {/* Os dois links convivem e querem coisas diferentes: a demo é
          para experimentar sem constrangimento, o site real é para
          acreditar que a coisa existe. */}
      {(p.demo || p.real) && (
        <div className="mt-8 flex flex-wrap gap-3">
          {p.demo && (
            <Link
              href={p.demo}
              className="rounded-xl bg-acento px-5 py-3 font-medium text-white transition-colors hover:bg-acento-forte"
            >
              Abrir a demonstração
            </Link>
          )}
          {p.real && (
            <a
              href={p.real}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-borda-forte px-5 py-3 font-medium transition-colors hover:border-acento hover:text-acento"
            >
              Ver no ar ↗
            </a>
          )}
        </div>
      )}

      {p.acesso && (
        <p className="mt-4 rounded-xl border border-borda bg-areia/60 px-4 py-3 text-sm leading-relaxed text-tinta-media">
          {p.acesso.split('**').map((parte, i) =>
            i % 2 ? (
              <code key={i} className="rounded bg-papel px-1.5 py-0.5 font-semibold text-tinta">
                {parte}
              </code>
            ) : (
              parte
            ),
          )}
        </p>
      )}

      <p className="mt-10 text-lg leading-relaxed">{p.descricao}</p>

      <section className="mt-10">
        <h2 className="font-[family-name:var(--font-titulo)] text-2xl tracking-tight">
          O que você ganha
        </h2>
        <ul className="mt-4 space-y-2.5">
          {p.ganhos.map((g) => (
            <li key={g} className="flex gap-3 leading-relaxed">
              <span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: p.cor }} />
              {g}
            </li>
          ))}
        </ul>
      </section>

      {p.autonomia && (
        <section className="mt-10 rounded-2xl border border-borda bg-areia/50 p-6">
          <h2 className="font-[family-name:var(--font-titulo)] text-2xl tracking-tight">
            O que você mexe sozinho
          </h2>
          <p className="mt-1.5 text-sm text-tinta-media">
            Depois de entregue, isto é tudo que você faz sem me chamar.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {p.autonomia.map((a) => (
              <li key={a} className="flex gap-2.5 text-sm leading-relaxed">
                <span className="text-mato">✓</span>
                {a}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12 border-t border-borda pt-8">
        <h2 className="font-[family-name:var(--font-titulo)] text-2xl tracking-tight">
          Serve para o seu caso?
        </h2>
        <p className="mt-2 leading-relaxed text-tinta-media">
          Me chame e me conte o que você vende. Se este modelo não for o certo, eu digo qual é —
          ou se não for comigo.
        </p>
        <a
          href={linkWhatsApp(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-xl bg-acento px-5 py-3 font-medium text-white transition-colors hover:bg-acento-forte"
        >
          Falar sobre este projeto
        </a>
      </section>
    </article>
  );
}
