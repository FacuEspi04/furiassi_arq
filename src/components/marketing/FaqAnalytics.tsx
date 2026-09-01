"use client";

import { useEffect } from "react";
import { trackFaqOpen } from "@/lib/analytics";

/**
 * El acordeón de FAQ funciona 100% con <details>/<summary> nativo, sin JS.
 * Este componente solo agrega el evento de analytics como mejora
 * progresiva — si no corre, el acordeón sigue funcionando igual.
 */
export function FaqAnalytics() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLDetailsElement>(
      "[data-faq-item]"
    );

    function onToggle(this: HTMLDetailsElement) {
      if (this.open) {
        trackFaqOpen(this.dataset.faqItem ?? "unknown");
      }
    }

    items.forEach((item) => item.addEventListener("toggle", onToggle));
    return () => {
      items.forEach((item) => item.removeEventListener("toggle", onToggle));
    };
  }, []);

  return null;
}
