"use client";

import { track } from "@vercel/analytics";
import type { WhatsappOrigen } from "@/types/content";

export function trackWhatsappClick(origen: WhatsappOrigen) {
  track("whatsapp_click", { origen });
}

export function trackFormSubmit(status: "success" | "error") {
  track("contact_form_submit", { status });
}

export function trackObrasScroll() {
  track("obras_scroll_view");
}

export function trackFaqOpen(id: string) {
  track("faq_open", { id });
}
