import { whatsapp } from "@/content/site";

export function buildWhatsappUrl(
  mensajeKey: keyof typeof whatsapp.mensajes
): string {
  const texto = encodeURIComponent(whatsapp.mensajes[mensajeKey]);
  return `https://wa.me/${whatsapp.numero}?text=${texto}`;
}

export function buildWhatsappMessageUrl(message: string): string {
  return `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(message)}`;
}