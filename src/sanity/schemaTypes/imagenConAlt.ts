import { defineField, defineType } from "sanity";

/**
 * Imagen con texto alternativo obligatorio. El alt describe la foto para
 * lectores de pantalla y para Google Imágenes, así que se exige siempre.
 */
export const imagenConAlt = defineType({
  name: "imagenConAlt",
  title: "Imagen",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Descripción de la foto (texto alternativo)",
      description:
        "Contá en una frase qué se ve en la foto. Ej.: \"Fachada de vivienda de hormigón visto con pileta en Luján de Cuyo\". Ayuda al posicionamiento en Google.",
      type: "string",
      validation: (rule) =>
        rule.required().error("Escribí una descripción de la foto."),
    }),
  ],
});
