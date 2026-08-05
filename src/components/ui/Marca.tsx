import { perfil } from "@/content/perfil";

/** Monograma + nome, usados no header e no rodapé. */
export function Marca({ compacto = false }: { compacto?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="grid h-8 w-8 place-items-center rounded-lg font-display text-[13px] font-bold text-white"
        style={{
          background: "linear-gradient(135deg, var(--color-sublime), var(--color-kronos))",
        }}
      >
        {perfil.iniciais}
      </span>
      {!compacto && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-texto">
          {perfil.nome}
        </span>
      )}
    </span>
  );
}
