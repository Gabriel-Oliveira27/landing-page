'use client';

import { useState } from 'react';
import { hotel, quartos, espacos, instalacoes, historia, regulamento } from './dados';

// Cliente por causa do regulamento que abre e fecha e da escolha de
// quarto que monta a mensagem. O `metadata` mora no layout ao lado.

const reserva = (quarto?: string) =>
  `https://wa.me/${hotel.whatsapp}?text=` +
  encodeURIComponent(
    quarto
      ? `Olá! Gostaria de verificar disponibilidade de um apartamento ${quarto} no Diocesano Hotel.`
      : 'Olá! Gostaria de verificar disponibilidade no Diocesano Hotel.',
  );

const real = (v: number) => `R$ ${v},00`;

export default function PropostaDiocesano() {
  const [abertoRegulamento, setAbertoRegulamento] = useState(false);

  return (
    <div className="bg-[#FBF8F4] text-[#2A211C]">
      {/* ── Cabeçalho ───────────────────────────────────────── */}
      <header className="sticky top-9 z-40 border-b border-[#E8DDD0] bg-[#FBF8F4]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-5">
          <span className="min-w-0">
            <span className="block whitespace-nowrap font-serif text-lg font-bold leading-none tracking-tight text-[#7B1E2B]">
              Diocesano
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#9A8878]">
              Hotel · Iguatu
            </span>
          </span>

          <nav className="ml-auto hidden gap-6 text-sm lg:flex">
            <a href="#quartos" className="hover:text-[#7B1E2B]">Apartamentos</a>
            <a href="#hotel" className="hover:text-[#7B1E2B]">O hotel</a>
            <a href="#eventos" className="hover:text-[#7B1E2B]">Eventos</a>
            <a href="#historia" className="hover:text-[#7B1E2B]">História</a>
            <a href="#contato" className="hover:text-[#7B1E2B]">Contato</a>
          </nav>

          <a
            href={reserva()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto shrink-0 rounded-lg bg-[#7B1E2B] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:ml-0"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* ── Abertura ─────────────────────────────────────────
          O lugar que hoje é ocupado pelo regulamento. Quem chega
          precisa saber onde está, o que é a casa e como reservar —
          nessa ordem. As regras são importantes, mas não são
          convite. */}
      <section className="relative overflow-hidden border-b border-[#E8DDD0]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7B1E2B] via-[#63202A] to-[#3D1A20]" />
        {/* Textura discreta: sem foto, o bloco de cor chapada fica
            duro. No site real entram as fotos do hotel. */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)',
            backgroundSize: '42px 42px, 58px 58px',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#E8C9A0]">
            Desde 1965 · {hotel.cidade}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.1] text-white sm:text-6xl">
            Uma casa de hospedagem com sessenta anos de história no centro de Iguatu.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Quartos climatizados, café da manhã incluso, piscinas, restaurante e capela. O
            conforto de um hotel de padrão com a tranquilidade de quem recebe visita há
            três gerações.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={reserva()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-6 py-3.5 font-semibold text-[#7B1E2B] transition-opacity hover:opacity-90"
            >
              Verificar disponibilidade
            </a>
            <a
              href="#quartos"
              className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:border-white/70"
            >
              Ver apartamentos
            </a>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-7 sm:grid-cols-4">
            {[
              ['A partir de', 'R$ 79'],
              ['Café da manhã', 'incluso'],
              ['Auditório', '450 lugares'],
              ['Piscinas', '7h às 22h'],
            ].map(([r, v]) => (
              <div key={r}>
                <dt className="text-[11px] uppercase tracking-wider text-white/50">{r}</dt>
                <dd className="mt-1 font-serif text-xl text-[#E8C9A0]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Apartamentos ─────────────────────────────────────
          Os preços em TEXTO. Hoje eles vivem dentro de um JPEG: o
          Google não indexa, leitor de tela não lê, no celular fica
          ilegível, e trocar um valor exige editor de imagem. */}
      <section id="quartos" className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl">Apartamentos</h2>
        <p className="mt-2 max-w-xl text-[#6B5A4E]">
          Todas as diárias incluem café da manhã, servido das 6h às 9h30. A diária é de 24
          horas e começa ao meio-dia.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {quartos.map((q) => (
            <article
              key={q.slug}
              className={`flex flex-col rounded-2xl border bg-white p-5 transition-shadow hover:shadow-lg sm:p-6 ${
                q.destaque ? 'border-[#7B1E2B]/30' : 'border-[#E8DDD0]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl leading-none">{q.nome}</h3>
                  <p className="mt-1.5 text-sm text-[#6B5A4E]">{q.resumo}</p>
                </div>
                {q.destaque && (
                  <span className="shrink-0 rounded-md bg-[#7B1E2B]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#7B1E2B]">
                    mais procurado
                  </span>
                )}
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {q.itens.map((i) => (
                  <li
                    key={i}
                    className="rounded-md bg-[#F4EDE4] px-2 py-1 text-[11px] text-[#6B5A4E]"
                  >
                    {i}
                  </li>
                ))}
              </ul>

              {/* Envolve em vez de espremer. Dois preços em serifa mais
                  o botão somam mais que a largura de um cartão em tela
                  estreita — sem `flex-wrap` a página inteira ganhava
                  rolagem horizontal. */}
              <div className="mt-5 flex flex-wrap items-end gap-x-5 gap-y-3 border-t border-[#E8DDD0] pt-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#9A8878]">Individual</p>
                  <p className="font-serif text-2xl leading-none text-[#7B1E2B]">
                    {real(q.individual)}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#9A8878]">Duplo</p>
                  <p className="font-serif text-2xl leading-none text-[#7B1E2B]">{real(q.duplo)}</p>
                </div>
                <a
                  href={reserva(q.nome)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto shrink-0 rounded-lg border border-[#7B1E2B] px-3.5 py-2 text-sm font-semibold text-[#7B1E2B] transition-colors hover:bg-[#7B1E2B] hover:text-white"
                >
                  Reservar
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm text-[#9A8878]">
          Apartamento quádruplo e criança de 5 a 10 anos: adicional de R$ 40 por diária.
          Pet: R$ 25 por diária.
        </p>
      </section>

      {/* ── O hotel ──────────────────────────────────────────── */}
      <section id="hotel" className="border-y border-[#E8DDD0] bg-[#F4EDE4]">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="font-serif text-3xl sm:text-4xl">A casa</h2>
          <p className="mt-2 max-w-xl text-[#6B5A4E]">
            O hotel ocupa parte do Centro de Treinamento Diocesano — um complexo de jardins,
            salões e capela, no bairro Planalto.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {instalacoes.map((i) => (
              <div key={i.nome} className="rounded-2xl border border-[#E0D3C2] bg-white p-5">
                <h3 className="font-serif text-xl">{i.nome}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6B5A4E]">{i.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eventos ──────────────────────────────────────────
          Separado dos quartos de propósito: quem procura auditório
          para um congresso não é a mesma pessoa que procura cama, e
          hoje as duas coisas dividem o mesmo menu confuso. */}
      <section id="eventos" className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl">Eventos e formações</h2>
        <p className="mt-2 max-w-2xl text-[#6B5A4E]">
          O Centro nasceu para receber encontros, e continua sendo referência em Iguatu para
          congresso, curso, palestra e reunião de equipe. Todas as áreas climatizadas e com
          internet.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {espacos.map((e) => (
            <article key={e.nome} className="flex flex-col rounded-2xl border border-[#E8DDD0] bg-white p-5">
              <h3 className="font-serif text-xl leading-snug">{e.nome}</h3>
              <p className="mt-1 text-sm font-medium text-[#7B1E2B]">{e.capacidade}</p>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#6B5A4E]">{e.texto}</p>
              <p className="mt-4 border-t border-[#E8DDD0] pt-3 text-sm">
                <span className="text-[#9A8878]">Valor: </span>
                <span className="font-semibold">{e.preco}</span>
              </p>
            </article>
          ))}
        </div>

        <a
          href={`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para evento no Diocesano Hotel.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-xl bg-[#7B1E2B] px-6 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
        >
          Pedir orçamento para evento
        </a>
      </section>

      {/* ── História ─────────────────────────────────────────
          Hoje isso está numa aba interna chamada "Sobre". É o maior
          ativo do hotel e o que nenhum concorrente da cidade tem. */}
      <section id="historia" className="border-y border-[#E8DDD0] bg-[#F4EDE4]">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <h2 className="font-serif text-3xl sm:text-4xl">Sessenta anos</h2>

          <ol className="mt-10 space-y-8 border-l-2 border-[#DCCBB6] pl-7">
            {historia.map((h) => (
              <li key={h.ano} className="relative">
                <span className="absolute -left-[2.2rem] top-1 size-3.5 rounded-full border-2 border-[#F4EDE4] bg-[#7B1E2B]" />
                <p className="font-serif text-2xl text-[#7B1E2B]">{h.ano}</p>
                <h3 className="mt-0.5 font-semibold">{h.titulo}</h3>
                <p className="mt-1 leading-relaxed text-[#6B5A4E]">{h.texto}</p>
              </li>
            ))}
          </ol>

          <figure className="mt-12 border-l-2 border-[#7B1E2B] pl-6">
            <blockquote className="font-serif text-2xl italic text-[#7B1E2B]">
              {hotel.lema}
            </blockquote>
            <figcaption className="mt-1.5 text-sm text-[#9A8878]">
              “{hotel.lemaTraduzido}” — lema de Dom Edson de Castro Homem
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Contato ──────────────────────────────────────────── */}
      <section id="contato" className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">Onde estamos</h2>
            <address className="mt-5 not-italic leading-relaxed text-[#6B5A4E]">
              {hotel.endereco}
              <br />
              {hotel.cep} — {hotel.cidade}
            </address>

            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-[#9A8878]">Telefone</dt>
                <dd className="font-medium">{hotel.telefone}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-[#9A8878]">WhatsApp</dt>
                <dd className="font-medium">{hotel.celular}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-[#9A8878]">E-mail</dt>
                <dd className="break-all font-medium">{hotel.email}</dd>
              </div>
            </dl>

            <div className="mt-6 flex gap-3">
              <a
                href={hotel.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#E0D3C2] px-3.5 py-2 text-sm transition-colors hover:border-[#7B1E2B] hover:text-[#7B1E2B]"
              >
                Instagram
              </a>
              <a
                href={hotel.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#E0D3C2] px-3.5 py-2 text-sm transition-colors hover:border-[#7B1E2B] hover:text-[#7B1E2B]"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-[#7B1E2B] p-7 text-white">
            <h3 className="font-serif text-2xl">Reservar é uma conversa</h3>
            <p className="mt-2.5 leading-relaxed text-white/75">
              Fale direto com a recepção pelo WhatsApp. Diga a data e quantas pessoas, e a
              gente confirma a disponibilidade na hora.
            </p>
            <a
              href={reserva()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3.5 font-semibold text-[#7B1E2B] transition-opacity hover:opacity-90"
            >
              Chamar no WhatsApp
            </a>
            <p className="mt-3 text-sm text-white/60">{hotel.celular}</p>
          </div>
        </div>
      </section>

      {/* ── Regulamento ──────────────────────────────────────
          Onde uma regra deve ficar: disponível, e não na entrada.
          Hoje é a primeira coisa que o site mostra. */}
      <section className="border-t border-[#E8DDD0] bg-[#F4EDE4]">
        <div className="mx-auto max-w-4xl px-5 py-12">
          <button
            onClick={() => setAbertoRegulamento((a) => !a)}
            aria-expanded={abertoRegulamento}
            className="flex w-full items-center gap-3 text-left"
          >
            <span className="font-serif text-xl">Regulamento para hóspedes</span>
            <span
              className={`ml-auto text-[#7B1E2B] transition-transform ${
                abertoRegulamento ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>

          {abertoRegulamento && (
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-[#6B5A4E]">
              {regulamento.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#C9A227]" />
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-5 py-10 text-sm text-[#9A8878]">
        <p>
          {hotel.nome} · {hotel.cidade}
        </p>
        <p className="mt-1.5">
          Esta é uma proposta de redesenho, não o site oficial. O site atual está em{' '}
          <a
            href={hotel.siteAtual}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#7B1E2B]"
          >
            diocesanohotel.com.br
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
