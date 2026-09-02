import { Reveal } from "@/components/marketing/Reveal";

const acciones = [
  {
    titulo: "Orientación y asoleamiento",
    texto: "Ambientes ubicados según el sol de Mendoza — calor en invierno, sombra en verano.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="6" strokeWidth="1.3" />
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.3" />
        <line x1="16" y1="26" x2="16" y2="30" strokeWidth="1.3" />
        <line x1="2" y1="16" x2="6" y2="16" strokeWidth="1.3" />
        <line x1="26" y1="16" x2="30" y2="16" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    titulo: "Envolvente y aislación térmica",
    texto: "Muros y techos calculados para gastar menos en calefacción y refrigeración.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="10" width="24" height="18" strokeWidth="1.3" />
        <polyline points="4,10 16,3 28,10" strokeWidth="1.3" />
        <line x1="10" y1="28" x2="10" y2="18" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    titulo: "Carpinterías eficientes",
    texto: "Doble vidriado hermético (DVH) — menos pérdida de temperatura, menos filtraciones.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" strokeWidth="1.3" />
        <line x1="16" y1="4" x2="16" y2="28" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    titulo: "Ventilación cruzada",
    texto: "Aberturas enfrentadas que renuevan el aire sin depender de climatización artificial.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M4 12 H24 a4 4 0 0 0 0 -8" strokeWidth="1.3" />
        <path d="M4 20 H20 a4 4 0 0 1 0 8" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    titulo: "Gestión responsable del agua",
    texto: "Griferías de bajo consumo y captación pluvial cuando el terreno lo permite.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 4 C16 4 8 14 8 20 a8 8 0 0 0 16 0 C24 14 16 4 16 4 Z"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },
  {
    titulo: "Materiales responsables",
    texto: "Buena procedencia y ciclo de vida largo, antes que la opción más barata.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3 L28 10 V22 L16 29 L4 22 V10 Z" strokeWidth="1.3" />
        <path d="M4 10 L16 17 L28 10" strokeWidth="1.3" />
        <line x1="16" y1="17" x2="16" y2="29" strokeWidth="1.3" />
      </svg>
    ),
  },
];

export function Sustentabilidad() {
  return (
    <section id="sustentabilidad" className="sustentabilidad-section">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-h2">
            Sustentabilidad que se nota en la factura, no solo en el discurso.
          </h2>
          <p className="section-sub">
            No es un adjetivo: es una lista de decisiones concretas que
            tomamos en el diseño, antes de que empiece la obra.
          </p>
        </Reveal>

        <div className="sustentabilidad-grid">
          {acciones.map((accion) => (
            <div className="sustentabilidad-item" key={accion.titulo}>
              <div className="sustentabilidad-icon">{accion.icon}</div>
              <div>
                <h3 className="sustentabilidad-h3">{accion.titulo}</h3>
                <p className="sustentabilidad-p">{accion.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
