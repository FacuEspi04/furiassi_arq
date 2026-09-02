import { site, getDireccionCompleta } from "@/content/site";
import { ContactForm } from "@/components/marketing/ContactForm";
import { BrandMark } from "@/components/ui/BrandMark";

export function Contacto() {
  return (
    <section id="contacto" className="contacto grain">
      <BrandMark className="contacto-watermark" />
      <div className="container">
        <div className="contacto-inner">
          <div>
            <p className="section-eyebrow section-eyebrow--light">Contacto</p>
            <h2 className="contacto-h2">
              Contanos tu idea.
              <br />
              Nosotros la convertimos
              <br />
              en tu hogar.
            </h2>
            <p className="contacto-sub">
              Cada proyecto empieza con una conversación. Coordiná una
              reunión de relevamiento sin costo y recibí una propuesta
              personalizada.
            </p>

            <div className="contacto-data">
              <div className="contacto-data-item">
                <span className="contacto-data-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="contacto-data-label">Dirección</p>
                  <p className="contacto-data-value">
                    {site.direccion.calle}
                    <br />
                    {site.direccion.complemento} · {site.direccion.localidad},{" "}
                    {site.direccion.region}
                  </p>
                </div>
              </div>

              <div className="contacto-data-item">
                <span className="contacto-data-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 8.11 8.11l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="contacto-data-label">WhatsApp</p>
                  <p className="contacto-data-value">{site.telefono}</p>
                </div>
              </div>

              <div className="contacto-data-item">
                <span className="contacto-data-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,14 22,4" />
                  </svg>
                </span>
                <div>
                  <p className="contacto-data-label">Email</p>
                  <p className="contacto-data-value">{site.email}</p>
                </div>
              </div>

              <div className="contacto-data-item">
                <span className="contacto-data-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <div>
                  <p className="contacto-data-label">Horario</p>
                  <p className="contacto-data-value">
                    {site.horario.dias}, {site.horario.horas}
                    <br />
                    {site.horario.nota}
                  </p>
                </div>
              </div>
            </div>

            <a
              className="contacto-map"
              href={site.googleMapsDireccionesUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Cómo llegar a ${getDireccionCompleta()} (abre Google Maps)`}
            >
              <svg viewBox="0 0 44 44">
                <path d="M22 4 C13 4 7 11 7 19 C7 30 22 40 22 40 C22 40 37 30 37 19 C37 11 31 4 22 4 Z" />
                <circle cx="22" cy="19" r="6" />
              </svg>
              <span style={{ flex: 1 }}>
                <p className="contacto-data-label">Cómo llegar</p>
                <p className="contacto-data-value" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  Ver en Google Maps
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 14, height: 14, stroke: "currentColor", fill: "none", strokeWidth: 2 }}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </p>
              </span>
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
