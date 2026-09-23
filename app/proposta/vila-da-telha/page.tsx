'use client';

import Image from 'next/image';
import Avaliacoes from '../_restaurante/Avaliacoes';
import Cardapio from '../_restaurante/Cardapio';
import ComoChegar, { Agora } from '../_restaurante/ComoChegar';
import { Carrossel, Destaques, Galeria } from '../_restaurante/Galerias';
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
  espaco,
  executivo,
  rodape,
  rodapeCardapio,
  semana,
  tema,
} from './dados';

/**
 * As fotos e a logo são as DELES.
 *
 * A logo veio da capa do Facebook, em alta, preta sobre branco — daí
 * saíram as duas versões, a escura para fundo claro e a creme, vazada,
 * para o bordô. As fotos são todas do Instagram da casa: o salão depois
 * do retrofit, a fachada, os pratos com o nome que a legenda do post
 * dá. Nenhuma mostra cliente.
 */
const FOTOS = {
  logo: '/proposta/vila-da-telha/logo.png',
  logoClaro: '/proposta/vila-da-telha/logo-claro.png',
  mesa: '/proposta/vila-da-telha/mesa.jpg',
  delivery: '/proposta/vila-da-telha/delivery.jpg',
};

const anos = new Date().getFullYear() - casa.desde;
const totalItens = cardapio.reduce((s, c) => s + c.itens.length, 0);

// O tijolinho do fundo, a 7%: lembra a parede do salão sem competir
// com o texto. A junta vertical alterna de fiada em fiada — sem isso,
// vira quadriculado.
const TIJOLO =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='32'%3E%3Cpath d='M0 .5h64M0 16.5h64M.5 0v16M32.5 16v16' stroke='%23fff' fill='none'/%3E%3C/svg%3E\")";

function Titulo({ sobre, children, claro = false }: { sobre: string; children: React.ReactNode; claro?: boolean }) {
  return (
    <div data-revelar>
      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${claro ? 'text-[var(--destaque)]' : 'text-[var(--marca)]'}`}>
        {sobre}
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-marca)] text-4xl leading-tight sm:text-5xl">{children}</h2>
    </div>
  );
}

export default function PropostaVilaDaTelha() {
  useRevelar();

  return (
    <div style={variaveis(tema)} className="bg-[var(--fundo)] text-[var(--tinta)]">
      {/* ── Cabeçalho ───────────────────────────────────────── */}
      <header className="sticky top-9 z-40 border-b border-[var(--borda)] bg-[var(--fundo)]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
          <Image src={FOTOS.logo} alt={casa.nome} width={945} height={381} loading="eager" className="h-10 w-auto shrink-0" />

          <nav className="ml-auto hidden gap-6 text-sm lg:flex">
            {[
              ['#espaco', 'O Vila'],
              ['#cardapio', 'Cardápio'],
              ['#executivo', 'Executivo'],
              ['#reservas', 'Reservas'],
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
          A frase é deles. No post do Dia do Cliente, a casa agradece
          por "nos permitir ser cenário da sua [história]" — e é isso
          que um gastrobar vende: não o prato, a noite. */}
      <section className="relative overflow-hidden bg-[var(--marca-escura)] text-[var(--sobre-marca)]">
        <div aria-hidden className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: TIJOLO }} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.15fr_1fr] lg:py-20">
          <div>
            <div className="rest-entrada flex flex-wrap items-center gap-3" style={{ '--i': 0 } as React.CSSProperties}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--destaque)]">{casa.lema}</p>
              <Agora semana={semana} claro />
            </div>

            <h1
              className="rest-entrada mt-5 font-[family-name:var(--font-marca)] text-4xl leading-[1.08] sm:text-6xl"
              style={{ '--i': 1 } as React.CSSProperties}
            >
              Há {anos} anos sendo o cenário das histórias de Iguatu.
            </h1>
            <p className="rest-entrada mt-6 max-w-xl text-lg leading-relaxed opacity-80" style={{ '--i': 2 } as React.CSSProperties}>
              Pratos para dividir, cortes Angus, bacalhau, risotos e uma carta de cervejas e
              drinks — no almoço e no jantar, na Rua Bandeira.
            </p>

            <div className="rest-entrada mt-8 flex flex-wrap gap-3" style={{ '--i': 3 } as React.CSSProperties}>
              <a
                href="#reservas"
                className="inline-flex items-center gap-2 bg-[var(--sobre-marca)] px-6 py-3.5 font-semibold text-[var(--marca)] transition-transform hover:-translate-y-0.5"
              >
                <I.calendario className="size-4" />
                Reservar mesa
              </a>
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 font-semibold transition-colors hover:border-white/70"
              >
                <I.prato className="size-4" />
                Ver o cardápio
              </a>
            </div>

            <dl
              className="rest-entrada mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-white/15 pt-7 sm:grid-cols-4"
              style={{ '--i': 4 } as React.CSSProperties}
            >
              {[
                ['Em Iguatu', `${anos} anos`],
                ['No Google', '4,5 ★'],
                ['Recomendam', '96%'],
                ['Executivo', real(executivo.preco)],
              ].map(([r, v]) => (
                <div key={r}>
                  <dt className="text-[11px] uppercase tracking-wider opacity-50">{r}</dt>
                  <dd className="mt-1 font-[family-name:var(--font-marca)] text-xl text-[var(--destaque)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Retrato: a foto é vertical, do feed. Em vez de cortar para
              caber numa faixa larga, a abertura se divide e ela entra
              inteira, como uma mesa posta vista de cima. */}
          <figure className="rest-entrada relative mx-auto w-full max-w-md" style={{ '--i': 2 } as React.CSSProperties}>
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <Image
                src={FOTOS.mesa}
                alt="Mesa do Vila com grelhado, salada, arroz e acompanhamentos"
                fill
                preload
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="rest-zoom object-cover"
              />
            </div>
            <Image
              src={FOTOS.logoClaro}
              alt=""
              width={945}
              height={381}
              className="absolute -bottom-6 -left-4 w-40 drop-shadow-xl sm:w-48"
            />
          </figure>
        </div>
      </section>

      {/* ── O que tem no Vila ─────────────────────────────────── */}
      <section className="border-b border-[var(--borda)]">
        <div className="mx-auto max-w-6xl">
          <Destaques
            itens={[
              { icone: I.prato, titulo: 'Executivo no almoço', texto: `Segunda a sexta, ${real(executivo.preco)}.` },
              { icone: I.musica, titulo: 'Música ao vivo', texto: 'Às sextas e sábados, à noite.' },
              { icone: I.garrafa, titulo: 'Rolha Free', texto: 'Na quinta, traga seu vinho sem pagar rolha.' },
              { icone: I.moto, titulo: 'Delivery', texto: 'Pedido pelo WhatsApp ou pelo telefone.' },
              { icone: I.neve, titulo: 'Salão climatizado', texto: 'E mesas ao ar livre.' },
            ]}
          />
        </div>
      </section>

      {/* ── O espaço ─────────────────────────────────────────── */}
      <section id="espaco" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Titulo sobre="O Vila">Um lugar feito para a mesa demorar.</Titulo>
          <p data-revelar className="max-w-sm text-[var(--tinta-media)]">
            O salão acabou de passar por um retrofit. Toque numa foto para ver em tela cheia.
          </p>
        </div>
        <div className="mt-8">
          <Galeria fotos={espaco} />
        </div>
      </section>

      {/* ── Executivo ──────────────────────────────────────────
          O almoço de semana é outra clientela — quem trabalha no
          Centro e tem uma hora. Merece faixa própria e preço grande,
          não um post que some do feed em três dias. */}
      <section id="executivo" className="scroll-mt-28 border-y border-[var(--borda)] bg-[var(--areia)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[auto_1fr] md:items-center">
          <div data-revelar>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--marca)]">
              <I.relogio className="size-4" /> Menu Executivo
            </p>
            <p className="mt-2 font-[family-name:var(--font-marca)] text-6xl text-[var(--marca)]">{real(executivo.preco)}</p>
            <p className="mt-2 text-[var(--tinta-media)]">{executivo.quando}</p>
            <p className="mt-1 text-sm font-medium">{executivo.delivery}</p>
          </div>
          <div data-revelar style={{ '--i': 1 } as React.CSSProperties}>
            <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {executivo.pratos.map((p) => (
                <li key={p} className="flex gap-3 border-b border-dashed border-[var(--borda-forte,var(--borda))] pb-2.5">
                  <I.prato className="mt-0.5 size-4 shrink-0 text-[var(--marca)]" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={whatsapp(casa.whatsapp, 'Olá! Quero pedir o Menu Executivo.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[var(--marca)] px-5 py-3 font-semibold text-[var(--sobre-marca)] transition-opacity hover:opacity-90"
            >
              <I.whatsapp className="size-4" />
              Pedir o executivo
            </a>
          </div>
        </div>
      </section>

      {/* ── Da cozinha ────────────────────────────────────────── */}
      <section className="overflow-hidden py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Titulo sobre="Da cozinha">Alguns dos pedidos da casa.</Titulo>
          <div className="mt-8">
            <Carrossel fotos={cozinha} rotulo="Pratos do Vila" />
          </div>
        </div>
      </section>

      {/* ── Cardápio ───────────────────────────────────────── */}
      <section id="cardapio" className="scroll-mt-28 border-t border-[var(--borda)] bg-[var(--papel)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <Titulo sobre="Cardápio">Tudo o que sai da cozinha e do bar.</Titulo>
            <p data-revelar className="mt-3 text-lg text-[var(--tinta-media)]">
              {totalItens} itens, com preço. Busque pelo nome ou pelo código, e monte o pedido aqui
              mesmo — ele chega pronto no WhatsApp.
            </p>
          </div>

          <div className="mt-8">
            <Cardapio secoes={cardapio} numeroWhatsApp={casa.whatsapp} casa={casa.curto} rodape={rodapeCardapio} />
          </div>

          <div className="mt-12">
            <ParaACasa titulo="O cardápio de vocês pesa 21 MB">
              <p>
                Hoje o cardápio é um PDF de <b>12 páginas e 21 MB</b> no Google Drive, linkado na bio
                do Instagram. No 4G, é um download de minutos — quem está na calçada escolhendo onde
                jantar desiste antes de abrir. E o Google não lê o que está dentro de um PDF desses:
                quem procura &quot;bacalhau em Iguatu&quot; não acha o Vila.
              </p>
              <p>
                Aqui são os mesmos {totalItens} itens, com código e preço, em texto. Mudar um preço é
                trocar um número, sem refazer arquivo nenhum. E o pedido montado aqui chega no
                WhatsApp já com os códigos que a cozinha usa — sem app de delivery no meio e sem
                comissão por pedido.
              </p>
              <p>
                Duas coisas que o levantamento achou: o código <b>3612</b> está impresso para duas
                cervejas diferentes (Brahma Chopp e Spaten long neck), e o PDF marca alergênicos
                prato a prato — no site, isso pode virar um filtro &quot;sem glúten&quot;, &quot;sem
                lactose&quot;.
              </p>
            </ParaACasa>
          </div>
        </div>
      </section>

      {/* ── Delivery ──────────────────────────────────────── */}
      <section id="delivery" className="scroll-mt-28 bg-[var(--marca)] text-[var(--sobre-marca)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div data-revelar className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden ring-1 ring-white/10">
            <Image
              src={FOTOS.delivery}
              alt="Sacola de delivery do Vila da Telha ao lado de um prato servido"
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div data-revelar style={{ '--i': 1 } as React.CSSProperties}>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--destaque)]">
              <I.moto className="size-4" /> Delivery
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-marca)] text-4xl sm:text-5xl">O Vila em casa</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed opacity-80">
              Monte o pedido no cardápio acima e ele chega pronto no WhatsApp — ou chame direto, no
              WhatsApp ou no telefone. O Executivo tem 10% de desconto no delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 bg-[var(--sobre-marca)] px-5 py-3 font-semibold text-[var(--marca)] transition-transform hover:-translate-y-0.5"
              >
                <I.sacola className="size-4" />
                Montar pedido
              </a>
              <a
                href={whatsapp(casa.whatsapp, 'Olá! Quero fazer um pedido de delivery.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 font-semibold transition-colors hover:border-white/70"
              >
                <I.whatsapp className="size-4" />
                Chamar no WhatsApp
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm opacity-70">
              <I.telefone className="size-4" />
              <a href="tel:+558835810163" className="font-semibold underline-offset-2 hover:underline">
                {casa.telefone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Reservas ──────────────────────────────────────── */}
      <section id="reservas" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <Titulo sobre="Reservas">Reserve sua mesa.</Titulo>
        <p data-revelar className="mt-3 max-w-2xl text-lg text-[var(--tinta-media)]">
          Escolha o dia, a hora e quantas pessoas. A reserva chega completa no WhatsApp da casa, e
          a confirmação volta por lá.
        </p>

        <div data-revelar className="mt-8">
          <Reserva
            casa={casa.curto}
            numeroWhatsApp={casa.whatsapp}
            semana={semana}
            dica={(p) => {
              if (p.dia === 6) return 'Sábado tem Feijoada no cardápio — R$ 54,90, para duas pessoas — e música ao vivo à noite.';
              if (p.dia === 5 && p.hora >= '18:00') return 'Sexta à noite tem música ao vivo.';
              if (p.dia === 4) return 'Quinta é dia de Rolha Free: traga o seu vinho sem pagar a taxa de rolha.';
              if (p.dia >= 1 && p.dia <= 5 && p.hora < '15:00')
                return `No almoço de segunda a sexta tem Menu Executivo, a ${real(executivo.preco)}.`;
              return null;
            }}
          />
        </div>

        <div className="mt-8">
          <ParaACasa titulo="Por que a reserva começa pelo WhatsApp">
            <p>
              Porque é onde ela já acontece, e mudar a rotina de quem atende no meio do sábado é o
              jeito mais rápido de uma ferramenta nova ser abandonada. A diferença é a primeira
              mensagem: hoje ela é &quot;boa noite, tem mesa?&quot;, e daqui ela já sai com dia,
              hora, número de pessoas e ocasião.
            </p>
            <p>
              O passo seguinte, se fizer sentido para vocês, é a reserva cair num painel da casa em
              vez do WhatsApp: a lista do dia, confirmar com um toque e um lembrete para o cliente
              na véspera — que é o que corta mesa reservada e vazia.
            </p>
          </ParaACasa>
        </div>
      </section>

      {/* ── Avaliações ────────────────────────────────────── */}
      <section id="avaliacoes" className="scroll-mt-28 border-y border-[var(--borda)] bg-[var(--areia)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Titulo sobre="Avaliações">O que dizem do Vila.</Titulo>
          <div className="mt-8">
            <Avaliacoes
              casa={casa.curto}
              notas={avaliacoes.notas}
              trechos={avaliacoes.trechos}
              linkGoogle={casa.linkGoogle}
              numeroWhatsApp={casa.whatsapp}
            />
          </div>
        </div>
      </section>

      {/* ── Como chegar ───────────────────────────────────── */}
      <section id="contato" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <Titulo sobre="Como chegar">No Centro de Iguatu.</Titulo>
        <div className="mt-8">
          <ComoChegar
            casa={casa.nome}
            endereco={casa.endereco}
            consulta={casa.consultaMapa}
            semana={semana}
            contatos={[
              { icone: 'telefone', rotulo: 'Telefone', valor: casa.telefone, href: 'tel:+558835810163' },
              { icone: 'whatsapp', rotulo: 'WhatsApp', valor: 'reservas e delivery', href: whatsapp(casa.whatsapp, 'Olá!') },
              { icone: 'instagram', rotulo: 'Instagram', valor: casa.instagramArroba, href: casa.instagram },
              { icone: 'facebook', rotulo: 'Facebook', valor: 'Vila da Telha Gastrobar', href: casa.facebook },
            ]}
          />
        </div>

        <div className="mt-10">
          <ParaACasa titulo="Cada canal diz um horário e um endereço">
            <p>
              A bio do Instagram diz <b>11h às 15h e 18h à 0h</b>. O Google diz que o jantar
              <b> fecha às 22h</b>. Nenhum dos dois diz se algum dia é fechado. Esta página usa o
              da bio, por ser o que vocês escreveram — mas quem pergunta ao Google às 22h30 se o
              Vila está aberto ouve que não.
            </p>
            <p>
              O endereço tem três versões: <b>Rua Bandeira, 78</b> no Google, <b>Praça Francisco
              Airton Jucá de Carvalho</b> no Facebook e <b>Rua José Airton Jucá, 78</b> no cadastro
              da Receita. O site vira a fonte única, e os outros canais passam a apontar para ele.
            </p>
            <p>
              Todas as fotos desta página são de vocês, do Instagram — o salão depois do retrofit, a
              fachada, os pratos. Elas existem e são boas, mas estão enterradas no meio de centenas
              de posts; aqui ficam a um toque.
            </p>
          </ParaACasa>
        </div>
      </section>

      <Rodape d={rodape} />
    </div>
  );
}
