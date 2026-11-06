import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stegaClean } from "next-sanity";
import { getArticulo, getArticulosParaSitemap } from "@/content/cms/articulos";
import { ArticuloVista } from "@/components/blog/ArticuloVista";
import { site } from "@/content/site";

export async function generateStaticParams() {
  const articulos = await getArticulosParaSitemap();
  return articulos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const articulo = await getArticulo(slug);
  if (!articulo) return {};

  const titulo = stegaClean(articulo.seoTitulo || articulo.titulo);
  const descripcion = stegaClean(articulo.seoDescripcion || articulo.extracto);
  const url = `${site.url}/blog/${articulo.slug}`;
  const imagen =
    articulo.portadaOg && articulo.portada
      ? { url: articulo.portadaOg, width: 1200, height: 630, alt: articulo.portada.alt }
      : undefined;

  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: `/blog/${articulo.slug}` },
    openGraph: {
      type: "article",
      url,
      title: titulo,
      description: descripcion,
      publishedTime: articulo.fechaPublicacion,
      modifiedTime: articulo.actualizado,
      authors: [site.titular],
      section: articulo.categoriaLabel,
      images: imagen ? [imagen] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descripcion,
      images: imagen ? [imagen.url] : undefined,
    },
  };
}

export default async function ArticuloPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const articulo = await getArticulo(slug);
  if (!articulo) notFound();

  return <ArticuloVista articulo={articulo} />;
}
