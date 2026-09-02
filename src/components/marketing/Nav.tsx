"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { trackWhatsappClick } from "@/lib/analytics";
import { BrandMark } from "@/components/ui/BrandMark";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#etapas", label: "Etapas" },
  { href: "#obras", label: "Obras" },
  { href: "#estudio", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" style={{ position: "absolute", top: 0, height: 1 }} />
      <nav className={scrolled ? "site-nav is-scrolled" : "site-nav"}>
        <a href="#inicio" className="nav-logo">
          <span className="nav-logo-mark">
            <BrandMark />
          </span>
          <span className="nav-logo-text">
            {site.nombre}
            <span>Mendoza · Argentina</span>
          </span>
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsappUrl("nav")}
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick("nav")}
        >
          Coordinar una reunión
        </a>

        <button
          ref={burgerRef}
          type="button"
          className="nav-burger"
          aria-expanded={open}
          aria-controls="nav-mobile-panel"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <>
          <button
            type="button"
            className="nav-mobile-backdrop"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />
          <div
            id="nav-mobile-panel"
            ref={panelRef}
            className="nav-mobile-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsappUrl("nav")}
              className="nav-mobile-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsappClick("nav");
                setOpen(false);
              }}
            >
              Coordinar una reunión
            </a>
          </div>
        </>
      )}
    </>
  );
}
