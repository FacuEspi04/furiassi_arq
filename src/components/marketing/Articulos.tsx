import Link from "next/link";
import { draftMode } from "next/headers";
import { getArticulosRecientes } from "@/content/cms/articulos";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Reveal } from "@/components/marketing/Reveal";

/**
 * Sección "Artículos" de la home: los últimos 3 artículos del blog. Si no
 * hay ninguno publicado, los visitantes no la ven; en el modo edición se
 * muestra un aviso para que Sebastián sepa dónde van a aparecer.
 */
export async function Articulos() {
  const articulos = await getArticulosRecientes(3);

  if (articulos.length === 0) {
    const { isEnabled: modoEdicion } = await draftMode();
    if (!modoEdicion) return null;

    return (
      <section id="articulos" className="section-cream-2">
        <div className="container">
          <p className="section-eyebrow">Artículos</p>
          <p className="articulos-vacio">
            Todavía no hay artículos. Creá el primero desde el panel:{" "}
            <strong>Contenido → Artículos → +</strong>. Cuando lo publiques, aparece acá.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="articulos" className="section-cream-2">
      <div className="container">
        <Reveal className="articulos-header">
          <div>
            <p className="section-eyebrow">Artículos</p>
            <h2 className="section-h2" style={{ marginBottom: 0 }}>
              Guías para <em>construir con información.</em>
            </h2>
          </div>
          <Link href="/blog" className="btn-ghost">
            Ver todos los artículos
          </Link>
        </Reveal>

        <Reveal className="articulos-grid">
          {articulos.map((articulo) => (
            <ArticleCard articulo={articulo} key={articulo.id} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
