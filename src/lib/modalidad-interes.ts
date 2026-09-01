/**
 * Aislado en su propio módulo (sin importar "zod") a propósito: el
 * ContactForm client component necesita esta lista para el <select>, y
 * zod pesa ~85 KB gzip — si este archivo importara zod, ContactForm lo
 * arrastraría al bundle del cliente. lib/validation.ts sí puede depender
 * de zod porque solo lo usa el Server Action (gratis en el cliente).
 */
export const modalidadInteres = [
  "Proyecto y dirección",
  "Llave en mano",
  "Construcción por etapas",
  "Todavía no lo sé",
] as const;

export type ModalidadInteres = (typeof modalidadInteres)[number];
