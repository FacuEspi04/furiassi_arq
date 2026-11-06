import type { Obra, Modalidad } from "@/types/content";
import { stegaClean } from "next-sanity";
import { obrasLocales } from "@/content/obras";
import { sanityFetch } from "@/sanity/live";
import { OBRAS_QUERY } from "@/sanity/queries";
import { imagenDesdeCms, type ImagenCms } from "@/sanity/image";

type ObraCms = {
  _id: string;
  nombre?: string;
  localidad?: string;
  anio?: number;
  superficie?: number;
  modalidad?: Modalidad;
  descripcion?: string;
  destacada?: boolean;
  pendienteConfirmacion?: boolean;
  imagenes?: ImagenCms[];
};

/**
 * Obras editables desde el panel (/admin → Obras). Si Sanity no está
 * configurado o todavía no tiene obras cargadas, se usan las de arriba.
 */
export async function getObras(): Promise<Obra[]> {
  const data = await sanityFetch<ObraCms[]>({ query: OBRAS_QUERY });
  if (!data?.length) return obrasLocales;

  return data
    .map((obra): Obra => {
      const localidad = obra.localidad ?? "";
      const nombre = obra.nombre ?? "Vivienda unifamiliar";
      const altPorDefecto = `${stegaClean(nombre)} en ${stegaClean(localidad)} - Furiassi Arquitectos`;

      return {
        slug: obra._id,
        nombre,
        localidad,
        anio: obra.anio ?? 0,
        superficie: obra.superficie ?? 0,
        modalidad: stegaClean(obra.modalidad) ?? "Llave en mano",
        highlights: [],
        descripcion: obra.descripcion ?? "",
        imagenes: (obra.imagenes ?? [])
          .map((imagen) => imagenDesdeCms(imagen, altPorDefecto))
          .filter((imagen) => imagen !== null),
        destacada: obra.destacada ?? false,
        pendienteConfirmacion: obra.pendienteConfirmacion ?? false,
      };
    })
    .filter((obra) => obra.imagenes.length > 0);
}
