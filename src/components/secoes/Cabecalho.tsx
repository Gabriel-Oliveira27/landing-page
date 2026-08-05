"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Marca } from "@/components/ui/Marca";
import { TrocarTema } from "@/components/ui/TrocarTema";
import { linkWhatsapp } from "@/lib/links";

const NAV = [
  { rotulo: "Projetos", href: "#projetos" },
  { rotulo: "Como trabalho", href: "#processo" },
  { rotulo: "Contratar", href: "#servicos" },
  { rotulo: "Sobre", href: "#sobre" },
];

export function Cabecalho() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Trava o scroll do fundo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        rolou
          ? "border-b border-borda bg-fundo/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#topo" aria-label="Início">
          <Marca />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-texto-suave transition-colors hover:bg-superficie hover:text-texto"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <TrocarTema />
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-texto px-4 py-2 text-sm font-medium text-fundo transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Falar comigo
          </a>
          <button
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            className="grid h-9 w-9 place-items-center rounded-full border border-borda text-texto-suave md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
              {menuAberto ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuAberto && (
        <div className="border-t border-borda bg-fundo px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuAberto(false)}
                className="border-b border-borda py-3.5 text-[15px] text-texto-suave"
              >
                {item.rotulo}
              </a>
            ))}
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-full bg-texto py-3 text-center text-sm font-medium text-fundo"
            >
              Falar comigo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
