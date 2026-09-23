'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MarcaCompleta } from './Marca';
import { linkWhatsApp } from '@/conteudo/perfil';

const ABAS = [
  { href: '/', rotulo: 'Início' },
  { href: '/projetos', rotulo: 'Projetos' },
  { href: '/contato', rotulo: 'Contato' },
];

export default function Cabecalho() {
  const caminho = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-borda bg-fundo/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-2 px-4 sm:gap-4 sm:px-5">
        <Link href="/" aria-label="Início" className="shrink-0">
          <MarcaCompleta />
        </Link>

        <nav className="ml-auto flex shrink-0 items-center gap-0.5 sm:gap-1">
          {ABAS.map((aba) => {
            const ativa = aba.href === '/' ? caminho === '/' : caminho.startsWith(aba.href);
            return (
              <Link
                key={aba.href}
                href={aba.href}
                aria-current={ativa ? 'page' : undefined}
                className={`rounded-lg px-2.5 py-1.5 text-sm transition-colors sm:px-3 ${
                  ativa
                    ? 'bg-areia font-medium text-tinta'
                    : 'text-tinta-media hover:bg-areia/60 hover:text-tinta'
                }`}
              >
                {aba.rotulo}
              </Link>
            );
          })}
        </nav>

        <a
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-lg bg-acento px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-acento-forte sm:block"
        >
          Falar comigo
        </a>
      </div>
    </header>
  );
}
