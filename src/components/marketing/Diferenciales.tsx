import { Reveal } from "@/components/marketing/Reveal";

const pilares = [
  {
    titulo: "Diseño exclusivo y a tu medida",
    texto:
      "Combinamos tus ideas, tus necesidades de diseño y tus recursos económicos con nuestro enfoque constructivo y perspectiva de diseño para lograr un proyecto sin igual.",
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
    titulo: "Sustentabilidad selectiva",
    texto:
      "Evaluamos la aplicación de diferentes materiales y métodos activos o pasivos de aislación térmica y acústica que mejoran las cualidades estándar de cada espacio y potencian el ahorro y cuidados del medio ambiente.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 34 C20 34 10 28 10 18 C10 8 20 4 20 4 C20 4 30 8 30 18 C30 28 20 34 20 34 Z" strokeWidth="1" />
        <line x1="20" y1="34" x2="20" y2="12" strokeWidth="1" />
      </svg>
    ),
  },
  {
    titulo: "Garantía de obra",
    texto:
      "Controlamos y certificamos cada etapa de la obra para darte tranquilidad antes, durante y al final de la entrega de cada obra terminada junto a todas las aprobaciones municipales.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M8 8 L20 4 L32 8 L32 18 C32 26 24 34 20 36 C16 34 8 26 8 18 Z" strokeWidth="1" />
        <polyline points="14,20 19,25 26,15" strokeWidth="1" />
      </svg>
    ),
  },
  {
    titulo: "Flexibilidad financiera",
    texto:
      "Construimos llave en mano, o en etapas de acuerdo a las necesidades de cada cliente. Asimismo, brindamos asesoramiento para la obtención de créditos hipotecarios adaptando el plan de obra a las posibilidades crediticias personales.",
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
            Así pensamos cada proyecto.
          </h2>
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
