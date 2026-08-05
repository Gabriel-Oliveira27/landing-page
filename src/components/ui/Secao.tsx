import clsx from "clsx";

export function Secao({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function TituloSecao({
  etiqueta,
  titulo,
  descricao,
  alinhamento = "esquerda",
}: {
  etiqueta: string;
  titulo: React.ReactNode;
  descricao?: string;
  alinhamento?: "esquerda" | "centro";
}) {
  const centro = alinhamento === "centro";
  return (
    <div className={clsx("max-w-3xl", centro && "mx-auto text-center")}>
      <div
        className={clsx(
          "flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-texto-fraco",
          centro && "justify-center",
        )}
      >
        <span className="h-px w-6 bg-borda-forte" />
        {etiqueta}
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-texto sm:text-4xl">
        {titulo}
      </h2>
      {descricao && (
        <p className="mt-4 text-base leading-relaxed text-texto-suave sm:text-lg">{descricao}</p>
      )}
    </div>
  );
}
