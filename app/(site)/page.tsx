import Link from 'next/link';
import { perfil, passos, linkWhatsApp } from '@/conteudo/perfil';
import { emDestaque } from '@/conteudo/projetos';
import CartaoProjeto from '@/componentes/CartaoProjeto';
import { Icone } from '@/componentes/Icones';
import { PontoDeEspera } from '@/componentes/Carregando';

const DORES = [
  {
    icone: Icone.relogioAreia,
    t: 'Você responde o mesmo preço o dia inteiro',
    d: 'E quando está ocupado atendendo alguém na loja, a mensagem fica sem resposta — e a venda vai para quem respondeu antes.',
  },
  {
    icone: Icone.busca,
    t: 'Quem não te conhece não te acha',
    d: 'Procurar no Google é o primeiro passo de quem acabou de chegar na cidade ou precisa de algo novo. Sem site, você não aparece.',
  },
  {
    icone: Icone.celular,
    t: 'O catálogo vive na sua cabeça',
    d: 'Foto espalhada no status, preço que mudou e ninguém atualizou, cliente perguntando se ainda tem. Nada disso escala.',
  },
];

const ICONE_PASSO = [Icone.conversa, Icone.loja, Icone.paleta, Icone.chave];

export default function Inicio() {
  return (
    <>
      {/* ── Abertura ────────────────────────────────────────────
          Diz o que é, para quem, e onde. "Onde" não é detalhe: para
          comércio de interior, trabalhar com alguém da região é meio
          argumento de venda por si só. */}
      <section className="mx-auto max-w-5xl px-5 pb-14 pt-16 sm:pt-24">
        <p className="flex items-center gap-1.5 text-sm font-medium text-acento">
          <Icone.mapa className="size-4" />
          {perfil.local}
        </p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-titulo)] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          {perfil.chamada}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-tinta-media">{perfil.resumo}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 rounded-xl bg-acento px-5 py-3 font-medium text-white transition-colors hover:bg-acento-forte"
          >
            Ver os modelos funcionando
            <Icone.seta className="size-4" />
            <PontoDeEspera />
          </Link>
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-borda-forte px-5 py-3 font-medium transition-colors hover:border-acento hover:text-acento"
          >
            <Icone.conversa className="size-4" />
            Falar no WhatsApp
          </a>
        </div>

        <p className="mt-5 text-sm text-tinta-fraca">
          Não sabe por onde começar?{' '}
          <span className="text-tinta-media">
            Use o assistente no canto da tela — ele pergunta do seu negócio e sugere um caminho.
          </span>
        </p>
      </section>

      {/* ── O problema, nas palavras de quem vive ele ───────────── */}
      <section className="border-y border-borda bg-areia/50">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <h2 className="font-[family-name:var(--font-titulo)] text-3xl font-bold tracking-tight">
            Vender só por WhatsApp tem um teto.
          </h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-3">
            {DORES.map((i) => {
              const Simbolo = i.icone;
              return (
                <div key={i.t}>
                  <span className="grid size-10 place-items-center rounded-xl bg-acento-fraco text-acento">
                    <Simbolo className="size-5" />
                  </span>
                  <h3 className="mt-3 font-semibold leading-snug">{i.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-tinta-media">{i.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Modelos ─────────────────────────────────────────────
          Os quatro principais aqui, todos em /projetos. Mostrar oito
          na primeira tela é pedir para a pessoa não escolher nenhum. */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-[family-name:var(--font-titulo)] text-3xl font-bold tracking-tight">
              Modelos prontos
            </h2>
            <p className="mt-1.5 text-tinta-media">
              Cada um já existe e está no ar. Você navega antes de decidir qualquer coisa.
            </p>
          </div>
          <Link href="/projetos" className="text-sm font-medium text-acento hover:text-acento-forte">
            ver todos →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {emDestaque.map((p) => (
            <CartaoProjeto key={p.slug} projeto={p} />
          ))}
        </div>
      </section>

      {/* ── Como funciona ───────────────────────────────────────
          A dúvida que trava a maioria não é preço, é "como isso
          acontece" — quem nunca contratou software não sabe o que vai
          ter que fazer nem quanto vai demorar. */}
      <section className="border-t border-borda bg-areia/50">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="font-[family-name:var(--font-titulo)] text-3xl font-bold tracking-tight">
            Como funciona
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, i) => {
              const Simbolo = ICONE_PASSO[i];
              return (
                <li key={p.titulo} className="relative">
                  {/* Linha ligando um passo ao seguinte. Só no desktop,
                      onde eles ficam lado a lado — empilhados, uma
                      linha horizontal apontaria para o nada. */}
                  {i < passos.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-11 top-4 hidden h-px w-[calc(100%-2rem)] bg-borda lg:block"
                    />
                  )}
                  <span className="relative flex size-8 items-center justify-center rounded-full bg-acento text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 flex items-center gap-2 font-semibold">
                    <Simbolo className="size-4 text-acento" />
                    {p.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-tinta-media">{p.texto}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Chamada final ───────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <h2 className="font-[family-name:var(--font-titulo)] text-3xl font-bold tracking-tight sm:text-4xl">
          Me conte o que você vende.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-tinta-media">
          A conversa não custa nada e não tem compromisso. Se o que você precisa não for comigo,
          eu digo.
        </p>
        <a
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-xl bg-acento px-6 py-3.5 font-medium text-white transition-colors hover:bg-acento-forte"
        >
          Chamar no WhatsApp
        </a>
        <p className="mt-3 text-sm text-tinta-fraca">{perfil.contato.whatsappExibicao}</p>
      </section>
    </>
  );
}
