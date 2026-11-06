import type { Metadata } from "next";
import { getArticulos } from "@/content/cms/articulos";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const titulo = "Artículos sobre arquitectura y construcción en Mendoza";
const descripcion =
  "Guías prácticas de Furiassi Arquitectos: compra de lotes, créditos hipotecarios, construcción por etapas, diseño y sustentabilidad en Mendoza.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${site.url}/blog`,
    title: titulo,
    description: descripcion,
  },
};

export default async function BlogPage() {
  const articulos = await getArticulos();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
            { "@type": "ListItem", position: 2, name: "Artículos", item: `${site.url}/blog` },
          ],
        }}
      />
      <section className="blog-hero section-cream">
        <div className="container">
          <p className="section-eyebrow">Artículos</p>
          <h1 className="section-h2 blog-hero-title">
            Guías para <em>construir con información.</em>
          </h1>
          <p className="section-sub blog-hero-sub">
            Lo que aprendimos en más de {site.experienciaAnios} años diseñando y construyendo
            viviendas en Mendoza, explicado para que tomes mejores decisiones.
          </p>
        </div>
      </section>

      <section className="section-cream-2 blog-listado">
        <div className="container">
          {articulos.length > 0 ? (
            <div className="articulos-grid">
              {articulos.map((articulo) => (
                <ArticleCard articulo={articulo} key={articulo.id} headingLevel="h2" />
              ))}
            </div>
          ) : (
            <p className="articulos-vacio">
              Muy pronto vas a encontrar acá nuestros primeros artículos. Mientras tanto,{" "}
              <a href={buildWhatsappUrl("blog")} data-whatsapp-origen="blog" target="_blank" rel="noopener noreferrer">
                escribinos por WhatsApp
              </a>{" "}
              con tu consulta.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
