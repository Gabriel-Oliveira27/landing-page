'use client';

import { useState } from 'react';
import { I } from './Icones';
import { whatsapp } from './tipos';

export type Nota = { valor: string; rotulo: string; detalhe: string };
export type Trecho = { texto: string; fonte: string };

/**
 * Avaliação em duas mãos.
 *
 * Quem saiu satisfeito é levado ao Google, que é onde a próxima pessoa
 * vai procurar. Quem saiu chateado fala primeiro com a casa, pelo
 * WhatsApp — e o problema tem chance de ser resolvido antes de virar
 * uma estrela pública.
 *
 * Não é esconder crítica: o Google continua aberto para qualquer um.
 * É dar ao cliente insatisfeito um caminho mais curto até alguém que
 * pode fazer alguma coisa, que hoje não existe.
 */
export default function Avaliacoes({
  casa,
  notas,
  trechos = [],
  linkGoogle,
  numeroWhatsApp,
}: {
  casa: string;
  notas: Nota[];
  trechos?: Trecho[];
  linkGoogle: string;
  numeroWhatsApp: string;
}) {
  const [estrelas, setEstrelas] = useState(0);
  const [sobre, setSobre] = useState(0);
  const [relato, setRelato] = useState('');

  const mostrada = sobre || estrelas;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          {notas.map((n, i) => (
            <div
              key={n.rotulo}
              data-revelar
              style={{ '--i': i } as React.CSSProperties}
              className="border border-[var(--borda)] bg-[var(--papel)] p-5"
            >
              <div className="flex items-center gap-2">
                <p className="font-[family-name:var(--font-marca)] text-4xl text-[var(--marca)]">{n.valor}</p>
                <I.estrela className="size-5 fill-[var(--destaque)] text-[var(--destaque)]" />
              </div>
              <p className="mt-1 font-medium">{n.rotulo}</p>
              <p className="text-sm text-[var(--tinta-fraca)]">{n.detalhe}</p>
            </div>
          ))}
        </div>

        {trechos.map((t, i) => (
          <figure
            key={t.texto}
            data-revelar
            style={{ '--i': i + 1 } as React.CSSProperties}
            className="flex gap-4 border border-[var(--borda)] bg-[var(--papel)] p-5"
          >
            <I.aspas className="size-6 shrink-0 text-[var(--destaque)]" />
            <div>
              <blockquote className="leading-relaxed">{t.texto}</blockquote>
              <figcaption className="mt-2 text-sm text-[var(--tinta-fraca)]">{t.fonte}</figcaption>
            </div>
          </figure>
        ))}
      </div>

      <div className="bg-[var(--marca)] p-6 text-[var(--sobre-marca)] sm:p-7">
        <h3 className="font-[family-name:var(--font-marca)] text-2xl">Como foi a sua visita?</h3>
        <p className="mt-1.5 text-sm opacity-75">Leva cinco segundos.</p>

        <div className="mt-5 flex gap-1" onMouseLeave={() => setSobre(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setEstrelas(n)}
              onMouseEnter={() => setSobre(n)}
              aria-label={`${n} de 5`}
              aria-pressed={estrelas === n}
              className="p-1 transition-transform duration-200 hover:scale-110"
            >
              <svg viewBox="0 0 24 24" className={`size-9 ${estrelas === n ? 'rest-pulo' : ''}`}>
                <path
                  d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1 6.2L12 17l-5.6 3 1-6.2-4.5-4.4 6.3-.9z"
                  fill={n <= mostrada ? 'var(--destaque)' : 'transparent'}
                  stroke="currentColor"
                  strokeOpacity={n <= mostrada ? 0 : 0.5}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  className="transition-[fill] duration-200"
                />
              </svg>
            </button>
          ))}
        </div>

        {estrelas >= 4 && (
          <div key="bom" className="rest-troca mt-5">
            <p className="leading-relaxed">
              Que bom! Conta isso no Google? É por lá que a próxima mesa descobre o {casa}.
            </p>
            <a
              href={linkGoogle}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-[var(--sobre-marca)] px-5 py-3 font-semibold text-[var(--marca)] transition-opacity hover:opacity-90"
            >
              <I.estrela className="size-4" />
              Avaliar no Google
            </a>
          </div>
        )}

        {estrelas > 0 && estrelas <= 3 && (
          <div key="ruim" className="rest-troca mt-5">
            <p className="leading-relaxed">
              Poxa. Conta pra gente o que não saiu como devia — vai direto para o WhatsApp da
              casa, não para um formulário esquecido.
            </p>
            <textarea
              value={relato}
              onChange={(e) => setRelato(e.target.value)}
              rows={3}
              placeholder="Demorou, veio frio, fomos mal atendidos…"
              className="mt-3 w-full border-0 bg-[var(--sobre-marca)]/10 p-3 text-sm text-[var(--sobre-marca)] outline-none placeholder:text-[var(--sobre-marca)]/50 focus:bg-[var(--sobre-marca)]/15"
            />
            <a
              href={whatsapp(
                numeroWhatsApp,
                `Olá! Estive no ${casa} e quero deixar um retorno (nota ${estrelas} de 5).\n\n${relato.trim() || '(escrevo aqui)'}`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-[var(--sobre-marca)] px-5 py-3 font-semibold text-[var(--marca)] transition-opacity hover:opacity-90"
            >
              <I.whatsapp className="size-4" />
              Contar para a casa
            </a>
            <p className="mt-3 text-xs opacity-60">
              Prefere avaliar em público?{' '}
              <a href={linkGoogle} target="_blank" rel="noopener noreferrer" className="underline">
                O Google continua aberto
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
