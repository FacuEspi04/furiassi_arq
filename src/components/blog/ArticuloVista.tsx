import Image from "next/image";
import Link from "next/link";
import { stegaClean } from "next-sanity";
import type { Articulo } from "@/content/cms/articulos";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ArticleCta } from "@/components/blog/ArticleCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { formatearFecha } from "@/lib/fechas";

/** Página completa de un artículo: encabezado, portada, texto, CTA y relacionados. */
export function ArticuloVista({ articulo }: { articulo: Articulo }) {
  const url = `${site.url}/blog/${articulo.slug}`;
  const tituloLimpio = stegaClean(articulo.titulo);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#articulo`,
      mainEntityOfPage: url,
      headline: tituloLimpio,
      description: stegaClean(articulo.seoDescripcion || articulo.extracto),
      image: articulo.portada ? [articulo.portada.src] : undefined,
      datePublished: articulo.fechaPublicacion,
      dateModified: articulo.actualizado,
      inLanguage: "es-AR",
      articleSection: articulo.categoriaLabel,
      author: { "@type": "Person", name: site.titular, url: site.url },
      publisher: {
        "@type": "Organization",
        name: site.nombre,
        url: site.url,
        logo: { "@type": "ImageObject", url: `${site.url}/brand/favicon-32.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
        { "@type": "ListItem", position: 2, name: "Artículos", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 3, name: tituloLimpio, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <article className="articulo">
        <header className="articulo-header">
          <div className="articulo-header-inner">
            <nav className="articulo-breadcrumb" aria-label="Ubicación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog">Artículos</Link>
            </nav>
            <p className="articulo-meta">
              <span>{articulo.categoriaLabel}</span>
              <time dateTime={articulo.fechaPublicacion}>
                {formatearFecha(articulo.fechaPublicacion)}
              </time>
            </p>
            <h1 className="articulo-title">{articulo.titulo}</h1>
            <p className="articulo-lead">{articulo.extracto}</p>
            <p className="articulo-autor">Por {site.titular}</p>
          </div>
          {articulo.portada && (
            <div className="articulo-portada">
              <Image
                src={articulo.portada.src}
                alt={articulo.portada.alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="articulo-portada-img"
                style={
                  articulo.portada.objectPosition
                    ? { objectPosition: articulo.portada.objectPosition }
                    : undefined
                }
              />
            </div>
          )}
        </header>

        <div className="articulo-contenido">
          <ArticleBody value={articulo.cuerpo} />
          <ArticleCta titulo={tituloLimpio} texto={articulo.ctaTexto} />
        </div>
      </article>

      {articulo.relacionados.length > 0 && (
        <section className="section-cream-2" aria-labelledby="relacionados-titulo">
          <div className="container">
            <p className="section-eyebrow">Seguí leyendo</p>
            <h2 id="relacionados-titulo" className="section-h2">
              Otros artículos
            </h2>
            <div className="articulos-grid">
              {articulo.relacionados.map((relacionado) => (
                <ArticleCard articulo={relacionado} key={relacionado.id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
