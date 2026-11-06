import { defineDocuments, defineLocations, type PresentationPluginOptions } from "sanity/presentation";

/**
 * Le dice al modo edición (Presentation) en qué página aparece cada
 * documento, para poder saltar de un artículo u obra a su vista previa.
 */
export const resolve: PresentationPluginOptions["resolve"] = {
  mainDocuments: defineDocuments([
    { route: "/", filter: `_type == "inicio" && _id == "inicio"` },
    { route: "/blog/:slug", filter: `_type == "articulo" && slug.current == $slug` },
  ]),
  locations: {
    inicio: defineLocations({
      message: "Se muestra en la portada",
      locations: [{ title: "Inicio", href: "/" }],
    }),
    obra: defineLocations({
      select: { title: "nombre" },
      resolve: () => ({ locations: [{ title: "Inicio · Obras", href: "/#obras" }] }),
    }),
    resena: defineLocations({
      select: { title: "nombre" },
      resolve: () => ({ locations: [{ title: "Inicio · Reseñas", href: "/#resenas" }] }),
    }),
    articulo: defineLocations({
      select: { title: "titulo", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          ...(doc?.slug ? [{ title: doc.title || "Artículo", href: `/blog/${doc.slug}` }] : []),
          { title: "Blog", href: "/blog" },
          { title: "Inicio · Artículos", href: "/#articulos" },
        ],
      }),
    }),
  },
};
