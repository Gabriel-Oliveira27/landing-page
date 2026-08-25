import { principios } from "@/content/projetos";
import { Secao, TituloSecao } from "@/components/ui/Secao";
import { Revelar } from "@/components/ui/Revelar";

export function Processo() {
  return (
    <Secao id="processo" className="border-t border-borda bg-superficie/40">
      <TituloSecao
        titulo="Como eu construo"
        descricao="São escolhas que eu repito em tudo que construo, e o motivo de os sistemas continuarem funcionando depois de entregues."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-cartao border border-borda bg-borda sm:grid-cols-2 lg:grid-cols-3">
        {principios.map((p, i) => (
          <Revelar key={p.titulo} atraso={i * 60}>
            <div className="h-full bg-fundo p-6 transition-colors hover:bg-superficie">
              <div className="font-display text-sm font-semibold text-texto-fraco">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-texto">
                {p.titulo}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-texto-suave">{p.descricao}</p>
            </div>
          </Revelar>
        ))}
      </div>
    </Secao>
  );
}
