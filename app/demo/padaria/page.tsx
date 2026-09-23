import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demonstração · Padaria',
  robots: { index: false },
};

const CARDAPIO = [
  { nome: 'Pão francês', preco: 'R$ 16,90 / kg', nota: 'Sai do forno de hora em hora' },
  { nome: 'Pão doce', preco: 'R$ 3,50', nota: 'Unidade' },
  { nome: 'Sonho de creme', preco: 'R$ 6,00', nota: 'Recheio feito na casa' },
  { nome: 'Bolo de milho', preco: 'R$ 28,00', nota: 'Forma inteira' },
  { nome: 'Bolo de chocolate', preco: 'R$ 45,00', nota: 'Aro 20 · serve 12' },
  { nome: 'Salgado assado', preco: 'R$ 5,50', nota: 'Frango, carne ou queijo' },
  { nome: 'Cuscuz com manteiga', preco: 'R$ 8,00', nota: 'Só de manhã' },
  { nome: 'Café passado', preco: 'R$ 3,00', nota: 'Xícara' },
];

const HORARIOS = [
  ['Segunda a sexta', '05h00 — 19h00'],
  ['Sábado', '05h00 — 18h00'],
  ['Domingo', '05h00 — 11h00'],
];

// Número de exemplo — a demo não pode mandar mensagem para ninguém
// de verdade, e um número real aqui vira ligação errada.
const PEDIDO = 'https://wa.me/5500000000000';

export default function DemoPadaria() {
  return (
    <div className="bg-[#FFFBF3] text-[#3A2A1C]">
      {/* ── Topo ───────────────────────────────────────────── */}
      <header className="sticky top-9 z-40 border-b border-[#EADFCB] bg-[#FFFBF3]/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-4xl items-center gap-4 px-5">
          <span className="whitespace-nowrap font-serif text-xl font-bold tracking-tight">Flor de Trigo</span>
          <nav className="ml-auto hidden gap-5 text-sm sm:flex">
            <a href="#cardapio" className="hover:text-[#B5651D]">Cardápio</a>
            <a href="#encomendas" className="hover:text-[#B5651D]">Encomendas</a>
            <a href="#onde" className="hover:text-[#B5651D]">Onde estamos</a>
          </nav>
          <a
            href={PEDIDO}
            className="ml-auto shrink-0 rounded-lg bg-[#B5651D] px-3.5 py-2 text-sm font-semibold text-white sm:ml-0"
          >
            Fazer pedido
          </a>
        </div>
      </header>

      {/* ── Abertura ───────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#B5651D]">
          Padaria e confeitaria · Iguatu, CE
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
          Pão quente desde as cinco da manhã.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#6B5744]">
          São trinta anos no mesmo ponto, fazendo pão, bolo e salgado todo dia.
          Peça pelo WhatsApp e retire pronto, ou encomende para a sua festa.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={PEDIDO}
            className="rounded-xl bg-[#B5651D] px-5 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Pedir pelo WhatsApp
          </a>
          <a
            href="#cardapio"
            className="rounded-xl border border-[#D9C7A8] px-5 py-3 font-semibold transition-colors hover:border-[#B5651D]"
          >
            Ver o cardápio
          </a>
        </div>
      </section>

      {/* ── Cardápio ───────────────────────────────────────── */}
      <section id="cardapio" className="border-y border-[#EADFCB] bg-white">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <h2 className="font-serif text-3xl">Cardápio</h2>
          <p className="mt-1.5 text-[#6B5744]">Preços de hoje. Atualizados pela própria padaria.</p>

          <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {CARDAPIO.map((i) => (
              <li key={i.nome} className="flex items-baseline gap-3 border-b border-dashed border-[#EADFCB] pb-3">
                <div className="min-w-0">
                  <p className="font-semibold">{i.nome}</p>
                  <p className="text-sm text-[#8A7660]">{i.nota}</p>
                </div>
                <span className="ml-auto shrink-0 font-semibold text-[#B5651D]">{i.preco}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Encomendas ─────────────────────────────────────── */}
      <section id="encomendas" className="mx-auto max-w-4xl px-5 py-14">
        <h2 className="font-serif text-3xl">Encomendas</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { t: 'Bolo de aniversário', d: 'Escolha a massa, o recheio e o tamanho. Peça com 2 dias.' },
            { t: 'Salgados para festa', d: 'A partir de 100 unidades. Assados ou fritos na hora.' },
            { t: 'Café da manhã', d: 'Cesta montada, entregue na casa ou no trabalho.' },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-[#EADFCB] bg-white p-5">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6B5744]">{c.d}</p>
            </div>
          ))}
        </div>
        <a
          href={PEDIDO}
          className="mt-6 inline-block rounded-xl bg-[#B5651D] px-5 py-3 font-semibold text-white transition-opacity hover:opacity-90"
        >
          Encomendar pelo WhatsApp
        </a>
      </section>

      {/* ── Onde ───────────────────────────────────────────── */}
      <section id="onde" className="border-t border-[#EADFCB] bg-[#F7EEDF]">
        <div className="mx-auto grid max-w-4xl gap-8 px-5 py-14 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">Onde estamos</h2>
            <p className="mt-3 leading-relaxed text-[#6B5744]">
              Rua das Flores, 240 — Centro
              <br />
              Iguatu — CE
            </p>
            <p className="mt-3 font-semibold text-[#B5651D]">(88) 0000-0000</p>
          </div>

          <div>
            <h3 className="font-semibold">Horário</h3>
            <dl className="mt-3 space-y-1.5 text-sm">
              {HORARIOS.map(([dia, hora]) => (
                <div key={dia} className="flex gap-3 border-b border-dashed border-[#DFCFB4] pb-1.5">
                  <dt className="text-[#6B5744]">{dia}</dt>
                  <dd className="ml-auto font-medium">{hora}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-4xl px-5 py-8 text-sm text-[#8A7660]">
        Flor de Trigo · Padaria e confeitaria · Iguatu, CE
      </footer>
    </div>
  );
}
