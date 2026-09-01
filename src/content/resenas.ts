import type { Resena } from "@/types/content";

/**
 * TODO(cliente): texto, nombre y localidad de reseñas reales tal como
 * figuran en el Google Business Profile del estudio. El rating agregado
 * (5.0 · 48 reseñas, en content/site.ts) sí está confirmado y se usa en el
 * JSON-LD; las reseñas individuales de acá abajo NO se inventan — la
 * sección se renderiza con un estado vacío + link al perfil real hasta que
 * lleguen los textos.
 */
const resenas: Resena[] = [];

export function getResenas(): Resena[] {
  return resenas;
}
