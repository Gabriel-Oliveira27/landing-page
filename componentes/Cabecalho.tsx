'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MarcaCompleta } from './Marca';
import { PontoDeEspera } from './Carregando';
import SeletorTema from './SeletorTema';
import { Icone } from './Icones';
import { linkWhatsApp } from '@/conteudo/perfil';

// "Início" some no celular: a marca ao lado já leva para lá, e a quarta
// aba não cabe a 325px sem empurrar a página para o lado.
const ABAS = [
  { href: '/', rotulo: 'Início', soLargo: true },
  { href: '/projetos', rotulo: 'Projetos' },
  { href: '/propostas', rotulo: 'Propostas' },
  { href: '/contato', rotulo: 'Contato' },
];

export default function Cabecalho() {
  const caminho = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-borda bg-fundo/90 backdrop-blur">
      {/* Os tamanhos apertam antes de transbordar.
          A 325px, marca e navegação com `shrink-0` nas duas somavam
          367px e a página inteira ganhava rolagem horizontal — o
          conteúdo escorregava para o lado a cada toque. */}
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-1 px-3 sm:gap-4 sm:px-5">
        <Link href="/" aria-label="Início" className="shrink-0">
          <MarcaCompleta />
        </Link>

        <nav className="ml-auto flex min-w-0 items-center gap-0.5 sm:gap-1">
          {ABAS.map((aba) => {
            const ativa = aba.href === '/' ? caminho === '/' : caminho.startsWith(aba.href);
            return (
              <Link
                key={aba.href}
                href={aba.href}
                aria-current={ativa ? 'page' : undefined}
                className={`${aba.soLargo ? 'hidden sm:flex' : 'flex'} items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-1.5 text-[13px] transition-colors sm:px-3 sm:text-sm ${
                  ativa
                    ? 'bg-areia font-medium text-tinta'
                    : 'text-tinta-media hover:bg-areia/60 hover:text-tinta'
                }`}
              >
                {aba.rotulo}
                {/* Acende só quando a navegação realmente espera. Se a
                    rota já foi pré-carregada, nunca aparece — que é o
                    certo: indicador que pisca em transição instantânea
                    faz o site parecer mais lento do que é. */}
                <PontoDeEspera />
              </Link>
            );
          })}
        </nav>

        <SeletorTema />

        <a
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-1.5 rounded-lg bg-acento px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-acento-forte sm:flex"
        >
          <Icone.conversa className="size-4" />
          Falar comigo
        </a>
      </div>
    </header>
  );
}
