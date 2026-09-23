import { MarcaPulsando } from '@/componentes/Carregando';

/**
 * As demos ganham tela cheia em vez de esqueleto.
 *
 * Cada uma tem um layout diferente — é o ponto delas — então não
 * existe uma forma só para prever. E como a pessoa está prestes a
 * ver um site inteiro de outra empresa, um instante de tela neutra
 * ajuda a separar uma coisa da outra.
 */
export default function Carregando() {
  return (
    <div className="grid min-h-dvh place-items-center bg-white">
      <div className="flex flex-col items-center gap-3">
        <MarcaPulsando className="size-10 text-amber-700" />
        <p className="text-sm text-zinc-500">Abrindo a demonstração…</p>
      </div>
    </div>
  );
}
