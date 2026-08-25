/**
 * Mockups desenhados em CSS — nenhuma imagem externa.
 * Servem de placeholder fiel enquanto os prints reais não entram: cada peça
 * de projeto escolhe um tipo (`dashboard`, `loja`, `escala`, `celular`) e a
 * cor do produto pinta os detalhes através da variável --projeto.
 */

import clsx from "clsx";
import type { RotulosMockup, TipoMockup } from "@/content/projetos";

/* ── Peças compartilhadas ─────────────────────────────────────────────── */

function BarraJanela({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-borda bg-superficie px-3 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-borda-forte" />
        <span className="h-2 w-2 rounded-full bg-borda-forte" />
        <span className="h-2 w-2 rounded-full bg-borda-forte" />
      </div>
      <div className="ml-2 flex-1 truncate rounded-md bg-fundo px-2.5 py-1 text-[10px] text-texto-fraco">
        {url}
      </div>
    </div>
  );
}

function Janela({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-borda bg-superficie-alta shadow-2xl shadow-black/20">
      <BarraJanela url={url} />
      {children}
    </div>
  );
}

/** Linha de texto falsa. */
function Linha({ w = "w-full", alto = "h-2" }: { w?: string; alto?: string }) {
  return <div className={clsx("rounded-full bg-borda", w, alto)} />;
}

/* ── Dashboard: sidebar + indicadores + gráfico + tabela ──────────────── */

const ALTURAS = [38, 62, 45, 78, 55, 92, 70, 48, 84, 60, 96, 72];

function MockupDashboard({ rotulos }: { rotulos?: RotulosMockup }) {
  const indicadores = rotulos?.indicadores ?? ["R$ 12.4k", "38", "6"];
  const estados = rotulos?.estados ?? ["Entregue", "Em preparo", "Confirmado"];

  return (
    <Janela url={rotulos?.janela ?? "dashboard · painel de gestão"}>
      <div className="flex h-[19rem] text-[10px]">
        {/* Sidebar */}
        <div className="hidden w-32 shrink-0 flex-col gap-1 border-r border-borda bg-superficie p-2.5 sm:flex">
          <div className="mb-2 flex items-center gap-1.5">
            <span
              className="grid h-5 w-5 place-items-center rounded-md text-[9px] font-bold text-white"
              style={{ background: "var(--projeto)" }}
            >
              ●
            </span>
            <Linha w="w-12" alto="h-1.5" />
          </div>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={clsx(
                "flex items-center gap-1.5 rounded-md px-1.5 py-1.5",
                i === 1 && "bg-fundo",
              )}
              style={i === 1 ? { boxShadow: "inset 2px 0 0 var(--projeto)" } : undefined}
            >
              <span
                className="h-2 w-2 rounded-[3px]"
                style={{ background: i === 1 ? "var(--projeto)" : "var(--color-borda-forte)" }}
              />
              <Linha w={i % 2 ? "w-10" : "w-14"} alto="h-1.5" />
            </div>
          ))}
        </div>

        {/* Conteúdo */}
        <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3">
          <div className="flex items-center justify-between">
            <Linha w="w-24" alto="h-2.5" />
            <span
              className="rounded-full px-2 py-1 text-[9px] font-medium text-white"
              style={{ background: "var(--projeto)" }}
            >
              {rotulos?.selo ?? "Novo"}
            </span>
          </div>

          {/* Indicadores */}
          <div className="grid grid-cols-3 gap-2">
            {indicadores.map((valor, i) => (
              <div key={i} className="rounded-lg border border-borda bg-superficie p-2">
                <Linha w="w-8" alto="h-1.5" />
                <div className="mt-1.5 font-display text-xs font-semibold text-texto">{valor}</div>
              </div>
            ))}
          </div>

          {/* Gráfico */}
          <div className="flex-1 rounded-lg border border-borda bg-superficie p-2.5">
            <div className="flex h-full items-end gap-[3px]">
              {ALTURAS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      i > 8
                        ? "var(--projeto)"
                        : "color-mix(in oklab, var(--projeto) 32%, transparent)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Tabela */}
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md border border-borda bg-superficie px-2 py-1.5"
              >
                <span className="h-4 w-4 rounded-full bg-borda" />
                <Linha w="w-16" alto="h-1.5" />
                <div className="flex-1" />
                <span
                  className="rounded-full px-1.5 py-0.5 text-[8px] font-medium"
                  style={{
                    color: "var(--projeto)",
                    background: "color-mix(in oklab, var(--projeto) 14%, transparent)",
                  }}
                >
                  {estados[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Janela>
  );
}

/* ── Loja: vitrine + carrinho ─────────────────────────────────────────── */

function MockupLoja({ rotulos }: { rotulos?: RotulosMockup }) {
  return (
    <Janela url={rotulos?.janela ?? "loja · catálogo e checkout"}>
      <div className="h-[19rem] bg-fundo">
        {/* Header da loja */}
        <div className="flex items-center gap-2 border-b border-borda bg-superficie px-3 py-2">
          <span
            className="font-display text-[11px] font-bold"
            style={{ color: "var(--projeto)" }}
          >
            {rotulos?.marca ?? "Sublime"}
          </span>
          <div className="ml-2 hidden flex-1 rounded-full border border-borda px-2 py-1 text-[9px] text-texto-fraco sm:block">
            Buscar produto…
          </div>
          <span className="relative grid h-5 w-5 place-items-center rounded-full border border-borda">
            <span className="text-[9px] text-texto-suave">🛒</span>
            <span
              className="absolute -right-1 -top-1 grid h-3 w-3 place-items-center rounded-full text-[7px] font-bold text-white"
              style={{ background: "var(--projeto)" }}
            >
              3
            </span>
          </span>
        </div>

        <div className="flex gap-2 p-2.5">
          <div className="min-w-0 flex-1">
            {/* Banner */}
            <div
              className="mb-2 h-12 rounded-lg"
              style={{
                background:
                  "linear-gradient(110deg, var(--projeto), color-mix(in oklab, var(--projeto-2, var(--projeto)) 80%, white))",
              }}
            />
            {/* Grade de produtos */}
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="rounded-lg border border-borda bg-superficie p-1.5">
                  <div
                    className="mb-1.5 aspect-square rounded-md"
                    style={{
                      background: `color-mix(in oklab, var(--projeto) ${8 + i * 4}%, var(--color-superficie-alta))`,
                    }}
                  />
                  <Linha w="w-full" alto="h-1.5" />
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[9px] font-semibold text-texto">R$ 8{i}</span>
                    <span
                      className="rounded-full px-1 py-0.5 text-[7px] text-white"
                      style={{ background: "var(--projeto)" }}
                    >
                      +
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carrinho lateral */}
          <div className="hidden w-28 shrink-0 rounded-lg border border-borda bg-superficie p-2 sm:block">
            <Linha w="w-14" alto="h-1.5" />
            <div className="mt-2 space-y-1.5">
              {[0, 1].map((i) => (
                <div key={i} className="flex gap-1.5">
                  <span className="h-6 w-6 shrink-0 rounded bg-borda" />
                  <div className="min-w-0 flex-1 space-y-1 pt-0.5">
                    <Linha w="w-full" alto="h-1" />
                    <Linha w="w-8" alto="h-1" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 border-t border-borda pt-1.5 text-[9px] font-semibold text-texto">
              R$ 240,00
            </div>
            <div
              className="mt-1.5 rounded-full py-1 text-center text-[8px] font-medium text-white"
              style={{ background: "var(--projeto)" }}
            >
              Finalizar
            </div>
          </div>
        </div>
      </div>
    </Janela>
  );
}

/* ── Escala: calendário mensal ────────────────────────────────────────── */

const DIAS = ["S", "T", "Q", "Q", "S", "S", "D"];
// 0 = normal, 1 = plantão, 2 = home office, 3 = folga, 4 = vazio
const MES = [
  [4, 0, 0, 0, 1, 1, 4],
  [0, 0, 2, 0, 0, 3, 4],
  [0, 1, 0, 0, 0, 0, 4],
  [2, 0, 0, 1, 0, 3, 4],
  [0, 0, 0, 0, 4, 4, 4],
];

function MockupEscala({ rotulos }: { rotulos?: RotulosMockup }) {
  const cores = [
    "color-mix(in oklab, var(--projeto) 16%, transparent)",
    "var(--projeto)",
    "color-mix(in oklab, var(--projeto-2, var(--projeto)) 55%, transparent)",
    "color-mix(in oklab, var(--color-borda-forte) 70%, transparent)",
    "transparent",
  ];

  return (
    <Janela url={rotulos?.janela ?? "kronos · escala do mês"}>
      <div className="h-[19rem] bg-fundo p-3">
        <div className="mb-2.5 flex items-center justify-between">
          <div>
            <div className="font-display text-[11px] font-semibold text-texto">Julho 2026</div>
            <div className="text-[9px] text-texto-fraco">Equipe de suporte · 12 pessoas</div>
          </div>
          <div className="flex gap-1">
            {["xlsx", "pdf", "png"].map((f) => (
              <span
                key={f}
                className="rounded border border-borda px-1.5 py-0.5 text-[8px] text-texto-suave"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-borda bg-superficie p-2">
          <div className="mb-1.5 grid grid-cols-7 gap-1">
            {DIAS.map((d, i) => (
              <div key={i} className="text-center text-[8px] font-medium text-texto-fraco">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {MES.flat().map((tipo, i) => (
              <div
                key={i}
                className={clsx(
                  "flex h-7 items-start justify-end rounded p-1 text-[7px]",
                  tipo === 4 ? "border border-dashed border-borda" : "text-texto",
                )}
                style={tipo !== 4 ? { background: cores[tipo] } : undefined}
              >
                <span className={tipo === 1 ? "text-white" : "text-texto-suave"}>{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legenda */}
        <div className="mt-2.5 flex flex-wrap gap-2">
          {["Normal", "Plantão", "Home office", "Folga"].map((rot, i) => (
            <div key={rot} className="flex items-center gap-1 text-[8px] text-texto-suave">
              <span className="h-2 w-2 rounded-sm" style={{ background: cores[i] }} />
              {rot}
            </div>
          ))}
        </div>

        {/* Saldo */}
        <div className="mt-2.5 flex items-center justify-between rounded-lg border border-borda bg-superficie px-2.5 py-2">
          <div className="text-[9px] text-texto-fraco">Saldo da semana</div>
          <div
            className="font-display text-[11px] font-semibold"
            style={{ color: "var(--projeto-2, var(--projeto))" }}
          >
            +2h 40min
          </div>
        </div>
      </div>
    </Janela>
  );
}

/* ── Celular: app Android ─────────────────────────────────────────────── */

function MockupCelular({ variante }: { variante: "pedidos" | "ponto" }) {
  return (
    <div className="mx-auto w-[13.5rem]">
      <div className="rounded-[1.75rem] border border-borda-forte bg-superficie p-2 shadow-2xl shadow-black/30">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-borda bg-fundo">
          {/* Notch */}
          <div className="absolute left-1/2 top-1.5 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-superficie" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-3 pb-1 pt-2 text-[8px] text-texto-fraco">
            <span>09:41</span>
            <span>▮▮▮ ⌁</span>
          </div>

          {/* Header do app */}
          <div
            className="px-3 py-2.5 text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--projeto), color-mix(in oklab, var(--projeto-2, var(--projeto)) 70%, var(--projeto)))",
            }}
          >
            <div className="text-[8px] opacity-80">
              {variante === "pedidos" ? "Pedidos de hoje" : "Ponto de hoje"}
            </div>
            <div className="font-display text-sm font-semibold">
              {variante === "pedidos" ? "8 novos" : "6h 12min"}
            </div>
          </div>

          <div className="h-[15.5rem] space-y-1.5 overflow-hidden p-2.5">
            {variante === "pedidos" ? (
              <>
                {/* Notificação push */}
                <div
                  className="mb-2 rounded-lg border px-2 py-1.5"
                  style={{
                    borderColor: "color-mix(in oklab, var(--projeto) 35%, transparent)",
                    background: "color-mix(in oklab, var(--projeto) 10%, transparent)",
                  }}
                >
                  <div className="text-[8px] font-semibold" style={{ color: "var(--projeto)" }}>
                    Novo Pedido
                  </div>
                  <div className="text-[7px] text-texto-suave">
                    Verifique o App para mais informações
                  </div>
                </div>
                {[
                  ["VD-10428", "Entrega", "R$ 189,90"],
                  ["VD-10427", "Retirada", "R$ 74,50"],
                  ["VD-10426", "Entrega", "R$ 312,00"],
                  ["VD-10425", "Entrega", "R$ 96,00"],
                ].map(([id, tag, valor]) => (
                  <div
                    key={id}
                    className="flex items-center justify-between rounded-lg border border-borda bg-superficie px-2 py-1.5"
                  >
                    <div>
                      <div className="text-[8px] font-medium text-texto">{id}</div>
                      <div className="text-[7px] text-texto-fraco">{tag}</div>
                    </div>
                    <div className="text-[8px] font-semibold text-texto">{valor}</div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {[
                  ["Entrada", "08:02", true],
                  ["Saída almoço", "12:00", true],
                  ["Volta almoço", "13:04", true],
                  ["Saída", "—", false],
                ].map(([rot, hora, feito]) => (
                  <div
                    key={rot as string}
                    className="flex items-center gap-2 rounded-lg border border-borda bg-superficie px-2 py-1.5"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: feito
                          ? "var(--projeto-2, var(--projeto))"
                          : "var(--color-borda-forte)",
                      }}
                    />
                    <div className="flex-1 text-[8px] text-texto-suave">{rot as string}</div>
                    <div className="font-display text-[9px] font-semibold text-texto">
                      {hora as string}
                    </div>
                  </div>
                ))}
                <div className="!mt-3 rounded-lg border border-borda bg-superficie p-2">
                  <div className="mb-1.5 text-[7px] text-texto-fraco">Semana x meta</div>
                  <div className="flex h-10 items-end gap-1">
                    {[60, 85, 70, 95, 55].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background:
                            h > 80
                              ? "var(--projeto-2, var(--projeto))"
                              : "color-mix(in oklab, var(--projeto) 40%, transparent)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Tab bar */}
          <div className="flex items-center justify-around border-t border-borda bg-superficie py-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="h-2.5 w-2.5 rounded-[3px]"
                style={{
                  background: i === 2 ? "var(--projeto)" : "var(--color-borda-forte)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Seletor ──────────────────────────────────────────────────────────── */

export function Mockup({
  tipo,
  projeto,
  rotulos,
}: {
  tipo: TipoMockup;
  projeto: string;
  rotulos?: RotulosMockup;
}) {
  if (tipo === "dashboard") return <MockupDashboard rotulos={rotulos} />;
  if (tipo === "loja") return <MockupLoja rotulos={rotulos} />;
  if (tipo === "escala") return <MockupEscala rotulos={rotulos} />;
  return <MockupCelular variante={projeto === "kronos" ? "ponto" : "pedidos"} />;
}
