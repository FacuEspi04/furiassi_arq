import { site, testimonials } from "@/content/site";
import { GhostLinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/marketing/Reveal";

const ESTRELLAS = "★★★★★";

function GoogleIcon() {
  return (
    <svg className="google-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.35 12.27c0-.71-.06-1.4-.18-2.05H12v3.88h5.24a4.48 4.48 0 0 1-1.94 2.94v2.44h3.14c1.84-1.69 2.91-4.18 2.91-7.21Z" />
      <path fill="#34A853" d="M12 21.6c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.55 0-4.71-1.72-5.49-4.03H3.27v2.52A9.74 9.74 0 0 0 12 21.6Z" />
      <path fill="#FBBC05" d="M6.51 13.69A5.85 5.85 0 0 1 6.2 12c0-.59.11-1.17.31-1.69V7.79H3.27A9.6 9.6 0 0 0 2.25 12c0 1.52.36 2.96 1.02 4.21l3.24-2.52Z" />
      <path fill="#EA4335" d="M12 6.28c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.38 14.63 2.4 12 2.4a9.74 9.74 0 0 0-8.73 5.39l3.24 2.52c.78-2.31 2.94-4.03 5.49-4.03Z" />
    </svg>
  );
}

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
            <div>
              <p className="big-num">{site.resenas.ratingValue.toFixed(1)}</p>
              <p className="stars" aria-hidden="true">
                {ESTRELLAS}
              </p>
              <p className="count">{site.resenas.reviewCount} reseñas en Google</p>
            </div>
          </div>
        </Reveal>

        <div className="resenas-grid">
          {testimonials.map((testimonial) => (
            <article
              className={`resena-card ${testimonial.featured ? "resena-card--featured" : ""}`}
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
            className="resenas-google-link"
            href={site.googleMapsDireccionesUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoogleIcon />
            Ver reseñas en Google
          </GhostLinkButton>
        </div>
      </div>
    </section>
  );
}
