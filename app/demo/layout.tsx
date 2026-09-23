import Link from 'next/link';
import { linkWhatsApp } from '@/conteudo/perfil';

/**
 * A moldura das demonstrações.
 *
 * Uma faixa fina no topo e nada mais. A tentação é enquadrar a demo
 * num "navegador falso" com barra de endereço e sombra, mas isso
 * rouba metade da tela do celular — que é onde a pessoa vai olhar —
 * e transforma a coisa em imagem de catálogo. A demo tem que dar a
 * sensação de ser o site dela.
 *
 * O aviso precisa estar visível o tempo todo mesmo assim: conteúdo
 * fictício sem etiqueta vira reclamação de cliente que achou que o
 * preço era real.
 */
export default function LayoutDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-zinc-900">
      {/* Altura travada em h-9 e nada que quebre linha. O cabeçalho de
          cada demo se prende logo abaixo com `top-9`, e se esta faixa
          crescesse para duas linhas em tela estreita os dois se
          sobreporiam. Por isso o texto do meio some antes de apertar,
          em vez de embrulhar. */}
      <div className="sticky top-0 z-50 flex h-9 items-center gap-3 border-b border-amber-300/60 bg-amber-50 px-3 text-[13px] text-amber-900 sm:px-4">
        <Link
          href="/projetos"
          aria-label="Voltar para os projetos"
          className="shrink-0 font-semibold underline-offset-2 hover:underline"
        >
          ← <span className="hidden sm:inline">voltar</span>
        </Link>

        <span className="shrink-0 font-semibold">Demonstração</span>

        <span className="hidden min-w-0 flex-1 truncate text-amber-800/80 md:block">
          Nome, produtos e preços são inventados. O seu teria os seus.
        </span>

        <a
          href={linkWhatsApp('Olá, Gabriel! Vi uma das demonstrações no seu site e queria conversar.')}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto shrink-0 rounded-md bg-amber-900 px-2.5 py-1 font-medium text-amber-50 transition-opacity hover:opacity-90"
        >
          Quero um assim
        </a>
      </div>

      {children}
    </div>
  );
}
