import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { CATEGORIAS_ARTICULO } from "../categorias";


export const articulo = defineType({
  name: "articulo",
  title: "Artículo",
  type: "document",
  icon: DocumentTextIcon,
  groups: [
    { name: "contenido", title: "Contenido", default: true },
    { name: "seo", title: "Google (opcional)" },
  ],
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      description:
        "Lo que la gente buscaría en Google. Ej.: \"Asesoría en la compra de lotes en Mendoza: qué revisar antes de firmar\".",
      type: "string",
      group: "contenido",
      validation: (rule) => [
        rule.required().error("El artículo necesita un título."),
        rule.max(90).warning("Títulos de más de 90 caracteres se cortan en Google."),
      ],
    }),
    defineField({
      name: "slug",
      title: "Dirección del artículo",
      description:
        "Se genera sola desde el título con el botón \"Generate\". Es la parte final de la dirección: furiassiarquitectos.com/blog/…",
      type: "slug",
      group: "contenido",
      options: { source: "titulo", maxLength: 80 },
      validation: (rule) => rule.required().error("Generá la dirección del artículo."),
    }),
    defineField({
      name: "extracto",
      title: "Resumen corto",
      description:
        "1 o 2 líneas. Se muestra en la tarjeta del artículo y debajo del título en Google.",
      type: "text",
      rows: 3,
      group: "contenido",
      validation: (rule) => [
        rule.required().error("Escribí un resumen corto."),
        rule.max(170).warning("Google muestra unos 160 caracteres; lo demás se corta."),
      ],
    }),
    defineField({
      name: "portada",
      title: "Foto de portada",
      type: "imagenConAlt",
      group: "contenido",
      validation: (rule) => rule.required().error("Subí una foto de portada."),
    }),
    defineField({
      name: "categoria",
      title: "Categoría",
      type: "string",
      group: "contenido",
      options: { list: [...CATEGORIAS_ARTICULO], layout: "radio" },
      validation: (rule) => rule.required().error("Elegí una categoría."),
    }),
    defineField({
      name: "fechaPublicacion",
      title: "Fecha de publicación",
      type: "datetime",
      group: "contenido",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cuerpo",
      title: "Texto del artículo",
      description:
        "Usá \"Subtítulo\" para dividir el texto en partes: ayuda a leerlo y a Google. Podés insertar fotos con el botón +.",
      type: "cuerpoArticulo",
      group: "contenido",
      validation: (rule) => rule.required().error("El artículo no tiene texto."),
    }),
    defineField({
      name: "ctaTexto",
      title: "Texto del llamado a la acción (opcional)",
      description:
        "Frase de la caja final con el botón de WhatsApp. Ej.: \"¿Vas a comprar un lote? Consultanos antes de firmar\". Si lo dejás vacío se usa uno general.",
      type: "string",
      group: "contenido",
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: "seoTitulo",
      title: "Título para Google",
      description: "Solo si querés que en Google aparezca un título distinto al del artículo.",
      type: "string",
      group: "seo",
      validation: (rule) => rule.max(65).warning("Google muestra unos 60 caracteres."),
    }),
    defineField({
      name: "seoDescripcion",
      title: "Descripción para Google",
      description: "Si lo dejás vacío se usa el resumen corto.",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (rule) => rule.max(170).warning("Google muestra unos 160 caracteres."),
    }),
  ],
  orderings: [
    {
      title: "Más recientes primero",
      name: "fechaDesc",
      by: [{ field: "fechaPublicacion", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "titulo", subtitle: "categoria", media: "portada" },
    prepare({ title, subtitle, media }) {
      const categoria = CATEGORIAS_ARTICULO.find((c) => c.value === subtitle)?.title;
      return { title, subtitle: categoria, media };
    },
  },
});
