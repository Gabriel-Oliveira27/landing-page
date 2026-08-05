import Link from "next/link";
import clsx from "clsx";

type Variante = "primario" | "secundario" | "fantasma";
type Tamanho = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kronos disabled:opacity-50";

const variantes: Record<Variante, string> = {
  // Primário = alto contraste com o fundo (branco no escuro, preto no claro).
  primario:
    "bg-texto text-fundo hover:opacity-90 active:scale-[0.98] shadow-lg shadow-black/10",
  secundario:
    "border border-borda-forte bg-superficie-alta text-texto hover:border-texto-fraco hover:bg-superficie active:scale-[0.98]",
  fantasma: "text-texto-suave hover:text-texto hover:bg-superficie",
};

const tamanhos: Record<Tamanho, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-[0.95rem]",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: Variante;
  tamanho?: Tamanho;
  className?: string;
  externo?: boolean;
};

export function Botao({
  href,
  children,
  variante = "primario",
  tamanho = "md",
  className,
  externo,
}: Props) {
  const classes = clsx(base, variantes[variante], tamanhos[tamanho], className);
  const ehExterno = externo ?? /^https?:|^mailto:|^tel:/.test(href);

  if (ehExterno) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
