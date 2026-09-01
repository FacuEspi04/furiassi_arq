import { getResenas } from "@/content/resenas";
import { site } from "@/content/site";
import { GhostLinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/marketing/Reveal";

const ESTRELLAS = "★★★★★";

export function Resenas() {
  const resenas = getResenas();

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

        {resenas.length > 0 ? (
          <div className="resenas-grid">
            {resenas.map((resena) => (
              <div className="resena-card" key={resena.id}>
                <p className="resena-stars" aria-hidden="true">
                  {ESTRELLAS.slice(0, resena.rating)}
                </p>
                <p className="resena-text">&ldquo;{resena.texto}&rdquo;</p>
                <p className="resena-author-name">{resena.autor}</p>
                <p className="resena-author-loc">
                  {resena.localidad} · {resena.anio}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="resenas-empty">
            <p>
              Estamos incorporando el texto de las reseñas reales desde
              nuestro perfil de Google Business. Mientras tanto, podés
              verlas directamente en Google.
            </p>
            <GhostLinkButton
              href={site.googleMapsDireccionesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver reseñas en Google
            </GhostLinkButton>
          </div>
        )}
      </div>
    </section>
  );
}
