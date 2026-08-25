import clsx from "clsx";
import {
  projetosCompactos,
  projetosDestaque,
  type Projeto,
} from "@/content/projetos";
import { Secao, TituloSecao } from "@/components/ui/Secao";
import { Botao } from "@/components/ui/Botao";
import { Revelar } from "@/components/ui/Revelar";
import { Tela } from "@/components/mockups/Tela";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-borda bg-superficie px-2.5 py-1 text-xs text-texto-suave">
      {children}
    </span>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-[3px] h-4 w-4 shrink-0">
      <path
        d="m5 13 4 4L19 7"
        stroke="var(--projeto)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlocoProjeto({ projeto, indice }: { projeto: Projeto; indice: number }) {
  return (
    <article
      id={projeto.slug}
      className="scroll-mt-24 border-t border-borda pt-16 first:border-t-0 first:pt-0"
      style={
        {
          "--projeto": projeto.cor,
          "--projeto-2": projeto.corSecundaria,
        } as React.CSSProperties
      }
    >
      {/* ── Cabeçalho do projeto ── */}
      <Revelar>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span
                className="grid h-11 w-11 place-items-center rounded-xl font-display text-lg font-bold text-white"
                style={{
                  background: `linear-gradient(135deg, ${projeto.cor}, ${projeto.corSecundaria})`,
                }}
                aria-hidden
              >
                {projeto.nome[0]}
              </span>
              <div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-texto sm:text-4xl">
                  {projeto.nome}
                </h3>
                <p className="text-sm" style={{ color: projeto.cor }}>
                  {projeto.tagline}
                </p>
              </div>
            </div>

            <p className="mt-5 text-base leading-relaxed text-texto-suave">{projeto.descricao}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span
                className="rounded-full px-2.5 py-1 text-xs font-medium"
                style={{
                  color: projeto.cor,
                  background: `color-mix(in oklab, ${projeto.cor} 12%, transparent)`,
                }}
              >
                {projeto.status}
              </span>
              <Chip>{projeto.periodo}</Chip>
              <Chip>{projeto.contexto}</Chip>
            </div>
          </div>

          {/* Números do projeto */}
          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 lg:grid-cols-2">
            {projeto.numeros.map((n) => (
              <div key={n.rotulo}>
                <dt className="sr-only">{n.rotulo}</dt>
                <dd>
                  <div
                    className="font-display text-xl font-semibold"
                    style={{ color: projeto.cor }}
                  >
                    {n.valor}
                  </div>
                  <div className="text-[11px] leading-tight text-texto-fraco">{n.rotulo}</div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Revelar>

      {/* ── Peças do projeto ── */}
      <div className="mt-14 space-y-16">
        {projeto.pecas.map((peca, i) => (
          <Revelar key={peca.nome}>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Tela — alterna o lado a cada peça */}
              <div className={clsx(i % 2 === 1 && "lg:order-2")}>
                <Tela peca={peca} projeto={projeto.slug} />
              </div>

              {/* Texto */}
              <div className={clsx(i % 2 === 1 && "lg:order-1")}>
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-xl font-semibold text-texto">{peca.nome}</span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[11px] font-medium"
                    style={{
                      color: projeto.cor,
                      background: `color-mix(in oklab, ${projeto.cor} 12%, transparent)`,
                    }}
                  >
                    {peca.tipo}
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-relaxed text-texto-suave">{peca.descricao}</p>

                <ul className="mt-5 space-y-2.5">
                  {peca.destaques.map((d) => (
                    <li key={d} className="flex gap-2.5 text-[14px] leading-relaxed text-texto-suave">
                      <Check />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Revelar>
        ))}
      </div>

      {/* ── Sob o capô ── */}
      <Revelar>
        <div className="mt-16">
          <div className="mb-5 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-texto-fraco">
            <span className="h-px w-6 bg-borda-forte" />
            Sob o capô
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {projeto.destaquesTecnicos.map((d) => (
              <div
                key={d.titulo}
                className="rounded-cartao border border-borda bg-superficie p-5 transition-colors hover:border-borda-forte"
              >
                <div
                  className="mb-2.5 h-1 w-8 rounded-full"
                  style={{ background: projeto.cor }}
                  aria-hidden
                />
                <h4 className="font-display text-[15px] font-semibold text-texto">{d.titulo}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-texto-suave">{d.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </Revelar>

      {/* ── Stack + links ── */}
      <Revelar>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-cartao border border-borda bg-superficie p-5">
          <div className="flex flex-wrap gap-1.5">
            {projeto.stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-borda bg-superficie-alta px-2 py-1 text-[11px] font-medium text-texto-suave"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {projeto.links
              .filter((l) => l.url)
              .map((l) => (
                <Botao key={l.rotulo} href={l.url} variante={l.tipo === "primario" ? "primario" : "secundario"}>
                  {l.rotulo}
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                    <path
                      d="M7 17 17 7m0 0H8m9 0v9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Botao>
              ))}
          </div>
        </div>
      </Revelar>

      <span className="sr-only">
        {`Projeto ${indice + 1} de ${projetosDestaque.length}`}
      </span>
    </article>
  );
}

/**
 * Card reduzido, para os projetos que não abrem em profundidade. Mostra o
 * suficiente para dar contexto sem esticar a página por mais três telas.
 */
function CardCompacto({ projeto }: { projeto: Projeto }) {
  const peca = projeto.pecas[0];

  return (
    <article
      id={projeto.slug}
      className="flex scroll-mt-24 flex-col rounded-cartao border border-borda bg-superficie p-6 transition-colors hover:border-borda-forte"
      style={{ "--projeto": projeto.cor } as React.CSSProperties}
    >
      <div className="flex items-center gap-3">
        <span
          className="grid h-9 w-9 place-items-center rounded-lg font-display text-sm font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${projeto.cor}, ${projeto.corSecundaria})`,
          }}
          aria-hidden
        >
          {projeto.nome[0]}
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-texto">{projeto.nome}</h3>
          <p className="text-[13px]" style={{ color: projeto.cor }}>
            {projeto.tagline}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-medium"
          style={{
            color: projeto.cor,
            background: `color-mix(in oklab, ${projeto.cor} 12%, transparent)`,
          }}
        >
          {projeto.status}
        </span>
        <Chip>{projeto.periodo}</Chip>
      </div>

      <p className="mt-4 text-[14px] leading-relaxed text-texto-suave">{projeto.descricao}</p>

      {peca && (
        <ul className="mt-4 space-y-2">
          {peca.destaques.slice(0, 3).map((d) => (
            <li key={d} className="flex gap-2 text-[13px] leading-relaxed text-texto-fraco">
              <Check />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {projeto.stack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-md border border-borda bg-superficie-alta px-2 py-0.5 text-[10px] font-medium text-texto-suave"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-1 flex-wrap items-end gap-2">
        {projeto.links
          .filter((l) => l.url)
          .map((l) => (
            <Botao
              key={l.rotulo}
              href={l.url}
              variante={l.tipo === "primario" ? "primario" : "secundario"}
            >
              {l.rotulo}
            </Botao>
          ))}
      </div>
    </article>
  );
}

export function Projetos() {
  return (
    <Secao id="projetos" className="border-t border-borda">
      <TituloSecao
        etiqueta="Galeria"
        titulo={
          <>
            Seis projetos próprios,
            <br className="hidden sm:block" /> levados até o deploy.
          </>
        }
        descricao="Nenhum destes foi encomendado por um cliente: cada um nasceu de um problema que eu quis resolver e foi construído inteiro — banco de dados, API, painel, site e app. Um deles é usado hoje pelo setor onde trabalho para montar a escala da equipe."
      />

      <div className="mt-16 space-y-20">
        {projetosDestaque.map((projeto, i) => (
          <BlocoProjeto key={projeto.slug} projeto={projeto} indice={i} />
        ))}
      </div>

      {projetosCompactos.length > 0 && (
        <div className="mt-20 border-t border-borda pt-14">
          <div className="mb-8 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-texto-fraco">
            <span className="h-px w-6 bg-borda-forte" />
            Também construí
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projetosCompactos.map((projeto) => (
              <Revelar key={projeto.slug}>
                <CardCompacto projeto={projeto} />
              </Revelar>
            ))}
          </div>
        </div>
      )}
    </Secao>
  );
}
