import clsx from "clsx";
import { servicos } from "@/content/projetos";
import { Secao, TituloSecao } from "@/components/ui/Secao";
import { Revelar } from "@/components/ui/Revelar";
import { linkWhatsapp } from "@/lib/links";

/** Cada card leva a um WhatsApp com a mensagem já contextualizada. */
const MENSAGENS = [
  "Olá, Gabriel! Queria um sistema sob medida. Posso te contar o que preciso?",
  "Olá, Gabriel! Me interessei pelo Sublime/Kronos e queria entender como funciona adaptar para o meu negócio.",
  "Olá, Gabriel! Estamos com uma vaga e gostaria de conversar sobre seu perfil.",
];

export function Servicos() {
  return (
    <Secao id="servicos" className="border-t border-borda">
      <TituloSecao
        etiqueta="Trabalhar comigo"
        titulo="Três formas de me contratar"
        descricao="Do zero, adaptando o que já existe, ou dentro do seu time. Escolha o caminho e me chame — respondo no mesmo dia."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {servicos.map((s, i) => (
          <Revelar key={s.titulo} atraso={i * 80}>
            <div
              className={clsx(
                "flex h-full flex-col rounded-cartao border p-6 transition-transform duration-300 hover:-translate-y-1",
                s.destaque
                  ? "border-transparent bg-superficie-alta aura"
                  : "border-borda bg-superficie hover:border-borda-forte",
              )}
              style={
                s.destaque ? ({ "--projeto": "var(--color-kronos)" } as React.CSSProperties) : undefined
              }
            >
              {s.destaque && (
                <span className="mb-3 self-start rounded-full bg-kronos/12 px-2.5 py-1 text-[11px] font-medium text-kronos">
                  Mais procurado
                </span>
              )}

              <h3 className="font-display text-xl font-semibold tracking-tight text-texto">
                {s.titulo}
              </h3>
              <p className="mt-2 text-sm font-medium text-texto-suave">{s.resumo}</p>
              <p className="mt-3 text-sm leading-relaxed text-texto-fraco">{s.descricao}</p>

              <ul className="mt-6 space-y-2.5 border-t border-borda pt-5">
                {s.itens.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[13px] text-texto-suave">
                    <svg viewBox="0 0 24 24" fill="none" className="mt-[2px] h-4 w-4 shrink-0">
                      <path
                        d="m5 13 4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-texto-fraco"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={i === 2 ? "#sobre" : linkWhatsapp(MENSAGENS[i])}
                target={i === 2 ? undefined : "_blank"}
                rel={i === 2 ? undefined : "noopener noreferrer"}
                className={clsx(
                  "mt-7 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all",
                  s.destaque
                    ? "bg-texto text-fundo hover:opacity-90"
                    : "border border-borda-forte text-texto hover:bg-superficie-alta",
                )}
              >
                {s.cta}
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                  <path
                    d="M5 12h14m0 0-6-6m6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Revelar>
        ))}
      </div>
    </Secao>
  );
}
