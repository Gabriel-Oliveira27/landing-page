'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Icone } from './Icones';

const TEMAS = [
  { id: 'barro', nome: 'Barro', amostra: '#bf5028' },
  { id: 'mata', nome: 'Mata', amostra: '#2f7d5f' },
  { id: 'indigo', nome: 'Índigo', amostra: '#4f52c9' },
  { id: 'carvao', nome: 'Carvão', amostra: '#1f1f1f' },
] as const;

const MODOS = [
  { id: 'claro', nome: 'Claro', icone: Icone.sol },
  { id: 'escuro', nome: 'Escuro', icone: Icone.lua },
  { id: 'sistema', nome: 'Sistema', icone: Icone.celular },
] as const;

type Tema = (typeof TEMAS)[number]['id'];
type Modo = (typeof MODOS)[number]['id'];

// O <html> é a verdade: o script do <head> aplica o tema salvo antes da
// primeira pintura, e a troca escreve direto nele. O seletor só
// observa — sem uma cópia em estado que possa ficar para trás.
function assina(avisa: () => void) {
  const obs = new MutationObserver(avisa);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-tema', 'data-modo'] });
  return () => obs.disconnect();
}
const temaAtual = () => (document.documentElement.dataset.tema as Tema) ?? 'barro';
const modoAtual = () => (document.documentElement.dataset.modo as Modo) ?? 'sistema';

function guarda(chave: string, valor: string) {
  try {
    localStorage.setItem(chave, valor);
  } catch {
    // Navegação anônima com armazenamento bloqueado: a troca vale
    // para esta visita e não é lembrada. Melhor que quebrar.
  }
}

function aplicaTema(novo: Tema) {
  document.documentElement.dataset.tema = novo;
  guarda('tema', novo);
}

function aplicaModo(novo: Modo) {
  const d = document.documentElement;
  if (novo === 'sistema') delete d.dataset.modo;
  else d.dataset.modo = novo;
  guarda('modo', novo);
}

export default function SeletorTema() {
  const [aberto, setAberto] = useState(false);
  // No servidor não há <html> para ler: vale o padrão até hidratar.
  const tema = useSyncExternalStore(assina, temaAtual, () => 'barro' as Tema);
  const modo = useSyncExternalStore(assina, modoAtual, () => 'sistema' as Modo);
  const caixa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const fora = (e: MouseEvent) => {
      if (!caixa.current?.contains(e.target as Node)) setAberto(false);
    };
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    document.addEventListener('mousedown', fora);
    window.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', fora);
      window.removeEventListener('keydown', esc);
    };
  }, [aberto]);

  return (
    <div ref={caixa} className="relative">
      <button
        onClick={() => setAberto((a) => !a)}
        aria-label="Aparência"
        aria-expanded={aberto}
        className="grid size-9 shrink-0 place-items-center rounded-lg text-tinta-media transition-colors hover:bg-areia hover:text-tinta"
      >
        <Icone.paleta className="size-[18px]" />
      </button>

      {aberto && (
        <div className="absolute right-0 top-11 z-50 w-56 animate-[subir_0.2s_ease-out] rounded-xl border border-borda bg-papel p-3 shadow-xl">
          <p className="px-1 text-[11px] font-semibold uppercase tracking-wider text-tinta-fraca">
            Cor
          </p>
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {TEMAS.map((t) => (
              <button
                key={t.id}
                onClick={() => aplicaTema(t.id)}
                title={t.nome}
                aria-label={t.nome}
                aria-pressed={tema === t.id}
                className={`grid h-11 place-items-center rounded-lg border-2 transition-colors ${
                  tema === t.id ? 'border-acento' : 'border-transparent hover:border-borda'
                }`}
              >
                <span
                  className="size-5 rounded-full ring-1 ring-inset ring-black/10"
                  style={{ background: t.amostra }}
                />
              </button>
            ))}
          </div>

          <p className="mt-3 px-1 text-[11px] font-semibold uppercase tracking-wider text-tinta-fraca">
            Claridade
          </p>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {MODOS.map((m) => {
              const Ico = m.icone;
              return (
                <button
                  key={m.id}
                  onClick={() => aplicaModo(m.id)}
                  aria-pressed={modo === m.id}
                  className={`flex flex-col items-center gap-1 rounded-lg border py-2 text-[11px] transition-colors ${
                    modo === m.id
                      ? 'border-acento bg-acento-fraco text-acento'
                      : 'border-borda text-tinta-media hover:border-borda-forte'
                  }`}
                >
                  <Ico className="size-4" />
                  {m.nome}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
