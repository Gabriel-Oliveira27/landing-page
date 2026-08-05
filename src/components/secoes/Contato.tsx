import { perfil } from "@/content/perfil";
import { Secao } from "@/components/ui/Secao";
import { Botao } from "@/components/ui/Botao";
import { Revelar } from "@/components/ui/Revelar";
import { linkEmail, linkWhatsapp } from "@/lib/links";

const canais = [
  {
    rotulo: "WhatsApp",
    valor: perfil.contato.whatsappExibicao,
    href: linkWhatsapp(),
    icone: "M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1a12 12 0 0 1-5.9-5.2c-.4-.7-.7-1.5-.7-2.3 0-.8.4-1.5.8-1.8.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.8 1.8c0 .2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6.5.9 1.4 1.9 2.4 2.4.3.2.5.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.2.1.4.2.4.3 0 .2 0 .8-.2 1.1Z",
  },
  {
    rotulo: "E-mail",
    valor: perfil.contato.email,
    href: linkEmail(),
    icone: "M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.2-.5 6.8 5.2L18.8 6H5.2Z",
  },
  {
    rotulo: "GitHub",
    valor: perfil.contato.github.replace("https://github.com/", "@"),
    href: perfil.contato.github,
    icone: "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z",
  },
  ...(perfil.contato.linkedin
    ? [
        {
          rotulo: "LinkedIn",
          valor: "Perfil profissional",
          href: perfil.contato.linkedin,
          icone: "M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-3-1.82-3-1.83 0-2.1 1.42-2.1 2.9V21h-4V9Z",
        },
      ]
    : []),
];

export function Contato() {
  return (
    <Secao id="contato" className="relative overflow-hidden border-t border-borda">
      <div className="pointer-events-none absolute inset-0 -z-10 malha-hero opacity-70" aria-hidden />

      <Revelar>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-borda bg-superficie/70 px-3.5 py-1.5 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulso-ponto rounded-full bg-kronos-2" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-kronos-2" />
            </span>
            <span className="text-xs font-medium text-texto-suave">{perfil.disponibilidade}</span>
          </div>

          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-texto sm:text-5xl">
            Me conte o que precisa ser resolvido.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-texto-suave sm:text-lg">
            Uma conversa de 15 minutos costuma bastar para eu dizer se dá para fazer, quanto tempo
            leva e por onde começar. Sem compromisso.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Botao href={linkWhatsapp()} tamanho="lg">
              Chamar no WhatsApp
            </Botao>
            <Botao href={linkEmail()} variante="secundario" tamanho="lg">
              Mandar um e-mail
            </Botao>
          </div>
        </div>
      </Revelar>

      <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-2">
        {canais.map((c, i) => (
          <Revelar key={c.rotulo} atraso={i * 60}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-center gap-3.5 rounded-cartao border border-borda bg-superficie p-4 transition-colors hover:border-borda-forte hover:bg-superficie-alta"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-borda bg-fundo text-texto-suave">
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                  <path d={c.icone} />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-medium text-texto">{c.rotulo}</span>
                <span className="block truncate text-[13px] text-texto-fraco">{c.valor}</span>
              </span>
            </a>
          </Revelar>
        ))}
      </div>
    </Secao>
  );
}
