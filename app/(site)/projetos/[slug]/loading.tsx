import { Barra } from '@/componentes/Carregando';

export default function Carregando() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <Barra className="h-4 w-24" />

      <Barra className="mt-6 h-1 w-12" />
      <Barra className="mt-5 h-12 w-3/4" />
      <Barra className="mt-4 h-6 w-full max-w-lg" />

      <div className="mt-6 flex gap-1.5">
        {[5, 4, 6, 4.5].map((largura) => (
          <Barra key={largura} className="h-6 rounded-md" style={{ width: `${largura}rem` }} />
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Barra className="h-12 w-52 rounded-xl" />
        <Barra className="h-12 w-36 rounded-xl" />
      </div>

      <div className="mt-10 space-y-2">
        <Barra className="h-5 w-full" />
        <Barra className="h-5 w-full" />
        <Barra className="h-5 w-2/3" />
      </div>

      <Barra className="mt-10 h-8 w-48" />
      <div className="mt-4 space-y-2.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Barra key={i} className="h-5" style={{ width: `${85 - i * 8}%` }} />
        ))}
      </div>
    </div>
  );
}
