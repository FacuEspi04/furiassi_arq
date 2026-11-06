import type { StructureResolver } from "sanity/structure";
import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { HelpCircleIcon } from "@sanity/icons/HelpCircle";
import { HomeIcon } from "@sanity/icons/Home";
import { ImagesIcon } from "@sanity/icons/Images";
import { StarIcon } from "@sanity/icons/Star";

/**
 * Menú lateral del panel, pensado para alguien que no es técnico: primero
 * lo que más se va a usar (artículos), después los contenidos de la home.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.documentTypeListItem("articulo")
        .title("Artículos")
        .icon(DocumentTextIcon),
      S.divider().title("Página de inicio"),
      S.listItem()
        .title("Portada (textos y foto principal)")
        .id("inicio")
        .icon(HomeIcon)
        .child(S.document().schemaType("inicio").documentId("inicio").title("Portada")),
      S.documentTypeListItem("obra").title("Obras").icon(ImagesIcon),
      S.documentTypeListItem("resena").title("Reseñas").icon(StarIcon),
      S.documentTypeListItem("preguntaFrecuente")
        .title("Preguntas frecuentes")
        .icon(HelpCircleIcon),
    ]);
