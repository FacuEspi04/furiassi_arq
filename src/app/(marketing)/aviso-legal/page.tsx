import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${site.nombre}.`,
};

export default function AvisoLegalPage() {
  return (
    <section className="section-cream">
      <div className="container" style={{ maxWidth: 760 }}>
        <p className="section-eyebrow">Legal</p>
        <h1 className="section-h2">Aviso legal</h1>
        <p className="section-sub" style={{ marginBottom: 32 }}>
          Este texto es un borrador estructural pendiente de revisión por un
          profesional del derecho antes de la puesta en producción del
          sitio. No reemplaza asesoramiento legal.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 8 }}>
              Titularidad
            </h2>
            <p className="estudio-p">
              Este sitio es operado por {site.titular}, con domicilio
              comercial en {site.direccion.calle}, {site.direccion.complemento},{" "}
              {site.direccion.localidad}, {site.direccion.region}, Argentina.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 8 }}>
              Contacto
            </h2>
            <p className="estudio-p">
              Consultas sobre este aviso legal: {site.email} · {site.telefono}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
