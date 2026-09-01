"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { site } from "@/content/site";
import { contactoSchema, type ContactoFieldErrors } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";

export type ContactoState = {
  status: "idle" | "error" | "rate_limited" | "config_error";
  fieldErrors?: ContactoFieldErrors;
  formError?: string;
};

export async function enviarConsulta(
  _prevState: ContactoState,
  formData: FormData
): Promise<ContactoState> {
  const raw = {
    nombre: String(formData.get("nombre") ?? ""),
    telefono: String(formData.get("telefono") ?? ""),
    email: String(formData.get("email") ?? ""),
    localidad: String(formData.get("localidad") ?? ""),
    modalidad: String(formData.get("modalidad") ?? ""),
    mensaje: String(formData.get("mensaje") ?? ""),
    empresa: String(formData.get("empresa") ?? ""),
  };

  // Honeypot: si un bot completó este campo, respondemos como si hubiera
  // funcionado (para no darle señal) pero no enviamos nada.
  if (raw.empresa) {
    redirect("/gracias");
  }

  const parsed = contactoSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactoFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactoFieldErrors;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", fieldErrors };
  }

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "rate_limited",
      formError:
        "Recibimos varias consultas seguidas desde tu conexión. Esperá un minuto e intentá de nuevo, o escribinos directamente por WhatsApp.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "config_error",
      formError:
        "El formulario todavía no tiene configurado el envío de emails (falta RESEND_API_KEY). Mientras tanto, escribinos por WhatsApp.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Furiassi Arquitectos <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: site.email,
    replyTo: parsed.data.email,
    subject: `Nueva consulta web — ${parsed.data.nombre} (${parsed.data.modalidad})`,
    text: [
      `Nombre: ${parsed.data.nombre}`,
      `Teléfono: ${parsed.data.telefono}`,
      `Email: ${parsed.data.email}`,
      `Localidad del terreno/vivienda: ${parsed.data.localidad}`,
      `Modalidad de interés: ${parsed.data.modalidad}`,
      "",
      "Mensaje:",
      parsed.data.mensaje,
    ].join("\n"),
  });

  if (error) {
    return {
      status: "config_error",
      formError:
        "No pudimos enviar tu consulta por un problema técnico. Escribinos por WhatsApp mientras lo resolvemos.",
    };
  }

  redirect("/gracias");
}
