import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityConfigurado, studioBasePath } from "./env";

export const client = createClient({
  // "sin-configurar" nunca se consulta: la capa de datos chequea
  // `sanityConfigurado` antes de hacer cualquier fetch.
  projectId: sanityConfigurado ? projectId : "sin-configurar",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: {
    // Solo se activa en draft mode (ver live.ts): codifica en los textos
    // la referencia al documento para que el modo edición los haga
    // clickeables.
    studioUrl: studioBasePath,
  },
});
