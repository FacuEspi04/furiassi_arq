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
 *
 * `soloPublicado: true` fija la consulta al contenido publicado y sin la
 * codificación del modo edición. Es obligatorio en lo que corre durante el
 * build sin request (generateStaticParams, sitemap): sin eso next-sanity
 * consulta `draftMode()` para decidir, y Next no lo permite ahí.
 */
export async function sanityFetch<T>(
  options: Pick<FetchOptions, "query" | "params"> & { soloPublicado?: boolean }
): Promise<T | null> {
  if (!sanityConfigurado) return null;

  const { soloPublicado, ...consulta } = options;

  try {
    const { data } = await live.sanityFetch({
      ...consulta,
      tags: [SANITY_TAG],
      ...(soloPublicado ? { perspective: "published" as const, stega: false } : {}),
    });
    return data as T;
  } catch (error) {
    // Una caída de Sanity no tiene que tirar abajo la landing: se loguea y
    // la capa de datos usa el contenido local como respaldo.
    console.error("[sanity] Error al consultar contenido:", error);
    return null;
  }
}
