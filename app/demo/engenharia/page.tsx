'use client';

import { useState } from 'react';

// A lista de dúvidas abre e fecha, então o arquivo é cliente. O
// `metadata` fica no layout ao lado.

const SERVICOS = [
  { t: 'Projeto arquitetônico', d: 'Planta baixa, cortes e fachada, no padrão que a prefeitura aceita.' },
  { t: 'Projeto estrutural', d: 'Dimensionamento de fundação, pilares e lajes, com memorial de cálculo.' },
  { t: 'Laudo e vistoria', d: 'Avaliação de patologia, infiltração e trinca, com parecer assinado.' },
  { t: 'Orçamento de obra', d: 'Planilha por etapa, com quantitativo de material e mão de obra.' },
];

const PUBLICACOES = [
  { titulo: 'Reforma de quadra poliesportiva', data: 'Setembro · 2026', resumo: 'Projeto executivo e acompanhamento, em parceria com a prefeitura da região.' },
  { titulo: 'Casa unifamiliar no interior', data: 'Julho · 2026', resumo: 'Projeto arquitetônico e estrutural para terreno em aclive.' },
  { titulo: 'Semana de engenharia', data: 'Maio · 2026', resumo: 'Oficinas abertas à comunidade sobre leitura de projeto e orçamento.' },
];

const DUVIDAS = [
  {
    p: 'Empresa júnior cobra mais barato?',
    r: 'Sim. O preço é reduzido porque somos estudantes com orientação de professor. O trabalho é revisado e assinado por um engenheiro responsável.',
  },
  {
    p: 'Quem assina o projeto?',
    r: 'Um professor engenheiro orienta e assina a ART. O trabalho é nosso, a responsabilidade técnica é dele — é assim que empresa júnior funciona.',
  },
  {
    p: 'Quanto tempo demora?',
    r: 'Depende do porte. Um projeto residencial simples leva de três a cinco semanas, contando as revisões com você.',
  },
  {
    p: 'Atendem fora da cidade?',
    r: 'Atendemos a região. Para vistoria presencial, combinamos o deslocamento na proposta.',
  },
];

export default function DemoEngenharia() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <div className="bg-white text-neutral-800">
      <header className="sticky top-9 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-5">
          <span className="whitespace-nowrap text-lg font-bold tracking-tight text-emerald-900">
            Núcleo <span className="font-light">Jr.</span>
          </span>
          <nav className="ml-auto hidden gap-5 text-sm sm:flex">
            <a href="#servicos" className="hover:text-emerald-700">Serviços</a>
            <a href="#projetos" className="hover:text-emerald-700">Projetos</a>
            <a href="#duvidas" className="hover:text-emerald-700">Dúvidas</a>
          </nav>
          <a
            href="#contato"
            className="ml-auto shrink-0 rounded-lg bg-emerald-800 px-3.5 py-2 text-sm font-semibold text-white sm:ml-0"
          >
            Falar com a equipe
          </a>
        </div>
      </header>

      <section className="border-b border-neutral-200 bg-emerald-50">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Empresa júnior de engenharia civil
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-emerald-950 sm:text-5xl">
            Projeto de engenharia a preço de estudante, com responsável técnico.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-emerald-900/70">
            Somos alunos do curso de Engenharia Civil. Fazemos projeto, laudo e orçamento sob
            orientação de professor, com ART assinada.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-block rounded-lg bg-emerald-800 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Pedir uma proposta
          </a>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Serviços</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {SERVICOS.map((s) => (
            <div key={s.t} className="rounded-xl border border-neutral-200 p-5">
              <h3 className="font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Publicações ────────────────────────────────────
          Esta seção é o ponto do modelo: tudo aqui sai de um painel,
          sem programador no meio. */}
      <section id="projetos" className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-3xl font-bold tracking-tight">Projetos e notícias</h2>
            <p className="text-sm text-neutral-500">Publicado pela própria equipe, sem programador.</p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {PUBLICACOES.map((p) => (
              <li key={p.titulo} className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
                  {p.data}
                </p>
                <h3 className="mt-2 font-semibold leading-snug">{p.titulo}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{p.resumo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="duvidas" className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Dúvidas frequentes</h2>
        <ul className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
          {DUVIDAS.map((d, i) => (
            <li key={d.p}>
              <button
                onClick={() => setAberta(aberta === i ? null : i)}
                aria-expanded={aberta === i}
                className="flex w-full items-center gap-4 py-4 text-left"
              >
                <span className="font-medium">{d.p}</span>
                <span
                  className={`ml-auto shrink-0 text-emerald-700 transition-transform ${
                    aberta === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {aberta === i && (
                <p className="pb-4 text-sm leading-relaxed text-neutral-600">{d.r}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section id="contato" className="border-t border-neutral-200 bg-emerald-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Conte o que você precisa</h2>
          <p className="mx-auto mt-3 max-w-lg text-emerald-100">
            A primeira conversa é gratuita e serve para entender o porte do trabalho.
          </p>
          <a
            href="#contato"
            className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-emerald-900 transition-opacity hover:opacity-90"
          >
            Falar com a equipe
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-neutral-500">
        Núcleo Jr. · Empresa júnior de Engenharia Civil
      </footer>
    </div>
  );
}
