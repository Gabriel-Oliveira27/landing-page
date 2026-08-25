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
  titulo,
  descricao,
  alinhamento = "esquerda",
}: {
  titulo: React.ReactNode;
  descricao?: string;
  alinhamento?: "esquerda" | "centro";
}) {
  const centro = alinhamento === "centro";
  return (
    <div className={clsx("max-w-3xl", centro && "mx-auto text-center")}>
      <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-texto sm:text-4xl">
        {titulo}
      </h2>
      {descricao && (
        <p className="mt-4 text-base leading-relaxed text-texto-suave sm:text-lg">{descricao}</p>
      )}
    </div>
  );
}
