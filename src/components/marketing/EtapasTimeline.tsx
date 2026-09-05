import { buildWhatsappUrl } from "@/lib/whatsapp";
import { GhostLinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/marketing/Reveal";

const etapas = [
  {
    numero: "1",
    badge: "Habitable desde el día uno",
    titulo: "Núcleo habitable",
    texto:
      "Estructura, instalaciones y el núcleo funcional de la vivienda: dormitorio, baño y cocina-comedor, ya pensados para que las etapas siguientes encajen sin romper nada.",
  },
  {
    numero: "2",
    badge: "Certificada antes de avanzar",
    titulo: "Ampliación",
    texto:
      "Se suman los dormitorios y espacios de uso diario que quedaron planificados desde el proyecto ejecutivo original, con la misma dirección técnica.",
  },
  {
    numero: "3",
    badge: "Cierre del proyecto original",
    titulo: "Terminaciones y espacios finales",
    texto:
      "Se completan terminaciones y los espacios adicionales del proyecto original. La vivienda queda tal como se diseñó desde el principio, sin improvisar sobre lo ya construido.",
  },
];

export function EtapasTimeline() {
  return (
    <section id="etapas" className="etapas">
      <div className="container">
        <Reveal className="section-header">
          <h2 className="section-h2">Construcción por etapas: cómo funciona</h2>
          <p className="section-sub">
            Es nuestro diferencial comercial más fuerte porque resuelve el
            problema real de construir en Argentina: el capital no siempre
            está disponible de una sola vez. Acá, cada etapa se entrega
            funcional y certificada antes de pasar a la siguiente.
          </p>
        </Reveal>

        <div className="etapas-timeline">
          {etapas.map((etapa) => (
            <div className="etapa-item" key={etapa.numero}>
              <div className="etapa-num" aria-hidden="true">
                {etapa.numero}
              </div>
              <span className="section-eyebrow etapa-badge">{etapa.badge}</span>
              <h3 className="etapa-h3">{etapa.titulo}</h3>
              <p className="etapa-p">{etapa.texto}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <GhostLinkButton
            href={buildWhatsappUrl("etapas")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero entender la construcción por etapas
          </GhostLinkButton>
        </div>
      </div>
    </section>
  );
}
