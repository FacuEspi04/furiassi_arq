import Image from "next/image";
import Link from "next/link";
import type { ArticuloResumen } from "@/types/content";
import { formatearFecha } from "@/lib/fechas";

export function ArticleCard({
  articulo,
  headingLevel = "h3",
}: {
  articulo: ArticuloResumen;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article className="articulo-card">
      <Link href={`/blog/${articulo.slug}`} className="articulo-card-link">
        <div className="articulo-card-media">
          {articulo.portada ? (
            <Image
              src={articulo.portada.src}
              alt={articulo.portada.alt}
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className="articulo-card-image"
              style={
                articulo.portada.objectPosition
                  ? { objectPosition: articulo.portada.objectPosition }
                  : undefined
              }
            />
          ) : null}
        </div>
        <div className="articulo-card-body">
          <p className="articulo-meta">
            <span>{articulo.categoriaLabel}</span>
            <time dateTime={articulo.fechaPublicacion}>
              {formatearFecha(articulo.fechaPublicacion)}
            </time>
          </p>
          <Heading className="articulo-card-title">{articulo.titulo}</Heading>
          <p className="articulo-card-excerpt">{articulo.extracto}</p>
          <span className="articulo-card-more">
            Leer artículo
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
