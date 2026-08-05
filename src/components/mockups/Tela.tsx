import Image from "next/image";
import { Mockup } from "./Telas";
import type { Peca } from "@/content/projetos";

/**
 * Mostra o print real da peça quando existe; senão, cai no mockup em CSS.
 * É o ponto único de troca quando os screenshots chegarem: basta preencher
 * `imagem` em src/content/projetos.ts.
 */
export function Tela({ peca, projeto }: { peca: Peca; projeto: string }) {
  if (peca.imagem) {
    const celular = peca.mockup === "celular";
    return (
      <div className={celular ? "mx-auto w-[13.5rem]" : ""}>
        <div
          className={
            celular
              ? "overflow-hidden rounded-[1.75rem] border border-borda-forte bg-superficie p-2 shadow-2xl shadow-black/30"
              : "overflow-hidden rounded-xl border border-borda bg-superficie-alta shadow-2xl shadow-black/20"
          }
        >
          <Image
            src={peca.imagem}
            alt={`${projeto} — ${peca.nome}`}
            width={celular ? 420 : 1280}
            height={celular ? 900 : 800}
            className={celular ? "rounded-[1.35rem]" : ""}
            sizes={celular ? "216px" : "(max-width: 768px) 100vw, 640px"}
          />
        </div>
      </div>
    );
  }

  return <Mockup tipo={peca.mockup} projeto={projeto} />;
}
