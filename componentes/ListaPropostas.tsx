'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Proposta } from '@/conteudo/propostas';
import { Icone } from './Icones';
import Simulador, { type Tela } from './Simulador';

/**
 * A lista de propostas com o simulador ao lado.
 *
 * No computador, escolher uma proposta mostra a página dentro de uma
 * moldura de monitor ou de celular — é o jeito de ver as duas versões
 * sem redimensionar janela. No celular, a moldura não faz sentido (o
 * aparelho já é o celular), então o cartão leva direto à página.
 */
export default function ListaPropostas({ propostas }: { propostas: Proposta[] }) {
  const [slug, setSlug] = useState(propostas[0].slug);
  const [tela, setTela] = useState<Tela>('computador');
  const atual = propostas.find((p) => p.slug === slug)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[20rem_1fr]">
      <ul className="space-y-3">
        {propostas.map((p) => {
          const ativa = p.slug === slug;
          return (
            <li key={p.slug}>
              <div
                className={`group relative overflow-hidden rounded-2xl border bg-papel transition-colors ${
                  ativa ? 'border-acento' : 'border-borda hover:border-borda-forte'
                }`}
              >
                <button onClick={() => setSlug(p.slug)} className="block w-full text-left">
                  <div className="relative h-28 overflow-hidden">
                    <Image
                      src={p.capa}
                      alt=""
                      fill
                      sizes="20rem"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${p.logo.fundo} 35%, transparent)` }} />
                    <Image
                      src={p.logo.src}
                      alt={p.empresa}
                      width={p.logo.largura}
                      height={p.logo.altura}
                      className="absolute left-4 top-1/2 h-10 w-auto max-w-[9rem] -translate-y-1/2 object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold leading-snug">{p.empresa}</p>
                    <p className="text-xs text-tinta-fraca">
                      {p.ramo} · {p.cidade}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-tinta-media">{p.resumo}</p>
                  </div>
                </button>
                <div className="flex items-center gap-3 border-t border-borda px-4 py-2.5 text-sm">
                  <span className="h-3 w-1 rounded-full" style={{ background: p.cor }} />
                  <Link
                    href={`/proposta/${p.slug}`}
                    className="ml-auto inline-flex items-center gap-1 font-medium text-acento hover:text-acento-forte"
                  >
                    Abrir página <Icone.seta className="size-3.5" />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <section className="hidden min-w-0 lg:block">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex rounded-lg border border-borda bg-papel p-0.5 text-sm">
            {(['computador', 'celular'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTela(t)}
                aria-pressed={tela === t}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-colors ${
                  tela === t ? 'bg-areia font-medium text-tinta' : 'text-tinta-media hover:text-tinta'
                }`}
              >
                {t === 'computador' ? <Icone.monitor className="size-4" /> : <Icone.celular className="size-4" />}
                {t === 'computador' ? 'Computador' : 'Celular'}
              </button>
            ))}
          </div>
          <p className="truncate text-sm text-tinta-fraca">{atual.empresa}</p>
          <Link
            href={`/proposta/${atual.slug}`}
            target="_blank"
            className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-borda px-3 py-1.5 text-sm font-medium transition-colors hover:border-acento hover:text-acento"
          >
            Abrir em tela cheia <Icone.externo className="size-3.5" />
          </Link>
        </div>

        <Simulador key={`${atual.slug}-${tela}`} src={`/proposta/${atual.slug}`} tela={tela} titulo={atual.empresa} />

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {atual.mostra.map((m) => (
            <li key={m} className="rounded-md bg-areia px-2 py-1 text-xs text-tinta-media">
              {m}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
