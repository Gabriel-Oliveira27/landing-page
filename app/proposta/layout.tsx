import Link from 'next/link';
import { linkWhatsApp } from '@/conteudo/perfil';

/**
 * Moldura das PROPOSTAS.
 *
 * Diferente de /demo, e a diferença importa. As demos são genéricas,
 * com nome e preço inventados. Uma proposta usa o conteúdo real de
 * uma empresa real, para mostrar a ela como o site dela poderia ser.
 *
 * Por isso o aviso é outro: não é "conteúdo fictício", é "não é o
 * site oficial". Uma página com o nome, os preços e o endereço certos
 * de um hotel de verdade PRECISA dizer que não é dele — senão é só
 * questão de tempo até alguém achar por engano e tentar reservar.
 *
 * O `robots: noindex` de cada proposta completa a trava: a página
 * existe para ser mandada por link, não para competir no Google com
 * o site que ela pretende substituir.
 */
export default function LayoutProposta({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-zinc-900">
      <div className="sticky top-0 z-50 flex h-9 items-center gap-3 border-b border-sky-300/60 bg-sky-50 px-3 text-[13px] text-sky-900 sm:px-4">
        <Link
          href="/projetos"
          aria-label="Voltar para os projetos"
          className="shrink-0 font-semibold underline-offset-2 hover:underline"
        >
          ← <span className="hidden sm:inline">voltar</span>
        </Link>

        <span className="shrink-0 font-semibold">Proposta de redesenho</span>

        <span className="hidden min-w-0 flex-1 truncate text-sky-800/80 md:block">
          Página de demonstração feita por Gabriel Oliveira. Não é o site oficial.
        </span>

        <a
          href={linkWhatsApp('Olá, Gabriel! Vi a proposta de redesenho e queria conversar.')}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto shrink-0 rounded-md bg-sky-900 px-2.5 py-1 font-medium text-sky-50 transition-opacity hover:opacity-90"
        >
          Falar com o autor
        </a>
      </div>

      {children}
    </div>
  );
}
