import type { Testimonio } from "@/types/content";
import { testimonials } from "@/content/site";
import { sanityFetch } from "@/sanity/live";
import { RESENAS_QUERY } from "@/sanity/queries";

type ResenaCms = {
  _id: string;
  nombre?: string;
  texto?: string;
  estrellas?: number;
  destacada?: boolean;
};

/**
 * Reseñas de la sección "Experiencias reales", editables desde el panel
 * (/admin → Reseñas). Si Sanity no está configurado o no tiene reseñas
 * cargadas, se usan las de `testimonials` en content/site.ts.
 */
export async function getTestimonios(): Promise<Testimonio[]> {
  const data = await sanityFetch<ResenaCms[]>({ query: RESENAS_QUERY });
  if (!data?.length) return [...testimonials];

  return data
    .filter((resena) => resena.nombre && resena.texto)
    .map((resena) => ({
      id: resena._id,
      name: resena.nombre!,
      text: resena.texto!,
      rating: Math.min(5, Math.max(1, resena.estrellas ?? 5)),
      featured: resena.destacada ?? false,
    }));
}
