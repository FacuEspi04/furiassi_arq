import { defineField, defineType } from "sanity";
import { HelpCircleIcon } from "@sanity/icons/HelpCircle";

export const preguntaFrecuente = defineType({
  name: "preguntaFrecuente",
  title: "Pregunta frecuente",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "pregunta",
      title: "Pregunta",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "respuesta",
      title: "Respuesta",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
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
  preview: { select: { title: "pregunta" } },
});
