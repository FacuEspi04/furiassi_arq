import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons/Home";

/** Documento único con los textos y la foto del Hero de la home. */
export const inicio = defineType({
  name: "inicio",
  title: "Inicio (portada)",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "kicker",
      title: "Texto chico sobre el título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titulo",
      title: "Título principal",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tituloEnfasis",
      title: "Continuación del título (en cursiva)",
      type: "string",
    }),
    defineField({
      name: "subtitulo",
      title: "Texto debajo del título",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "botonCreditos",
      title: "Botón de créditos",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "botonPresupuesto",
      title: "Botón de presupuesto",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "botonPlanos",
      title: "Botón de planos",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "imagen",
      title: "Foto principal",
      description: "Foto grande de la derecha. Si la dejás vacía se usa la actual.",
      type: "imagenConAlt",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Inicio (portada)" }),
  },
});
