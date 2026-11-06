import type { FaqItem } from "@/types/content";
import { faqLocal } from "@/content/faq";
import { sanityFetch } from "@/sanity/live";
import { PREGUNTAS_QUERY } from "@/sanity/queries";

type PreguntaCms = { _id: string; pregunta?: string; respuesta?: string };

/**
 * Preguntas frecuentes editables desde el panel. Si Sanity no está
 * configurado o no tiene preguntas cargadas, se usan las de arriba.
 */
export async function getFaq(): Promise<FaqItem[]> {
  const data = await sanityFetch<PreguntaCms[]>({ query: PREGUNTAS_QUERY });
  if (!data?.length) return faqLocal;

  return data
    .filter((item) => item.pregunta && item.respuesta)
    .map((item) => ({ id: item._id, pregunta: item.pregunta!, respuesta: item.respuesta! }));
}
