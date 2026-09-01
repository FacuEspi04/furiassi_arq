import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${site.nombre}.`,
};

export default function PrivacidadPage() {
  return (
    <section className="section-cream">
      <div className="container" style={{ maxWidth: 760 }}>
        <p className="section-eyebrow">Legal</p>
        <h1 className="section-h2">Política de privacidad</h1>
        <p className="section-sub" style={{ marginBottom: 32 }}>
          Este texto es un borrador estructural pendiente de revisión por un
          profesional del derecho antes de la puesta en producción del
          sitio. No reemplaza asesoramiento legal.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 8 }}>
              Qué datos recopilamos
            </h2>
            <p className="estudio-p">
              A través del formulario de contacto recopilamos nombre,
              teléfono, email, localidad y el mensaje que nos escribís, con
              el único fin de responder tu consulta comercial.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 8 }}>
              Analítica
            </h2>
            <p className="estudio-p">
              Usamos Vercel Analytics y Speed Insights para entender el uso
              agregado del sitio, sin cookies de seguimiento publicitario de
              terceros.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 8 }}>
              Contacto
            </h2>
            <p className="estudio-p">
              Para consultas sobre tus datos: {site.email} · {site.telefono}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
