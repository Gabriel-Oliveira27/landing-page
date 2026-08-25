import { perfil, trajetoria, formacao, stack, contextoAtual } from "@/content/perfil";
import { Secao, TituloSecao } from "@/components/ui/Secao";
import { Revelar } from "@/components/ui/Revelar";
import { Botao } from "@/components/ui/Botao";

export function Sobre() {
  return (
    <Secao id="sobre" className="border-t border-borda bg-superficie/40">
      <TituloSecao
        etiqueta="Currículo"
        titulo={`Sobre ${perfil.nome.split(" ")[0]}`}
        descricao={perfil.chamada}
      />

      {/* Diz a situação real antes de alguém perguntar. */}
      <Revelar>
        <p className="mt-10 max-w-3xl rounded-cartao border border-borda bg-fundo p-5 text-[15px] leading-relaxed text-texto-suave">
          {contextoAtual}
        </p>
      </Revelar>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ── Trajetória + formação ── */}
        <div>
          <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-texto-fraco">
            Trajetória
          </h3>

          <ol className="relative space-y-8 border-l border-borda pl-6">
            {trajetoria.map((t, i) => (
              <Revelar key={t.cargo} atraso={i * 70}>
                <li className="relative">
                  <span
                    className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-fundo"
                    style={{
                      background:
                        i === 0 ? "var(--color-kronos)" : i === 1 ? "var(--color-sublime)" : "var(--color-borda-forte)",
                    }}
                    aria-hidden
                  />
                  <div className="text-xs font-medium uppercase tracking-wide text-texto-fraco">
                    {t.periodo}
                  </div>
                  <div className="mt-1.5 font-display text-[17px] font-semibold text-texto">
                    {t.cargo}
                  </div>
                  <div className="text-sm text-texto-suave">{t.organizacao}</div>
                  <p className="mt-2 text-[14px] leading-relaxed text-texto-fraco">{t.descricao}</p>
                </li>
              </Revelar>
            ))}
          </ol>

          <h3 className="mb-5 mt-12 font-display text-sm font-semibold uppercase tracking-[0.14em] text-texto-fraco">
            Formação
          </h3>
          <div className="space-y-4">
            {formacao.map((f) => (
              <div
                key={f.curso}
                className="rounded-cartao border border-borda bg-fundo p-4"
              >
                <div className="text-xs text-texto-fraco">{f.periodo}</div>
                <div className="mt-1 font-display text-[15px] font-semibold text-texto">
                  {f.curso}
                </div>
                <div className="text-sm text-texto-suave">{f.instituicao}</div>
              </div>
            ))}
          </div>

          {perfil.contato.curriculoPdf && (
            <div className="mt-8">
              <Botao href={perfil.contato.curriculoPdf} variante="secundario" externo>
                Baixar currículo em PDF
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Botao>
            </div>
          )}
        </div>

        {/* ── Stack ── */}
        <div>
          <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-texto-fraco">
            Stack técnico
          </h3>

          <div className="space-y-4">
            {stack.map((bloco, i) => (
              <Revelar key={bloco.area} atraso={i * 60}>
                <div className="rounded-cartao border border-borda bg-fundo p-5">
                  <div className="font-display text-[15px] font-semibold text-texto">
                    {bloco.area}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {bloco.itens.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-borda bg-superficie px-2 py-1 text-[11px] font-medium text-texto-suave"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Revelar>
            ))}
          </div>

          <div className="mt-6 rounded-cartao border border-borda bg-fundo p-5">
            <div className="font-display text-[15px] font-semibold text-texto">
              Onde estou
            </div>
            <p className="mt-2 text-sm leading-relaxed text-texto-suave">
              {perfil.local} — disponível para trabalho remoto, híbrido ou presencial na região.
            </p>
          </div>
        </div>
      </div>
    </Secao>
  );
}
