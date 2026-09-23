'use client';

import { useEffect, useState } from 'react';
import { DIAS, agoraEmIguatu, estadoAgora, turnoTexto, type Estado } from './horario';
import { I } from './Icones';
import type { Semana } from './tipos';

/**
 * "Aberto agora", calculado no navegador e no fuso de Iguatu.
 *
 * É a pergunta que a pessoa faz ao Google antes de sair de casa, e
 * hoje a resposta que ela recebe depende de qual perfil ela achou —
 * cada canal da casa diz um horário. Aqui existe um só.
 */
export function useEstado(semana: Semana) {
  const [estado, setEstado] = useState<(Estado & { dia: number }) | null>(null);

  useEffect(() => {
    const atualiza = () => setEstado({ ...estadoAgora(semana), dia: agoraEmIguatu().dia });
    atualiza();
    const t = setInterval(atualiza, 60_000);
    return () => clearInterval(t);
  }, [semana]);

  return estado;
}

/**
 * A etiqueta de "aberto agora". Reta, com um filete de cor na borda —
 * pílula arredondada é o sotaque de template que a página quer evitar.
 */
export function Agora({ semana, claro = false }: { semana: Semana; claro?: boolean }) {
  const estado = useEstado(semana);

  // Até o navegador calcular, guarda o espaço sem afirmar nada: o
  // servidor não sabe que horas são para quem está lendo.
  if (!estado) return <span className="inline-block h-7" aria-hidden />;

  return (
    <span
      className={`rest-troca inline-flex items-center gap-2 border-l-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
        estado.aberto ? 'border-emerald-400' : 'border-zinc-400'
      } ${claro ? 'bg-white/8 text-white' : 'bg-[var(--areia)] text-[var(--tinta)]'}`}
    >
      <span className="relative flex size-2">
        {estado.aberto && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        )}
        <span className={`relative inline-flex size-2 rounded-full ${estado.aberto ? 'bg-emerald-400' : 'bg-zinc-400'}`} />
      </span>
      {estado.texto}
    </span>
  );
}

export default function ComoChegar({
  casa,
  endereco,
  consulta,
  semana,
  contatos,
}: {
  casa: string;
  endereco: string[];
  /** O que vai para o Google Maps e o Waze: nome da casa + endereço acha o pino certo. */
  consulta: string;
  semana: Semana;
  contatos: { icone: keyof typeof I; rotulo: string; valor: string; href?: string }[];
}) {
  const estado = useEstado(semana);
  const q = encodeURIComponent(consulta);

  // Segunda primeiro: é como as pessoas leem a semana de um restaurante.
  const ordem = [1, 2, 3, 4, 5, 6, 0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      {/* O mapa embutido do Google, sem chave de API. Carrega só
          quando chega perto da tela — é o elemento mais pesado da
          página e a maioria das visitas nem rola até aqui. */}
      <div data-revelar className="overflow-hidden border border-[var(--borda)] bg-[var(--areia)]">
        <iframe
          title={`Mapa: ${casa}`}
          src={`https://maps.google.com/maps?q=${q}&z=17&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[4/3] h-full min-h-72 w-full lg:aspect-auto"
        />
      </div>

      <div className="space-y-7">
        <div data-revelar>
          <address className="flex gap-3 not-italic leading-relaxed">
            <I.local className="mt-0.5 size-5 shrink-0 text-[var(--marca)]" />
            <span>
              {endereco.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </address>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--marca)] px-4 py-2.5 text-sm font-semibold text-[var(--sobre-marca)] transition-opacity hover:opacity-90"
            >
              <I.rota className="size-4" />
              Traçar rota
            </a>
            <a
              href={`https://waze.com/ul?q=${q}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--borda)] px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--marca)] hover:text-[var(--marca)]"
            >
              Abrir no Waze
            </a>
          </div>
        </div>

        <div data-revelar style={{ '--i': 1 } as React.CSSProperties}>
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--tinta-fraca)]">
            <I.relogio className="size-3.5" /> Horário
          </p>
          <table className="mt-2 w-full text-sm">
            <tbody>
              {ordem.map((d) => {
                const hoje = estado?.dia === d;
                return (
                  <tr
                    key={d}
                    className={`border-b border-[var(--borda)] last:border-0 ${
                      hoje ? 'bg-[var(--marca)] font-semibold text-[var(--sobre-marca)]' : ''
                    }`}
                  >
                    <td className="px-2 py-1.5">
                      {DIAS[d]}
                      {hoje && <span className="ml-2 text-[10px] uppercase tracking-wider opacity-80">hoje</span>}
                    </td>
                    <td className="px-2 py-1.5 text-right tabular-nums">
                      {semana[d].length ? semana[d].map(turnoTexto).join(' · ') : 'fechado'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ul data-revelar style={{ '--i': 2 } as React.CSSProperties} className="space-y-2 text-sm">
          {contatos.map((c) => {
            const Icone = I[c.icone];
            const dentro = (
              <>
                <span className="grid size-8 shrink-0 place-items-center border border-[var(--borda)] text-[var(--marca)]">
                  <Icone className="size-4" />
                </span>
                <span className="w-24 shrink-0 text-[var(--tinta-fraca)]">{c.rotulo}</span>
                <span className="font-medium">{c.valor}</span>
              </>
            );
            return (
              <li key={c.rotulo}>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-[var(--marca)]"
                  >
                    {dentro}
                  </a>
                ) : (
                  <span className="flex items-center gap-3">{dentro}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
