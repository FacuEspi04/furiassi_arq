import { defineArrayMember, defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons/Images";

export const obra = defineType({
  name: "obra",
  title: "Obra",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre de la obra",
      description: "Ej.: \"Casa MyF\" o \"Vivienda unifamiliar\".",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "localidad",
      title: "Barrio / localidad",
      description: "Ej.: \"Bº Milcayac I, Luján de Cuyo\". Es lo que se ve en la tarjeta.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "imagenes",
      title: "Fotos",
      description: "La primera es la que se muestra en la tarjeta. Arrastralas para cambiar el orden.",
      type: "array",
      of: [defineArrayMember({ type: "imagenConAlt" })],
      validation: (rule) => rule.required().min(1).error("Subí al menos una foto."),
    }),
    defineField({
      name: "anio",
      title: "Año",
      type: "number",
      validation: (rule) => rule.integer().min(1990).max(2100),
    }),
    defineField({
      name: "superficie",
      title: "Superficie (m²)",
      type: "number",
      validation: (rule) => rule.positive(),
    }),
    defineField({
      name: "modalidad",
      title: "Modalidad",
      type: "string",
      options: {
        list: ["Llave en mano", "Por etapas", "Proyecto y dirección"],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "destacada",
      title: "Destacada",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "pendienteConfirmacion",
      title: "Datos pendientes de confirmación",
      description:
        "Dejalo tildado mientras el nombre, el año o los m² no sean los reales. Destildalo cuando estén completos.",
      type: "boolean",
      initialValue: true,
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
    select: { title: "nombre", subtitle: "localidad", media: "imagenes.0" },
  },
});
