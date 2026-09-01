import { Reveal } from "@/components/marketing/Reveal";

const pilares = [
  {
    titulo: "Diseño exclusivo y a medida",
    texto:
      "Cada proyecto parte de cero: de cómo vive tu familia, no de un plano tipo. No hay dos casas Furiassi iguales.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <rect x="4" y="20" width="32" height="16" strokeWidth="1" />
        <polyline points="4,20 20,6 36,20" strokeWidth="1" />
        <line x1="16" y1="36" x2="16" y2="26" strokeWidth="1" />
        <line x1="24" y1="36" x2="24" y2="26" strokeWidth="1" />
      </svg>
    ),
  },
  {
    titulo: "Sustentabilidad real",
    texto:
      "Orientación, envolvente térmica y materiales responsables definidos desde el diseño, no como agregado al final de la obra.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path
          d="M20 6 C10 6 6 14 6 20 C6 28 12 34 20 34 C28 34 34 28 34 20"
          strokeWidth="1"
        />
        <path d="M28 6 L28 14 L36 10 Z" strokeWidth="1" />
        <line x1="20" y1="14" x2="20" y2="26" strokeWidth="1" />
        <line x1="14" y1="20" x2="26" y2="20" strokeWidth="1" />
      </svg>
    ),
  },
  {
    titulo: "Garantía y calidad de obra",
    texto:
      "Dirección técnica propia y controles por etapa antes de avanzar a la siguiente, con garantía escrita por contrato.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="14" strokeWidth="1" />
        <polyline points="13,20 18,25 27,15" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    titulo: "Flexibilidad financiera",
    texto:
      "Llave en mano completo o construcción por etapas, cada etapa habitable y certificada antes de pasar a la siguiente.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <line x1="8" y1="32" x2="8" y2="14" strokeWidth="1" />
        <line x1="20" y1="32" x2="20" y2="8" strokeWidth="1" />
        <line x1="32" y1="32" x2="32" y2="18" strokeWidth="1" />
        <line x1="4" y1="32" x2="36" y2="32" strokeWidth="1" />
        <polyline points="8,14 20,8 32,18" strokeWidth="1" />
      </svg>
    ),
  },
];

export function Diferenciales() {
  return (
    <section className="diferenciales grain">
      <div className="container">
        <Reveal className="diferenciales-header">
          <h2 className="diferenciales-h2">
            Cada proyecto, único.
            <br />
            Cada obra, garantizada.
          </h2>
          <p className="diferenciales-sub">
            Diseño exclusivo, eficiencia constructiva y acompañamiento
            completo de principio a fin, en cada vivienda que firmamos.
          </p>
        </Reveal>

        <div className="diferenciales-grid">
          {pilares.map((pilar) => (
            <div className="diferencial-item" key={pilar.titulo}>
              <div className="diferencial-icon">{pilar.icon}</div>
              <h3 className="diferencial-h3">{pilar.titulo}</h3>
              <p className="diferencial-p">{pilar.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
