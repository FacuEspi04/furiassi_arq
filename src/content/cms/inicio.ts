import type { ContenidoInicio } from "@/types/content";
import { heroImage } from "@/content/site";
import { inicioLocal } from "@/content/inicio";
import { sanityFetch } from "@/sanity/live";
import { INICIO_QUERY } from "@/sanity/queries";
import { imagenDesdeCms, type ImagenCms } from "@/sanity/image";

type InicioCms = Partial<Omit<ContenidoInicio, "imagen">> & { imagen?: ImagenCms };

/**
 * Contenido del Hero, editable desde el panel (/admin → Portada). Cada
 * campo vacío en el CMS cae al texto actual, así la portada nunca queda
 * con huecos.
 */
export async function getInicio(): Promise<ContenidoInicio> {
  const data = await sanityFetch<InicioCms>({ query: INICIO_QUERY });
  if (!data) return inicioLocal;

  return {
    kicker: data.kicker || inicioLocal.kicker,
    titulo: data.titulo || inicioLocal.titulo,
    tituloEnfasis: data.titulo ? data.tituloEnfasis : inicioLocal.tituloEnfasis,
    subtitulo: data.subtitulo || inicioLocal.subtitulo,
    botonCreditos: data.botonCreditos || inicioLocal.botonCreditos,
    botonPresupuesto: data.botonPresupuesto || inicioLocal.botonPresupuesto,
    botonPlanos: data.botonPlanos || inicioLocal.botonPlanos,
    imagen: imagenDesdeCms(data.imagen, heroImage.alt) ?? inicioLocal.imagen,
  };
}
