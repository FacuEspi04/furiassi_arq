import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Texto enriquecido del artículo: párrafos, subtítulos, listas, links,
 * citas y fotos intercaladas. No se ofrece H1 a propósito: el título del
 * artículo ya es el H1 de la página.
 */
export const cuerpoArticulo = defineType({
  name: "cuerpoArticulo",
  title: "Texto del artículo",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Párrafo", value: "normal" },
        { title: "Subtítulo", value: "h2" },
        { title: "Subtítulo chico", value: "h3" },
        { title: "Cita destacada", value: "blockquote" },
      ],
      lists: [
        { title: "Viñetas", value: "bullet" },
        { title: "Numerada", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Negrita", value: "strong" },
          { title: "Cursiva", value: "em" },
        ],
        annotations: [
          defineArrayMember({
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "Dirección (URL)",
                type: "url",
                validation: (rule) =>
                  rule.uri({ scheme: ["http", "https", "mailto", "tel"], allowRelative: true }),
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      name: "imagen",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Descripción de la foto (texto alternativo)",
          description: "Contá en una frase qué se ve en la foto. Ayuda al posicionamiento en Google.",
          type: "string",
          validation: (rule) => rule.required().error("Escribí una descripción de la foto."),
        }),
        defineField({
          name: "epigrafe",
          title: "Epígrafe (opcional)",
          description: "Texto chico que aparece debajo de la foto.",
          type: "string",
        }),
      ],
    }),
  ],
});
