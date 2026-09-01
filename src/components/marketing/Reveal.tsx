"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Envuelve contenido que debe entrar con fade-up al hacer scroll.
 * El contenido es visible por default (sin JS o con
 * prefers-reduced-motion, nunca se oculta) — ver .reveal en globals.css.
 * 'use client' se justifica acá porque IntersectionObserver es una API
 * que sólo existe en el browser.
 */
export function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delayMs);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div ref={ref} className={className ? `reveal ${className}` : "reveal"}>
      {children}
    </div>
  );
}
