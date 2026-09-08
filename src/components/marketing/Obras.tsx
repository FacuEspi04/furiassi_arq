import { getObras } from "@/content/obras";
import { ObraCard } from "@/components/marketing/ObraCard";
import { GhostLinkButton } from "@/components/ui/Button";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/marketing/Reveal";

export function Obras() {
  const obras = getObras();

  return (
    <section id="obras" className="section-espresso grain">
      <div className="container">
        <Reveal className="obras-header">
          <div>
            <p className="section-eyebrow">Portfolio</p>
            <h2 className="section-h2 obras-title" style={{ marginBottom: 0 }}>
              Obras realizadas en Mendoza
            </h2>
          </div>
        </Reveal>

        <Reveal className="obras-grid">
          {obras.map((obra) => (
            <ObraCard obra={obra} key={obra.slug} />
          ))}
        </Reveal>

        <div style={{ marginTop: 40 }}>
          <GhostLinkButton
            href={buildWhatsappUrl("obras")}
            className="btn-ghost--light"
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
