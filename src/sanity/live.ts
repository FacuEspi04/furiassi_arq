import "server-only";
import { defineLive } from "next-sanity/live";
import { client } from "./client";
import { sanityConfigurado } from "./env";

const token = process.env.SANITY_API_READ_TOKEN;

/**
 * Tag común a todas las consultas. El webhook de Sanity
 * (/api/revalidate) lo invalida cada vez que se publica algo, así los
 * visitantes ven el cambio sin redeploy y sin cargar JS extra en el
 * navegador.
 */
export const SANITY_TAG = "sanity";

const live = defineLive({
  client,
  serverToken: token || false,
  browserToken: token || false,
});

/**
 * <SanityLive /> solo se monta en draft mode (ver el layout de marketing),
 * para que el modo edición se actualice en vivo mientras se escribe.
 */
export const SanityLive = live.SanityLive;

type FetchOptions = Parameters<typeof live.sanityFetch>[0];

/**
 * Wrapper de `sanityFetch`: suma el tag común y, si Sanity no está
 * configurado, devuelve `null` sin hacer ningún request.
 */
export async function sanityFetch<T>(
  options: Pick<FetchOptions, "query" | "params">
): Promise<T | null> {
  if (!sanityConfigurado) return null;

  try {
    const { data } = await live.sanityFetch({ ...options, tags: [SANITY_TAG] });
    return data as T;
  } catch (error) {
    // Una caída de Sanity no tiene que tirar abajo la landing: se loguea y
    // la capa de datos usa el contenido local como respaldo.
    console.error("[sanity] Error al consultar contenido:", error);
    return null;
  }
}
