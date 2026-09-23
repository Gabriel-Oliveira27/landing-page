'use client';

// Cliente por causa do formulário de orçamento: ele precisa de um
// onSubmit que impede o envio, já que numa demonstração não existe
// para onde enviar. O `metadata` mora no layout — Server Component
// e 'use client' não convivem no mesmo arquivo.

const SERVICOS = [
  { t: 'Construção residencial', d: 'Casa do zero, da fundação à entrega das chaves. Projeto, execução e acabamento.' },
  { t: 'Reforma e ampliação', d: 'Ampliar um cômodo, trocar a cobertura, refazer a instalação elétrica ou hidráulica.' },
  { t: 'Obra comercial', d: 'Loja, galpão e sala comercial, com prazo fechado e acompanhamento por etapa.' },
  { t: 'Projeto e regularização', d: 'Planta, memorial, ART e o que a prefeitura pedir para o alvará sair.' },
];

const OBRAS = [
  { nome: 'Residência no Bairro Alto', tipo: 'Casa · 180 m²', prazo: 'Entregue em 7 meses' },
  { nome: 'Galpão logístico', tipo: 'Comercial · 640 m²', prazo: 'Entregue em 5 meses' },
  { nome: 'Reforma de fachada', tipo: 'Comércio · Centro', prazo: 'Entregue em 6 semanas' },
];

export default function DemoConstrutora() {
  return (
    <div className="bg-white text-slate-800">
      <header className="sticky top-9 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-5">
          <span className="whitespace-nowrap text-lg font-bold tracking-tight">
            Alicerce<span className="text-orange-600">.</span>
          </span>
          <nav className="ml-auto hidden gap-5 text-sm sm:flex">
            <a href="#servicos" className="hover:text-orange-600">Serviços</a>
            <a href="#obras" className="hover:text-orange-600">Obras</a>
            <a href="#orcamento" className="hover:text-orange-600">Orçamento</a>
          </nav>
          <a
            href="#orcamento"
            className="ml-auto shrink-0 rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white sm:ml-0"
          >
            Pedir orçamento
          </a>
        </div>
      </header>

      {/* ── Abertura ───────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Engenharia e construção · Iguatu, CE
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Obra com prazo escrito e engenheiro no canteiro.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Atendemos a região há 14 anos, em obra residencial e comercial. Você recebe
            cronograma por etapa e sabe onde o dinheiro está sendo aplicado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#orcamento"
              className="rounded-lg bg-orange-600 px-5 py-3 font-semibold transition-colors hover:bg-orange-500"
            >
              Pedir orçamento
            </a>
            <a
              href="#obras"
              className="rounded-lg border border-slate-600 px-5 py-3 font-semibold transition-colors hover:border-slate-400"
            >
              Ver obras entregues
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-slate-700 pt-6">
            {[
              ['14', 'anos de estrada'],
              ['90+', 'obras entregues'],
              ['100%', 'com ART'],
            ].map(([v, r]) => (
              <div key={r}>
                <dt className="text-3xl font-bold text-orange-400">{v}</dt>
                <dd className="mt-0.5 text-sm text-slate-400">{r}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Serviços ───────────────────────────────────────── */}
      <section id="servicos" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-3xl font-bold tracking-tight">O que fazemos</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {SERVICOS.map((s) => (
            <div key={s.t} className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Obras ──────────────────────────────────────────── */}
      <section id="obras" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Obras entregues</h2>
          <p className="mt-1.5 text-slate-600">Uma amostra. A lista completa vai no orçamento.</p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {OBRAS.map((o) => (
              <li key={o.nome} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                {/* Sem foto de banco de imagem: obra de mentira em site
                    de construtora é o detalhe que denuncia o template.
                    No site real entram as fotos das obras de verdade. */}
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-xs text-slate-500">
                  foto da obra
                </div>
                <div className="p-4">
                  <h3 className="font-semibold leading-snug">{o.nome}</h3>
                  <p className="mt-1 text-sm text-slate-600">{o.tipo}</p>
                  <p className="mt-2 text-xs font-medium text-orange-700">{o.prazo}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Orçamento ──────────────────────────────────────── */}
      <section id="orcamento" className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Pedir orçamento</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Conte o que você pretende fazer. Respondemos em até um dia útil com as
              perguntas que faltam ou já com uma estimativa.
            </p>
            <p className="mt-5 text-sm text-slate-500">
              Rua do Comércio, 1180 — Centro
              <br />
              Iguatu — CE · (88) 0000-0000
            </p>
          </div>

          {/* Formulário de demonstração: não envia nada. No site real
              ele cai no e-mail e num painel de leads. */}
          <form
            className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-3">
              <label className="text-sm">
                <span className="font-medium">Nome</span>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
                  placeholder="Como devemos te chamar"
                />
              </label>
              <label className="text-sm">
                <span className="font-medium">WhatsApp</span>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
                  placeholder="(88) 9 0000-0000"
                />
              </label>
              <label className="text-sm">
                <span className="font-medium">O que você precisa</span>
                <textarea
                  rows={4}
                  className="mt-1 w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
                  placeholder="Construir, reformar, ampliar… conte um pouco"
                />
              </label>
              <button
                type="submit"
                className="rounded-lg bg-slate-900 py-2.5 font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Enviar
              </button>
              <p className="text-center text-xs text-slate-500">
                Formulário de demonstração — não envia nada.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        Alicerce Engenharia e Construção · Iguatu, CE
      </footer>
    </div>
  );
}
