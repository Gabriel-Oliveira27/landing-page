"use client";

import { useEffect, useState } from "react";

/**
 * Toggle claro/escuro. O tema inicial já foi aplicado pelo script inline do
 * layout — aqui só lemos o que ficou no <html> para o ícone não piscar errado.
 */
export function TrocarTema() {
  const [escuro, setEscuro] = useState(true);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setEscuro(document.documentElement.classList.contains("dark"));
    setMontado(true);
  }, []);

  function alternar() {
    const proximo = !escuro;
    document.documentElement.classList.toggle("dark", proximo);
    document.documentElement.dataset.tema = proximo ? "escuro" : "claro";
    try {
      localStorage.setItem("tema", proximo ? "escuro" : "claro");
    } catch {
      /* modo privado / storage bloqueado — só não persiste */
    }
    setEscuro(proximo);
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={escuro ? "Ativar tema claro" : "Ativar tema escuro"}
      className="grid h-9 w-9 place-items-center rounded-full border border-borda text-texto-suave transition-colors hover:border-borda-forte hover:text-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kronos"
    >
      {/* Antes de montar mostramos a lua (padrão escuro) para evitar troca visível. */}
      {!montado || escuro ? (
        <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
