import { Barra } from '@/componentes/Carregando';

/**
 * Esqueleto da lista de projetos.
 *
 * Tem a forma da página que está chegando, e não um spinner no meio
 * do nada. A diferença é que o olho já começa a se situar — quando o
 * conteúdo entra, ele cai onde a pessoa já estava olhando, em vez de
 * reorganizar a tela inteira.
 */
export default function Carregando() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Barra className="h-11 w-56" />
      <Barra className="mt-4 h-5 w-full max-w-2xl" />
      <Barra className="mt-2 h-5 w-full max-w-xl" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-borda bg-papel p-5">
            <Barra className="h-1 w-10" />
            <Barra className="mt-4 h-6 w-2/3" />
            <Barra className="mt-2 h-4 w-full" />
            <div className="mt-4 flex gap-1.5">
              <Barra className="h-5 w-16 rounded-md" />
              <Barra className="h-5 w-20 rounded-md" />
              <Barra className="h-5 w-14 rounded-md" />
            </div>
            <Barra className="mt-4 h-4 w-28" />
          </div>
        ))}
      </div>
    </div>
  );
}
