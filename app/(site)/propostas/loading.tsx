import { Barra } from '@/componentes/Carregando';

/** Esqueleto com a forma da lista: cartões à esquerda, simulador à direita. */
export default function Carregando() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Barra className="h-11 w-56" />
      <Barra className="mt-4 h-5 w-full max-w-2xl" />
      <div className="mt-10 grid gap-6 lg:grid-cols-[20rem_1fr]">
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-borda bg-papel">
              <Barra className="h-28 w-full rounded-none" />
              <div className="p-4">
                <Barra className="h-5 w-2/3" />
                <Barra className="mt-2 h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
        <Barra className="hidden h-[min(78vh,760px)] rounded-2xl lg:block" />
      </div>
    </div>
  );
}
