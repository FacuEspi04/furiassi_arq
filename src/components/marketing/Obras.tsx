import { getObras } from "@/content/obras";
import { ObraCard } from "@/components/marketing/ObraCard";
import { GhostLinkButton } from "@/components/ui/Button";
import { getWhatsappUrl } from "@/content/site";
import { Reveal } from "@/components/marketing/Reveal";

export function Obras() {
  const obras = getObras();

  return (
    <section id="obras" className="section-cream">
      <div className="container">
        <Reveal className="obras-header">
          <div>
            <p className="section-eyebrow">Portfolio</p>
            <h2 className="section-h2" style={{ marginBottom: 0 }}>
              Obras realizadas
              <br />
              en Mendoza
            </h2>
          </div>
          <p className="obras-sub">
            Cada proyecto, un hogar construido a medida del cliente que lo
            habita.
          </p>
        </Reveal>

        <Reveal className="obras-grid">
          {obras.map((obra) => (
            <ObraCard obra={obra} key={obra.slug} />
          ))}
        </Reveal>

        <div style={{ marginTop: 40 }}>
          <GhostLinkButton
            href={getWhatsappUrl("obras")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vi las obras, quiero consultar por un proyecto similar
          </GhostLinkButton>
        </div>
      </div>
    </section>
  );
}
