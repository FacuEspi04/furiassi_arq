import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { PrimaryLinkButton } from "@/components/ui/Button";
import { GraciasAnalytics } from "@/components/marketing/GraciasAnalytics";

export const metadata: Metadata = {
  title: "Gracias por tu consulta",
  description: "Recibimos tu consulta. Te contactamos a la brevedad.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <section className="section-cream" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 560, marginInline: "auto" }}>
        <p className="section-eyebrow" style={{ justifyContent: "center" }}>
          Consulta recibida
        </p>
        <h1 className="section-h2">Gracias por escribirnos.</h1>
        <p className="section-sub" style={{ marginBottom: 40 }}>
          Recibimos tu consulta y te vamos a responder dentro del horario de
          atención (lunes a viernes, en máximo 2 horas hábiles). Si es
          urgente, escribinos directamente por WhatsApp.
        </p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          <PrimaryLinkButton
            href={buildWhatsappUrl("footer")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </PrimaryLinkButton>
          <Link href="/" className="btn-ghost">
            Volver al inicio
          </Link>
        </div>
      </div>
      <GraciasAnalytics />
    </section>
  );
}
