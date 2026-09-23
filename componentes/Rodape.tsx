import Link from 'next/link';
import { perfil, linkWhatsApp } from '@/conteudo/perfil';
import { Marca } from './Marca';

export default function Rodape() {
  return (
    <footer className="mt-20 border-t border-borda bg-areia/40">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <span className="flex items-center gap-2 font-semibold tracking-tight">
            <Marca className="size-5 text-acento" />
            {perfil.nome}
          </span>
          <p className="mt-2 text-sm leading-relaxed text-tinta-media">
            {perfil.chamada}
            <br />
            {perfil.local}.
          </p>
        </div>

        <nav className="text-sm">
          <p className="font-medium">Navegar</p>
          <ul className="mt-2 space-y-1.5 text-tinta-media">
            <li>
              <Link href="/projetos" className="hover:text-acento">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/propostas" className="hover:text-acento">
                Propostas
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-acento">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <p className="font-medium">Falar comigo</p>
          <ul className="mt-2 space-y-1.5 text-tinta-media">
            <li>
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="hover:text-acento">
                {perfil.contato.whatsappExibicao}
              </a>
            </li>
            <li>
              <a href={`mailto:${perfil.contato.email}`} className="break-all hover:text-acento">
                {perfil.contato.email}
              </a>
            </li>
            <li>
              <a
                href={perfil.contato.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-acento"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="border-t border-borda px-5 py-4 text-center text-xs text-tinta-fraca">
        Feito em Iguatu, Ceará. Código próprio, sem template.
      </p>
    </footer>
  );
}
