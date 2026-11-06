/**
 * Configuración de Sanity leída de variables de entorno.
 *
 * Si NEXT_PUBLIC_SANITY_PROJECT_ID no está seteada, `sanityConfigurado` es
 * false y toda la capa de datos (src/content/*) devuelve el contenido local
 * de siempre: el sitio buildea y funciona igual que antes de sumar el CMS.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2026-10-01";

export const sanityConfigurado = /^[a-z0-9-]+$/.test(projectId);

/** Ruta donde se monta el Studio (panel de administración). */
export const studioBasePath = "/admin";
