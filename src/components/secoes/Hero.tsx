import { perfil, numeros } from "@/content/perfil";
import { Botao } from "@/components/ui/Botao";
import { Mockup } from "@/components/mockups/Telas";
import { linkWhatsapp } from "@/lib/links";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Fundo: malha de cor + grade */}
      <div className="pointer-events-none absolute inset-0 -z-10 malha-hero" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 grade opacity-50" aria-hidden />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ── Texto ── */}
          <div className="animate-sobe">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-borda bg-superficie/70 px-3.5 py-1.5 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulso-ponto rounded-full bg-kronos-2" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-kronos-2" />
              </span>
              <span className="text-xs font-medium text-texto-suave">{perfil.disponibilidade}</span>
            </div>

            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-texto sm:text-6xl">
              Sistemas completos,
              <br />
              <span className="texto-gradiente">do banco de dados</span>
              <br />
              ao app na mão do cliente.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-texto-suave sm:text-lg">
              {perfil.resumo}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Botao href="#projetos" tamanho="lg">
                Ver os projetos
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M12 5v14m0 0-6-6m6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Botao>
              <Botao href={linkWhatsapp()} variante="secundario" tamanho="lg">
                Falar no WhatsApp
              </Botao>
            </div>

            {/* Números */}
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {numeros.map((n) => (
                <div key={n.rotulo}>
                  <dt className="sr-only">{n.rotulo}</dt>
                  <dd>
                    <div className="font-display text-2xl font-semibold tracking-tight text-texto">
                      {n.valor}
                    </div>
                    <div className="mt-1 text-[13px] leading-snug text-texto-suave">{n.rotulo}</div>
                    <div className="mt-0.5 text-[11px] leading-snug text-texto-fraco">
                      {n.detalhe}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ── Colagem de telas ── */}
          <div
            className="relative hidden lg:block"
            style={
              {
                "--projeto": "var(--color-kronos)",
                "--projeto-2": "var(--color-kronos-2)",
              } as React.CSSProperties
            }
          >
            <div className="animate-sobe [animation-delay:120ms]">
              <Mockup tipo="dashboard" projeto="kronos" />
            </div>

            {/* Celular sobreposto, com a cor do outro produto */}
            <div
              className="absolute -bottom-14 -left-10 w-40 animate-sobe [animation-delay:260ms]"
              style={
                {
                  "--projeto": "var(--color-sublime)",
                  "--projeto-2": "var(--color-sublime-2)",
                } as React.CSSProperties
              }
            >
              <div className="origin-bottom-left scale-[0.78]">
                <Mockup tipo="celular" projeto="sublime" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
