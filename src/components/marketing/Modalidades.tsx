"use client";

import { useEffect } from "react";
import { Reveal } from "@/components/marketing/Reveal";

const modalidades = [
  {
    id: "proyecto-direccion",
    titulo: "Proyecto y dirección",
    tagline: "Vos elegís tu equipo de obra, nosotros diseñamos y controlamos.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true" className="modalidad-top-icon">
        <path d="M6,18 L20,6 L34,18" strokeWidth="1" fill="none" />
        <path d="M10,15 L10,34 L30,34 L30,15" strokeWidth="1" fill="none" />
      </svg>
    ),
    items: [
      {
        label: "Qué incluye",
        valor:
          "Anteproyecto, proyecto ejecutivo, documentación técnica y permisos, y dirección y supervisión de la obra que ejecuta tu constructora.",
      },
      {
        label: "Para quién es",
        valor:
          "Para quienes ya tienen o prefieren elegir su propio equipo de obra, pero quieren el diseño y el control técnico de Furiassi.",
      },
      {
        label: "Cómo se paga",
        valor:
          "Honorarios profesionales por etapa del proyecto (anteproyecto, ejecutivo, dirección de obra), acordados por contrato antes de empezar.",
      },
      {
        label: "Qué pasa al final",
        valor:
          "Recibís los planos aprobados y la certeza de que la obra se ejecutó conforme al proyecto, verificado en cada visita de obra.",
      },
    ],
  },
  {
    id: "llave-en-mano",
    titulo: "Llave en mano",
    tagline: "Un solo equipo responsable, del primer boceto a las llaves.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true" className="modalidad-top-icon">
        <circle cx="28" cy="12" r="6" strokeWidth="1" fill="none" />
        <line x1="23.7" y1="16.2" x2="8" y2="32" strokeWidth="1" />
        <line x1="12" y1="28" x2="16" y2="32" strokeWidth="1" />
        <line x1="16" y1="24" x2="20" y2="28" strokeWidth="1" />
      </svg>
    ),
    items: [
      {
        label: "Qué incluye",
        valor:
          "Diseño y construcción completa por el mismo equipo: materiales, mano de obra, cronograma y gestión de permisos.",
      },
      {
        label: "Para quién es",
        valor:
          "Para quienes quieren un único interlocutor responsable de todo el proceso, sin coordinar contratistas por su cuenta.",
      },
      {
        label: "Cómo se paga",
        valor:
          "Presupuesto cerrado por etapas de obra (fundación, estructura, mampostería, terminaciones), acordado por contrato antes de empezar.",
      },
      {
        label: "Qué pasa al final",
        valor:
          "Recibís la vivienda terminada con garantía escrita y el final de obra municipal gestionado.",
      },
    ],
  },
  {
    id: "por-etapas",
    titulo: "Construcción por etapas",
    tagline: "Tu casa, a tu ritmo financiero — sin rehacer nada.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true" className="modalidad-top-icon">
        <rect x="6" y="26" width="8" height="8" strokeWidth="1" fill="none" />
        <rect x="16" y="18" width="8" height="16" strokeWidth="1" fill="none" />
        <rect x="26" y="10" width="8" height="24" strokeWidth="1" fill="none" />
      </svg>
    ),
    items: [
      {
        label: "Qué incluye",
        valor:
          "El mismo proyecto ejecutivo completo desde el inicio, planificado para ejecutarse en fases según tu disponibilidad de presupuesto.",
      },
      {
        label: "Para quién es",
        valor:
          "Para quienes quieren empezar a construir ya, sin esperar a reunir el capital completo de toda la obra.",
      },
      {
        label: "Cómo se paga",
        valor:
          "Cada etapa se cotiza y se paga por separado, antes de arrancarla. Nunca comprometés el total de la obra de una sola vez.",
      },
      {
        label: "Qué pasa al final",
        valor:
          "Cada etapa se entrega habitable y certificada. La siguiente se agenda cuando estés listo, sin demoler ni rehacer lo ya construido.",
      },
    ],
  },
];

export function Modalidades() {
  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLDetailsElement>(".modalidad-card")
    );
    const desktopQuery = window.matchMedia("(min-width: 861px)");

    function syncCards() {
      cards.forEach((card) => {
        card.open = desktopQuery.matches;
      });
    }

    function keepDesktopCardsOpen(event: Event) {
      const card = event.currentTarget as HTMLDetailsElement;
      if (desktopQuery.matches && !card.open) {
        card.open = true;
      }
    }

    syncCards();
    cards.forEach((card) => card.addEventListener("toggle", keepDesktopCardsOpen));
    desktopQuery.addEventListener("change", syncCards);
    return () => {
      cards.forEach((card) =>
        card.removeEventListener("toggle", keepDesktopCardsOpen)
      );
      desktopQuery.removeEventListener("change", syncCards);
    };
  }, []);

  return (
    <section id="modalidades" className="modalidades-section">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-h2">
            Tres formas de construir tu casa. Vos elegís cuál.
          </h2>
          <p className="section-sub">
            El punto de partida siempre es el mismo proyecto ejecutivo. Lo
            que cambia es quién construye y cómo se organiza el pago.
          </p>
        </Reveal>

        <div className="modalidades-grid">
          {modalidades.map((modalidad) => (
            <details 
              className="modalidad-card"
              key={modalidad.id}
            >
              <summary className="modalidad-h3">
                <span className="modalidad-h3-title-wrap">
                  {modalidad.icon}
                  <span className="modalidad-h3-text">{modalidad.titulo}</span>
                </span>
                <span className="modalidad-h3-icon" aria-hidden="true" />
              </summary>
              <div className="modalidad-content">
                <p className="modalidad-tagline">{modalidad.tagline}</p>
                <dl className="modalidad-list">
                  {modalidad.items.map((item) => (
                    <div className="modalidad-list-item" key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.valor}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
