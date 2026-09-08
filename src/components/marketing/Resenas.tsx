import { site, testimonials } from "@/content/site";
import { GhostLinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/marketing/Reveal";

const ESTRELLAS = "★★★★★";

export function Resenas() {
  return (
    <section id="resenas" className="section-cream">
      <div className="container">
        <Reveal className="resenas-header">
          <div>
            <h2 className="section-h2" style={{ marginBottom: 0 }}>
              Experiencias reales de quienes confiaron en nosotros.
            </h2>
          </div>
          <div className="resenas-rating">
            <p className="big-num">{site.resenas.ratingValue.toFixed(1)}</p>
            <p className="stars" aria-hidden="true">
              {ESTRELLAS}
            </p>
            <p className="count">{site.resenas.reviewCount} reseñas en Google</p>
          </div>
        </Reveal>

        <div className="resenas-grid grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              className={`resena-card ${testimonial.featured ? "resena-card--featured md:col-span-2" : ""}`}
              key={testimonial.id}
            >
              <div className="resena-card-header">
                <span className="resena-avatar" aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <p className="resena-author-name">{testimonial.name}</p>
                  <p className="resena-stars" aria-label={`${testimonial.rating} de 5 estrellas`}>
                    {ESTRELLAS.slice(0, testimonial.rating)}
                  </p>
                </div>
              </div>
              <p className="resena-text">&ldquo;{testimonial.text}&rdquo;</p>
            </article>
          ))}
        </div>

        <div className="resenas-cta">
          <GhostLinkButton
            href={site.googleMapsDireccionesUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver reseñas en Google
          </GhostLinkButton>
        </div>
      </div>
    </section>
  );
}
