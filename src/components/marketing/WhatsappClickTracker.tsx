"use client";

import { useEffect } from "react";
import { trackWhatsappClick } from "@/lib/analytics";
import type { WhatsappOrigen } from "@/types/content";

/**
 * Registra `whatsapp_click` para los enlaces de componentes de servidor que
 * llevan `data-whatsapp-origen`, sin convertirlos en client components.
 */
export function WhatsappClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLElement>("[data-whatsapp-origen]");
      const origen = link?.dataset.whatsappOrigen;
      if (origen) {
        trackWhatsappClick(origen as WhatsappOrigen);
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
