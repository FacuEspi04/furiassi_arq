import type { PortableTextBlock } from "next-sanity";
import { stegaClean } from "next-sanity";
import type { ArticuloResumen } from "@/types/content";
import { sanityFetch } from "@/sanity/live";
import {
  ARTICULO_QUERY,
  ARTICULOS_QUERY,
  ARTICULOS_RECIENTES_QUERY,
  ARTICULOS_SITEMAP_QUERY,
} from "@/sanity/queries";
import { imagenDesdeCms, urlFor, type ImagenCms } from "@/sanity/image";
import { getCategoriaLabel } from "@/sanity/categorias";

type ArticuloCardCms = {
  _id: string;
  titulo?: string;
  slug?: string;
  extracto?: string;
  categoria?: string;
  fechaPublicacion?: string;
  portada?: ImagenCms;
};

type ArticuloCms = ArticuloCardCms & {
  _updatedAt: string;
  cuerpo?: PortableTextBlock[];
  ctaTexto?: string;
  seoTitulo?: string;
  seoDescripcion?: string;
  relacionados?: ArticuloCardCms[];
};

export type Articulo = ArticuloResumen & {
  actualizado: string;
  /** Portada recortada a 1200×630 (respetando el punto de interés) para redes y Google. */
  portadaOg?: string;
  cuerpo: PortableTextBlock[];
  ctaTexto?: string;
  seoTitulo?: string;
  seoDescripcion?: string;
  relacionados: ArticuloResumen[];
};

function aResumen(articulo: ArticuloCardCms): ArticuloResumen {
  const categoria = stegaClean(articulo.categoria) ?? "";
  return {
    id: articulo._id,
    titulo: articulo.titulo ?? "",
    // Los slugs y fechas se limpian de la codificación del modo edición
    // porque se usan en URLs y en <time dateTime>.
    slug: stegaClean(articulo.slug) ?? "",
    extracto: articulo.extracto ?? "",
    categoria,
    categoriaLabel: getCategoriaLabel(categoria),
    fechaPublicacion: stegaClean(articulo.fechaPublicacion) ?? new Date().toISOString(),
    portada: imagenDesdeCms(articulo.portada, stegaClean(articulo.titulo)),
  };
}

/** Todos los artículos publicados, del más nuevo al más viejo. */
export async function getArticulos(): Promise<ArticuloResumen[]> {
  const data = await sanityFetch<ArticuloCardCms[]>({ query: ARTICULOS_QUERY });
  return (data ?? []).map(aResumen);
}

export async function getArticulosRecientes(limite = 3): Promise<ArticuloResumen[]> {
  const data = await sanityFetch<ArticuloCardCms[]>({
    query: ARTICULOS_RECIENTES_QUERY,
    params: { limite },
  });
  return (data ?? []).map(aResumen);
}

export async function getArticulo(slug: string): Promise<Articulo | null> {
  const data = await sanityFetch<ArticuloCms | null>({ query: ARTICULO_QUERY, params: { slug } });
  if (!data) return null;

  return {
    ...aResumen(data),
    actualizado: data._updatedAt,
    portadaOg: data.portada?.asset?._ref
      ? urlFor(data.portada).width(1200).height(630).fit("crop").url()
      : undefined,
    cuerpo: data.cuerpo ?? [],
    ctaTexto: data.ctaTexto,
    seoTitulo: data.seoTitulo,
    seoDescripcion: data.seoDescripcion,
    relacionados: (data.relacionados ?? []).map(aResumen),
  };
}

export async function getArticulosParaSitemap(): Promise<{ slug: string; actualizado: string }[]> {
  const data = await sanityFetch<{ slug: string; _updatedAt: string }[]>({
    query: ARTICULOS_SITEMAP_QUERY,
  });
  return (data ?? []).map((a) => ({ slug: a.slug, actualizado: a._updatedAt }));
}
