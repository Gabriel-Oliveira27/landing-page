/**
 * A marca.
 *
 * Três traços que estreitam, como no Prospecta — mesmo autor, mesma
 * família. Aqui a leitura é outra: não é funil de garimpo, é o
 * caminho de uma ideia larga até uma coisa entregue.
 */
export function Marca({ className = 'size-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="3" y="4.2" width="18" height="3.8" rx="1.9" opacity="0.5" />
      <rect x="5.7" y="10.1" width="12.6" height="3.8" rx="1.9" opacity="0.75" />
      <rect x="8.2" y="16" width="7.6" height="3.8" rx="1.9" />
    </svg>
  );
}

export function MarcaCompleta({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-acento text-white">
        <Marca className="size-5" />
      </span>
      {/* O nome some antes da marca em tela estreita, e a legenda some
          antes do nome. Num celular de 340px o cabeçalho tem que caber
          com a navegação; nome quebrado em duas linhas ao lado de um
          quadrado é pior do que só o quadrado. */}
      <span className="hidden leading-tight min-[420px]:block">
        <span className="block whitespace-nowrap font-semibold tracking-tight">
          Gabriel Oliveira
        </span>
        <span className="hidden text-[11px] text-tinta-fraca sm:block">
          Sistemas para o comércio
        </span>
      </span>
    </span>
  );
}
