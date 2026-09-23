'use client';

import Image from 'next/image';
import Avaliacoes from '../_restaurante/Avaliacoes';
import Cardapio from '../_restaurante/Cardapio';
import ComoChegar, { Agora } from '../_restaurante/ComoChegar';
import { Carrossel, Destaques } from '../_restaurante/Galerias';
import { useHoje } from '../_restaurante/horario';
import { I } from '../_restaurante/Icones';
import { useRevelar } from '../_restaurante/movimento';
import ParaACasa from '../_restaurante/ParaACasa';
import Reserva from '../_restaurante/Reserva';
import Rodape from '../_restaurante/Rodape';
import { real, variaveis, whatsapp } from '../_restaurante/tipos';
import {
  avaliacoes,
  cardapio,
  casa,
  cozinha,
  park,
  quixada,
  rodape,
  rodapeCardapio,
  rodizios,
  semana,
  tema,
} from './dados';

/**
 * As fotos e a logo são as DELES.
 *
 * A logo saiu da capa do próprio cardápio em PDF — dourado sobre creme,
 * recortado sem o fundo. As fotos são todas do Instagram da casa; as
 * que vinham com texto de arte por cima entram recortadas, só a comida.
 * Nenhuma mostra cliente — e as do parquinho ficaram de fora porque
 * todas mostram criança.
 */
const FOTOS = {
  logo: '/proposta/nori/logo.png',
  combinado: '/proposta/nori/combinado.jpg',
  pizza: '/proposta/nori/pizza-meio-a-meio.jpg',
  sushiDog: '/proposta/nori/sushi-dog.jpg',
};

const totalItens = cardapio.reduce((s, c) => s + c.itens.length, 0);

/**
 * A próxima quinta de rodízio, olhando o calendário publicado.
 * `undefined` enquanto não se sabe que dia é hoje; `null` quando a
 * agenda publicada já acabou.
 */
function useProximo() {
  const hoje = useHoje();
  if (!hoje) return undefined;
  return rodizios.agenda.find((r) => r.data >= hoje) ?? null;
}

const dataCurta = (iso: string) => {
  const [, m, d] = iso.split('-');
  return `${d}/${m}`;
};

function Titulo({ sobre, children, claro = false }: { sobre: string; children: React.ReactNode; claro?: boolean }) {
  return (
    <div data-revelar>
      <p
        className={`font-[family-name:var(--font-marca)] text-sm uppercase tracking-[0.3em] ${
          claro ? 'text-[var(--destaque)]' : 'text-[var(--marca)]'
        }`}
      >
        {sobre}
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-marca)] text-4xl font-light uppercase leading-tight tracking-wide sm:text-5xl">
        {children}
      </h2>
    </div>
  );
}

export default function PropostaNori() {
  useRevelar();
  const proximo = useProximo();

  return (
    <div style={variaveis(tema)} className="bg-[var(--fundo)] text-[var(--tinta)]">
      {/* ── Cabeçalho ───────────────────────────────────────── */}
      <header className="sticky top-9 z-40 border-b border-[var(--borda)] bg-[var(--fundo)]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
          <Image src={FOTOS.logo} alt={casa.nome} width={593} height={242} loading="eager" className="h-12 w-auto shrink-0" />

          <nav className="ml-auto hidden gap-6 text-sm lg:flex">
            {[
              ['#cardapio', 'Cardápio'],
              ['#park', 'Nori Park'],
              ['#reservas', 'Reservas'],
              ['#avaliacoes', 'Avaliações'],
              ['#contato', 'Como chegar'],
            ].map(([href, rotulo]) => (
              <a key={href} href={href} className="relative py-1 transition-colors hover:text-[var(--marca)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--marca)] after:transition-transform hover:after:scale-x-100">
                {rotulo}
              </a>
            ))}
          </nav>

          <a
            href="#reservas"
            className="ml-auto inline-flex shrink-0 items-center gap-2 bg-[var(--marca)] px-4 py-2.5 text-sm font-semibold text-[var(--sobre-marca)] transition-opacity hover:opacity-90 lg:ml-0"
          >
            <I.calendario className="size-4" />
            Reservar
          </a>
        </div>
      </header>

      {/* ── Abertura ───────────────────────────────────────────
          A frase é a da bio deles. O que o Nori junta que ninguém na
          cidade junta é sushi, pizza e um parque para as crianças — é o
          dia a dia da casa, e é isso que a abertura precisa dizer. O
          rodízio é de uma noite por semana: fica mais abaixo. */}
      <section className="relative overflow-hidden bg-[var(--marca-escura)] text-[#F6EFE2]">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div>
            <div className="rest-entrada flex flex-wrap items-center gap-3" style={{ '--i': 0 } as React.CSSProperties}>
              <p className="font-[family-name:var(--font-marca)] text-sm uppercase tracking-[0.3em] text-[var(--destaque)]">
                Sushi · Pizza · Iguatu
              </p>
              <Agora semana={semana} claro />
            </div>

            <h1
              className="rest-entrada mt-6 font-[family-name:var(--font-marca)] text-5xl font-light uppercase leading-[1.02] tracking-wide sm:text-7xl"
              style={{ '--i': 1 } as React.CSSProperties}
            >
              Sushi, pizza e sabor de verdade.
            </h1>
            <p className="rest-entrada mt-6 max-w-lg text-lg leading-relaxed text-[#F6EFE2]/75" style={{ '--i': 2 } as React.CSSProperties}>
              Da cozinha japonesa à pizzaria, com pratos e grelhados no meio — e o Nori Park para as
              crianças brincarem enquanto a mesa conversa.
            </p>

            <div className="rest-entrada mt-8 flex flex-wrap gap-3" style={{ '--i': 3 } as React.CSSProperties}>
              <a
                href="#reservas"
                className="inline-flex items-center gap-2 bg-[var(--destaque)] px-6 py-3.5 font-semibold text-[var(--marca-escura)] transition-transform hover:-translate-y-0.5"
              >
                <I.calendario className="size-4" />
                Reservar mesa
              </a>
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 font-semibold transition-colors hover:border-white/60"
              >
                <I.hashi className="size-4" />
                Ver o cardápio
              </a>
            </div>

            <dl
              className="rest-entrada mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-white/10 pt-7 sm:grid-cols-4"
              style={{ '--i': 4 } as React.CSSProperties}
            >
              {[
                ['No Google', '4,4 ★'],
                ['Avaliações', '652'],
                ['Todo dia', '18h à 0h'],
                ['Nori Park', 'até 8 anos'],
              ].map(([r, v]) => (
                <div key={r}>
                  <dt className="text-[11px] uppercase tracking-wider text-white/45">{r}</dt>
                  <dd className="mt-1 font-[family-name:var(--font-marca)] text-xl text-[var(--destaque)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Três fotos no lugar de uma: o Nori são duas cozinhas, e a
              abertura mostra as duas antes de qualquer palavra. */}
          <div className="grid h-[26rem] grid-cols-2 grid-rows-2 gap-2 sm:h-[34rem]">
            {[
              { src: FOTOS.combinado, alt: 'Combinado de sushi servido no barco', classe: 'row-span-2', i: 1 },
              { src: FOTOS.pizza, alt: 'Pizza meio a meio', classe: '', i: 2 },
              { src: FOTOS.sushiDog, alt: 'Sushi Dog empanado com couve frita', classe: '', i: 3 },
            ].map((f) => (
              <div
                key={f.src}
                className={`rest-entrada group relative overflow-hidden ${f.classe}`}
                style={{ '--i': f.i } as React.CSSProperties}
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  preload={f.i === 1}
                  sizes="(min-width: 1024px) 18rem, 50vw"
                  className="rest-zoom object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O que tem no Nori ─────────────────────────────────── */}
      <section className="border-b border-[var(--borda)]">
        <div className="mx-auto max-w-6xl">
          <Destaques
            itens={[
              { icone: I.hashi, titulo: 'Sushi e pizza', texto: 'As duas cozinhas no mesmo pedido.' },
              { icone: I.balao, titulo: 'Nori Park', texto: 'Brinquedos para crianças até 8 anos.' },
              { icone: I.moto, titulo: 'Delivery', texto: 'Monte o pedido aqui e mande pelo WhatsApp.' },
              { icone: I.musica, titulo: 'Música ao vivo', texto: 'Nas noites anunciadas no Instagram.' },
              { icone: I.relogio, titulo: 'Todos os dias', texto: 'Das 18h à meia-noite.' },
            ]}
          />
        </div>
      </section>

      {/* ── Da cozinha ────────────────────────────────────────── */}
      <section className="overflow-hidden py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Titulo sobre="Da cozinha">Os pedidos da casa</Titulo>
          <div className="mt-8">
            <Carrossel fotos={cozinha} rotulo="Pratos do Nori" />
          </div>
        </div>
      </section>

      {/* ── Cardápio ───────────────────────────────────────── */}
      <section id="cardapio" className="scroll-mt-28 border-y border-[var(--borda)] bg-[var(--papel)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <Titulo sobre="Cardápio">Do sashimi à pizza doce</Titulo>
            <p data-revelar className="mt-3 text-lg text-[var(--tinta-media)]">
              {totalItens} itens, com preço. Busque pelo nome ou pelo código, e monte o pedido aqui —
              ele chega pronto no WhatsApp.
            </p>
          </div>

          <div className="mt-8">
            <Cardapio secoes={cardapio} numeroWhatsApp={casa.whatsapp} casa={casa.curto} rodape={rodapeCardapio} />
          </div>

          <div className="mt-12">
            <ParaACasa titulo="Um PDF de 14 páginas no lugar do cardápio">
              <p>
                O cardápio de vocês é um PDF de <b>14 páginas e 9 MB</b> no Google Drive. No
                celular, é baixar, esperar e dar zoom página por página para achar o preço de uma
                pizza de 8 fatias. E o Google não lê o que está lá dentro — quem procura
                &quot;temaki em Iguatu&quot; não chega no Nori.
              </p>
              <p>
                Aqui são os mesmos {totalItens} itens, em texto, com os códigos de vocês — inclusive
                o de 4 e o de 8 fatias de cada pizza, para o pedido chegar certo. Um detalhe que o
                levantamento achou: o código <b>174</b> está impresso para duas pizzas (Calabresa
                Especial e Carne de Sol Especial).
              </p>
              <p>
                Todas as fotos desta página são de vocês, do Instagram. As que tinham texto de arte
                por cima entram recortadas — com os originais sem texto, o site fica ainda melhor.
              </p>
            </ParaACasa>
          </div>
        </div>
      </section>

      {/* ── Nori Park ─────────────────────────────────────────
          O diferencial que mais pesa para quem tem filho pequeno, e
          hoje ele só existe no rodapé do PDF e num destaque do
          Instagram. Aqui ganha seção, preço e regra à vista — é o que
          evita a discussão na hora de pagar a pulseira. */}
      <section id="park" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <div data-revelar className="grid overflow-hidden bg-[var(--marca-escura)] text-[#F6EFE2] md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative grid min-h-64 place-items-center overflow-hidden border-b border-white/10 p-10 md:border-b-0 md:border-r">
            {/* Sem foto de propósito: todas as do parquinho mostram
                criança. Os ícones seguram o lugar até a casa mandar uma
                do espaço vazio. */}
            <div aria-hidden className="grid grid-cols-3 gap-6 text-[var(--destaque)]">
              <I.balao className="size-16 -rotate-6" />
              <I.estrela className="size-10 translate-y-6 opacity-60" />
              <I.balao className="size-12 rotate-12 opacity-80" />
              <I.estrela className="size-8 opacity-50" />
              <I.balao className="size-20 -translate-y-2" />
              <I.estrela className="size-10 opacity-70" />
            </div>
          </div>
          <div className="p-7 sm:p-10">
            <p className="font-[family-name:var(--font-marca)] text-sm uppercase tracking-[0.3em] text-[var(--destaque)]">
              Para as crianças
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-marca)] text-4xl font-light uppercase tracking-wide sm:text-5xl">
              Nori Park
            </h2>
            <p className="mt-3 max-w-md text-[#F6EFE2]/75">
              Brinquedos e jogos para as crianças, dentro do restaurante — a mesa janta, a criançada
              brinca.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-px bg-white/10">
              {park.precos.map((p) => (
                <div key={p.quando} className="bg-[var(--marca-escura)] p-4">
                  <p className="font-[family-name:var(--font-marca)] text-3xl text-[var(--destaque)]">{p.valor}</p>
                  <p className="mt-1 text-sm text-[#F6EFE2]/70">{p.quando}</p>
                </div>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-sm text-[#F6EFE2]/80">
              {park.regras.map((r) => (
                <li key={r} className="flex gap-3">
                  <I.estrela className="mt-0.5 size-3.5 shrink-0 text-[var(--destaque)]" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <ParaACasa titulo="Falta uma foto do Nori Park">
            <p>
              O parquinho é o que mais vende o Nori para família, e aparece pouco: vídeos antigos no
              destaque do Instagram e fotos em que sempre há criança. Criança dos outros não entra
              num site — então esta seção está com ícones no lugar da foto. Uma foto do park vazio,
              de dia, resolve.
            </p>
          </ParaACasa>
        </div>
      </section>

      {/* ── Acontece no Nori ──────────────────────────────────
          O rodízio é uma noite por semana: tem seu lugar, mas não na
          abertura. Aqui fica junto com o que também é de ocasião. */}
      <section className="border-y border-[var(--borda)] bg-[var(--areia)]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <Titulo sobre="Acontece no Nori">Durante a semana</Titulo>
          <div className="mt-8 grid gap-px bg-[var(--borda)] md:grid-cols-3">
            <article data-revelar className="bg-[var(--fundo)] p-6">
              <p className="flex items-center gap-2 font-semibold">
                <I.hashi className="size-5 text-[var(--marca)]" /> Rodízio às quintas
              </p>
              <p className="mt-1 text-sm text-[var(--tinta-media)]">{rodizios.horario.replace('Quintas, ', '')}, alternando:</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {(['sushi', 'massas'] as const).map((t) => (
                  <li key={t} className="flex justify-between gap-3 border-b border-dashed border-[var(--borda)] pb-1.5">
                    <span>{rodizios.tipos[t].nome.replace('Rodízio de ', '')}</span>
                    <span className="font-semibold tabular-nums">{real(rodizios.tipos[t].preco)}</span>
                  </li>
                ))}
              </ul>
              {proximo !== undefined && (
                <p className="rest-troca mt-3 text-xs text-[var(--tinta-fraca)]">
                  {proximo
                    ? `Próximo: quinta, ${dataCurta(proximo.data)} — ${rodizios.tipos[proximo.tipo].nome.replace('Rodízio de ', '')}`
                    : 'A agenda do próximo mês sai no Instagram.'}
                </p>
              )}
            </article>
            <article data-revelar style={{ '--i': 1 } as React.CSSProperties} className="bg-[var(--fundo)] p-6">
              <p className="flex items-center gap-2 font-semibold">
                <I.presente className="size-5 text-[var(--marca)]" /> Aniversariante do mês
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--tinta-media)]">{rodizios.aniversariante}</p>
            </article>
            <article data-revelar style={{ '--i': 2 } as React.CSSProperties} className="bg-[var(--fundo)] p-6">
              <p className="flex items-center gap-2 font-semibold">
                <I.musica className="size-5 text-[var(--marca)]" /> Música ao vivo
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--tinta-media)]">
                Em noites anunciadas no Instagram — na última, o couvert foi gratuito.
              </p>
              <a
                href={casa.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--marca)] hover:underline"
              >
                <I.instagram className="size-4" /> {casa.instagramArroba}
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ── Reservas ──────────────────────────────────────── */}
      <section id="reservas" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <Titulo sobre="Reservas">Reserve sua mesa</Titulo>
        <p data-revelar className="mt-3 max-w-2xl text-lg text-[var(--tinta-media)]">
          Diga o dia, a hora e quantas pessoas — e se vêm crianças para o park. A reserva chega
          completa no WhatsApp da casa.
        </p>

        <div data-revelar className="mt-8">
          <Reserva
            casa={casa.curto}
            numeroWhatsApp={casa.whatsapp}
            semana={semana}
            criancas="Crianças no park"
            dica={(p) => {
              const rod = rodizios.agenda.find((r) => r.data === p.data);
              if (p.ocasiao === 'Aniversário' && rod?.tipo === 'massas')
                return 'Aniversariante do mês não paga o Rodízio de Massas e Pizzas trazendo 10 ou mais pagantes.';
              if (rod) {
                const r = rodizios.tipos[rod.tipo];
                return `Nesta quinta tem ${r.nome}, ${real(r.preco)} por pessoa, das 19h30 às 21h30.`;
              }
              if (p.ocasiao === 'Aniversário')
                return 'Aniversariante do mês ganha o Rodízio de Massas e Pizzas trazendo 10 ou mais pagantes — vale escolher uma quinta de massas.';
              return null;
            }}
          />
        </div>
      </section>

      {/* ── Avaliações ────────────────────────────────────── */}
      <section id="avaliacoes" className="scroll-mt-28 border-y border-[var(--borda)] bg-[var(--areia)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Titulo sobre="Avaliações">O que dizem do Nori</Titulo>
          <div className="mt-8">
            <Avaliacoes
              casa={casa.curto}
              notas={avaliacoes.notas}
              trechos={avaliacoes.trechos}
              linkGoogle={casa.linkGoogle}
              numeroWhatsApp={casa.whatsapp}
            />
          </div>

          <div className="mt-10">
            <ParaACasa titulo="As críticas falam de espera — e chegam direto no Google">
              <p>
                A nota de vocês é boa: <b>4,4 com 652 avaliações</b>. Mas entre as mais recentes, as
                negativas falam das mesmas duas coisas — tempo de espera e atendimento no salão
                cheio. Hoje, o cliente que sai chateado só tem um lugar para desabafar, e é público.
              </p>
              <p>
                O quadro acima muda o caminho: quem dá nota alta é levado ao Google; quem dá nota
                baixa fala primeiro com vocês, pelo WhatsApp. O Google continua aberto para quem
                quiser — mas o problema ganha uma chance de ser resolvido antes de virar estrela.
              </p>
            </ParaACasa>
          </div>
        </div>
      </section>

      {/* ── Como chegar ───────────────────────────────────── */}
      <section id="contato" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <Titulo sobre="Como chegar">No Centro de Iguatu</Titulo>
        <div className="mt-8">
          <ComoChegar
            casa={casa.nome}
            endereco={casa.endereco}
            consulta={casa.consultaMapa}
            semana={semana}
            contatos={[
              { icone: 'telefone', rotulo: 'Telefone', valor: casa.telefone, href: 'tel:+558835810834' },
              { icone: 'whatsapp', rotulo: 'WhatsApp', valor: casa.celular, href: whatsapp(casa.whatsapp, 'Olá! Vim pelo site do Nori.') },
              { icone: 'instagram', rotulo: 'Instagram', valor: casa.instagramArroba, href: casa.instagram },
            ]}
          />
        </div>

        {/* A unidade de Quixadá está no rodapé do cardápio de Iguatu.
            No site, ganha um cartão — quem é de lá, ou está de
            passagem, não precisa adivinhar. */}
        <div data-revelar className="mt-10 flex flex-col gap-4 border border-[var(--borda)] p-6 sm:flex-row sm:items-center">
          <span className="grid size-11 shrink-0 place-items-center border border-[var(--borda)] text-[var(--marca)]">
            <I.local className="size-5" />
          </span>
          <div className="flex-1">
            <p className="font-[family-name:var(--font-marca)] text-lg uppercase tracking-wide text-[var(--marca)]">
              Também em Quixadá
            </p>
            <p className="mt-1">{quixada.endereco}</p>
            <p className="text-sm text-[var(--tinta-media)]">
              {quixada.telefone} · WhatsApp {quixada.whatsapp}
            </p>
          </div>
          <a
            href={quixada.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 border border-[var(--borda)] px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--marca)] hover:text-[var(--marca)]"
          >
            <I.instagram className="size-4" />
            {quixada.instagramArroba}
          </a>
        </div>

        <div className="mt-10">
          <ParaACasa titulo="O perfil do Nori no Google não tem dono">
            <p>
              O perfil do Nori no Google Maps mostra o botão <b>&quot;Reivindicar esta
              empresa&quot;</b>: ninguém da casa assumiu o cadastro. Na prática, qualquer pessoa
              pode sugerir mudança de horário, telefone ou endereço, e o Google pode aceitar sem
              ninguém do Nori ficar sabendo.
            </p>
            <p>
              Já tem erro lá: o endereço aparece como <b>Adail Barreto, 66</b>, e o certo, no
              cardápio, no Instagram e na Receita, é <b>16</b>. E o horário: o destaque
              &quot;Funcionamento&quot; de vocês diz <b>todos os dias, das 18h à 0h</b>; o Google
              diz que sexta e sábado vão até 1h. Também não há site cadastrado.
            </p>
            <p>
              Reivindicar o perfil é gratuito. Junto com o site, é o que faz o Nori aparecer certo
              para quem procura &quot;sushi em Iguatu&quot;.
            </p>
          </ParaACasa>
        </div>
      </section>

      <Rodape d={rodape} />
    </div>
  );
}
