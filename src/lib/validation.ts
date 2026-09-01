import { z } from "zod";
import { modalidadInteres } from "@/lib/modalidad-interes";

export const contactoSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "Contanos tu nombre completo.")
    .max(80, "Nombre demasiado largo."),
  telefono: z
    .string()
    .trim()
    .min(6, "Ingresá un teléfono de contacto válido.")
    .max(25, "Teléfono demasiado largo."),
  email: z.string().trim().email("Ingresá un email válido."),
  localidad: z
    .string()
    .trim()
    .min(2, "Contanos en qué localidad está el terreno o la vivienda.")
    .max(80, "Localidad demasiado larga."),
  modalidad: z.enum(modalidadInteres, {
    message: "Elegí una modalidad de interés.",
  }),
  mensaje: z
    .string()
    .trim()
    .min(10, "Contanos un poco más sobre tu proyecto.")
    .max(2000, "Mensaje demasiado largo."),
  // Honeypot: los usuarios nunca completan este campo, los bots sí.
  empresa: z.string().max(0).optional().or(z.literal("")),
});

export type ContactoInput = z.infer<typeof contactoSchema>;

export type ContactoFieldErrors = Partial<
  Record<keyof Omit<ContactoInput, "empresa">, string>
>;
