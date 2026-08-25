import { perfil } from "@/content/perfil";
import { projetos } from "@/content/projetos";
import { Marca } from "@/components/ui/Marca";
import { linkEmail } from "@/lib/links";

export function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-borda bg-superficie/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-xs">
            <Marca />
            <p className="mt-4 text-sm leading-relaxed text-texto-suave">{perfil.chamada}</p>
          </div>

          <div className="flex gap-14">
            <div>
              <h3 className="text-sm font-semibold text-texto">
                Projetos
              </h3>
              <ul className="mt-4 space-y-2.5">
                {projetos.map((p) => (
                  <li key={p.slug}>
                    <a
                      href={`#${p.slug}`}
                      className="text-sm text-texto-suave transition-colors hover:text-texto"
                    >
                      {p.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-texto">
                Contato
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={linkEmail()}
                    className="text-sm text-texto-suave transition-colors hover:text-texto"
                  >
                    E-mail
                  </a>
                </li>
                <li>
                  <a
                    href={perfil.contato.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-texto-suave transition-colors hover:text-texto"
                  >
                    GitHub
                  </a>
                </li>
                {perfil.contato.linkedin && (
                  <li>
                    <a
                      href={perfil.contato.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-texto-suave transition-colors hover:text-texto"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-borda pt-6">
          <p className="text-xs text-texto-fraco">
            © {ano} {perfil.nome}. Feito com Next.js e Tailwind CSS.
          </p>
          <a href="#topo" className="text-xs text-texto-fraco transition-colors hover:text-texto">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
