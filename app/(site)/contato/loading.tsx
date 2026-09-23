import { Barra } from '@/componentes/Carregando';

export default function Carregando() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Barra className="h-12 w-64" />
      <Barra className="mt-4 h-5 w-full max-w-xl" />
      <Barra className="mt-2 h-5 w-2/3" />

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-borda p-5">
            <Barra className="h-3 w-16" />
            <Barra className="mt-2 h-5 w-40" />
            <Barra className="mt-3 h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
