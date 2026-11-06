import { defineField, defineType } from "sanity";
import { StarIcon } from "@sanity/icons/Star";

/**
 * Reseña de un cliente. Copiar el texto tal como figura en Google: no se
 * deben inventar ni editar testimonios.
 */
export const resena = defineType({
  name: "resena",
  title: "Reseña",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre del cliente",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "texto",
      title: "Texto de la reseña",
      description: "Copialo tal como está en Google.",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "estrellas",
      title: "Estrellas",
      type: "number",
      initialValue: 5,
      options: { list: [1, 2, 3, 4, 5], layout: "radio", direction: "horizontal" },
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: "destacada",
      title: "Destacada",
      description: "La reseña destacada se muestra más grande.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "orden",
      title: "Orden",
      description: "Número más chico = aparece primero.",
      type: "number",
      initialValue: 100,
    }),
  ],
  orderings: [
    { title: "Orden en la página", name: "ordenAsc", by: [{ field: "orden", direction: "asc" }] },
  ],
  preview: {
    select: { title: "nombre", subtitle: "texto" },
  },
});
