"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

/**
 * Fade-in ao entrar na viewport. Se o navegador não tiver IntersectionObserver
 * (ou o usuário pedir menos movimento), o conteúdo aparece direto.
 */
export function Revelar({
  children,
  atraso = 0,
  className,
}: {
  children: React.ReactNode;
  /** Atraso em ms, para escalonar itens de uma mesma lista. */
  atraso?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visivel={visivel}
      style={{ transitionDelay: `${atraso}ms` }}
      className={clsx("revelar", className)}
    >
      {children}
    </div>
  );
}
