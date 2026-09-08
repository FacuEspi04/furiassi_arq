"use client";

import { serviciosWhatsApp } from "@/content/site";
import { trackCtaClick } from "@/lib/analytics";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/marketing/Reveal";

export function Servicios() {
  const handleCtaClick = (ctaName: string) => {
    trackCtaClick(ctaName, "servicios_section");
  };

  return (
    <section id="servicios" className="section-cream">
      <div className="container">
        <Reveal className="section-header servicios-header">
          <h2 className="section-h2">Nuestros servicios</h2>
          <span className="servicios-divider" aria-hidden="true" />
          <p className="section-sub">
            Obtené asesoramiento y más información por WhatsApp:
          </p>
        </Reveal>

        <div className="servicios-layout">
          <div className="servicios-individuales">
            <p className="section-eyebrow">Servicios individuales</p>
            <div className="servicios-list">
              {serviciosWhatsApp.individuales.map((servicio) => (
                <a
                  className="servicio-link"
                  href={buildWhatsappUrl(servicio.mensajeKey)}
                  key={servicio.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCtaClick(servicio.ctaName)}
                >
                  <span>{servicio.label}</span>
                  <span className="servicio-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="servicios-modalidades">
            {serviciosWhatsApp.modalidades.map((modalidad, index) => (
              <a
                className={`servicio-modalidad servicio-modalidad--${index === 0 ? "light" : "dark"}`}
                href={buildWhatsappUrl(modalidad.mensajeKey)}
                key={modalidad.label}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick(modalidad.ctaName)}
              >
                <h3>{modalidad.label}</h3>
                <span>Consultar por WhatsApp ↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
