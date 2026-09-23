'use client';

import { useState } from 'react';

// A consulta de disponibilidade é o ponto inteiro desta demo, e ela
// precisa de estado — por isso o arquivo é cliente e o `metadata`
// mora no layout ao lado.

type Carro = {
  nome: string;
  categoria: string;
  diaria: string;
  cambio: string;
  lugares: number;
  /** Dias do mês já reservados. Numa demo, a agenda é inventada. */
  ocupado: number[];
};

const FROTA: Carro[] = [
  { nome: 'Hatch compacto', categoria: 'Econômico', diaria: 'R$ 120', cambio: 'Manual', lugares: 5, ocupado: [12, 13, 14, 20] },
  { nome: 'Sedan', categoria: 'Executivo', diaria: 'R$ 180', cambio: 'Automático', lugares: 5, ocupado: [5, 6, 7] },
  { nome: 'SUV', categoria: 'Conforto', diaria: 'R$ 240', cambio: 'Automático', lugares: 5, ocupado: [] },
  { nome: 'Van 15 lugares', categoria: 'Turismo', diaria: 'R$ 450', cambio: 'Manual', lugares: 15, ocupado: [18, 19, 20, 21, 22] },
  { nome: 'Picape cabine dupla', categoria: 'Utilitário', diaria: 'R$ 280', cambio: 'Manual', lugares: 5, ocupado: [9] },
  { nome: 'Guincho leve', categoria: 'Serviço', diaria: 'sob consulta', cambio: '—', lugares: 2, ocupado: [] },
];

function diasEntre(inicio: string, fim: string): number[] {
  const a = new Date(inicio);
  const b = new Date(fim);
  if (isNaN(+a) || isNaN(+b) || b < a) return [];
  const dias: number[] = [];
  for (const d = new Date(a); d <= b; d.setDate(d.getDate() + 1)) dias.push(d.getDate());
  return dias;
}

export default function DemoLocadora() {
  const [retirada, setRetirada] = useState('');
  const [devolucao, setDevolucao] = useState('');

  const periodo = retirada && devolucao ? diasEntre(retirada, devolucao) : [];
  const consultando = periodo.length > 0;

  const livre = (c: Carro) => !periodo.some((d) => c.ocupado.includes(d));

  return (
    <div className="bg-white text-slate-800">
      <header className="sticky top-9 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-5">
          <span className="whitespace-nowrap text-lg font-bold tracking-tight text-sky-900">Caminho Certo</span>
          <nav className="ml-auto hidden gap-5 text-sm sm:flex">
            <a href="#frota" className="hover:text-sky-700">Frota</a>
            <a href="#servicos" className="hover:text-sky-700">Serviços</a>
          </nav>
          <a
            href="#frota"
            className="ml-auto shrink-0 rounded-lg bg-sky-700 px-3.5 py-2 text-sm font-semibold text-white sm:ml-0"
          >
            Ver disponibilidade
          </a>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-gradient-to-br from-sky-900 to-sky-700 text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">
            Locação · Guincho · Turismo — Iguatu, CE
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Veja o que está livre antes de ligar.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-sky-100">
            Escolha o período e o site mostra na hora quais carros estão disponíveis.
            Sem esperar resposta no WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Consulta ───────────────────────────────────────── */}
      <section id="frota" className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-wrap items-end gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <label className="text-sm">
            <span className="font-medium">Retirada</span>
            <input
              type="date"
              value={retirada}
              onChange={(e) => setRetirada(e.target.value)}
              className="mt-1 block rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-600"
            />
          </label>
          <label className="text-sm">
            <span className="font-medium">Devolução</span>
            <input
              type="date"
              value={devolucao}
              onChange={(e) => setDevolucao(e.target.value)}
              className="mt-1 block rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-600"
            />
          </label>

          <p className="ml-auto text-sm text-slate-600">
            {consultando
              ? `${periodo.length} ${periodo.length === 1 ? 'diária' : 'diárias'} · ${FROTA.filter(livre).length} de ${FROTA.length} disponíveis`
              : 'Escolha as duas datas para ver a disponibilidade.'}
          </p>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FROTA.map((c) => {
            const disponivel = !consultando || livre(c);
            return (
              <li
                key={c.nome}
                className={`overflow-hidden rounded-2xl border transition-opacity ${
                  disponivel ? 'border-slate-200' : 'border-slate-200 opacity-50'
                }`}
              >
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-xs text-slate-500">
                  foto do veículo
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-snug">{c.nome}</h3>
                      <p className="text-sm text-slate-600">{c.categoria}</p>
                    </div>
                    {consultando && (
                      <span
                        className={`ml-auto shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                          disponivel
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {disponivel ? 'livre' : 'ocupado'}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    {c.cambio} · {c.lugares} lugares
                  </p>

                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="font-semibold text-sky-800">{c.diaria}</span>
                    <button
                      disabled={!disponivel}
                      className="rounded-lg bg-sky-700 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600 disabled:bg-slate-300"
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="servicos" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Também fazemos</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { t: 'Guincho 24 horas', d: 'Atendimento na cidade e na estrada, a qualquer hora.' },
              { t: 'Turismo e fretamento', d: 'Van e ônibus para excursão, evento e transporte de equipe.' },
              { t: 'Locação mensal', d: 'Para empresa que precisa de carro fixo, com manutenção inclusa.' },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500">
        Caminho Certo Locadora · Iguatu, CE · (88) 0000-0000
      </footer>
    </div>
  );
}
