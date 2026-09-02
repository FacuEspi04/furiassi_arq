import { site, getWhatsappUrl } from "@/content/site";
import { PrimaryLinkButton, GhostLinkButton } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-left">
        <p className="hero-kicker">Arquitectura residencial · Mendoza</p>

        <h1 className="hero-h1">
          Tu casa, <em>diseñada a tu medida</em>
          <br />y construida con garantía.
        </h1>

        <p className="hero-sub">
          Diseñamos y construimos viviendas personalizadas en el Gran Mendoza.
          Llave en mano o por etapas, con eficiencia constructiva, criterios
          sustentables y garantía escrita en cada proyecto.
        </p>

        <div className="hero-actions">
          <PrimaryLinkButton
            href={getWhatsappUrl("hero")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Coordinar una reunión
          </PrimaryLinkButton>
          <GhostLinkButton href="#obras">Ver obras</GhostLinkButton>
        </div>

        <div className="hero-stats">
          <div>
            <p className="stat-num">+{site.experienciaAnios}</p>
            <p className="stat-label">Años de experiencia</p>
          </div>
          <div>
            <p className="stat-num">{site.resenas.ratingValue.toFixed(1)}</p>
            <p className="stat-label">
              Calificación · {site.resenas.reviewCount} reseñas
            </p>
          </div>
          <div>
            <p className="stat-num">{site.zonaServicio.length}</p>
            <p className="stat-label">Localidades en el Gran Mendoza</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        {/* TODO: reemplazar por <Image src="/hero/obra-principal.jpg" fill
            sizes="50vw" priority alt="..." /> cuando llegue la foto/video real. */}
        <div className="hero-right-mark" aria-hidden="true">
          <BrandMark className="hero-right-mark-svg" />
        </div>
        <div className="hero-right-overlay" aria-hidden="true" />
        <div className="hero-right-badge">
          <p className="num">{site.resenas.reviewCount}</p>
          <p className="label">Reseñas · {site.resenas.ratingValue.toFixed(1)} ★</p>
        </div>
      </div>
    </section>
  );
}
