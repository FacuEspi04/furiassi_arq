import { defineQuery } from "next-sanity";

const ARTICULO_CARD = `
  _id,
  titulo,
  "slug": slug.current,
  extracto,
  categoria,
  fechaPublicacion,
  portada
`;

export const ARTICULOS_QUERY = defineQuery(`
  *[_type == "articulo" && defined(slug.current)] | order(fechaPublicacion desc) {
    ${ARTICULO_CARD}
  }
`);

export const ARTICULOS_RECIENTES_QUERY = defineQuery(`
  *[_type == "articulo" && defined(slug.current)] | order(fechaPublicacion desc)[0...$limite] {
    ${ARTICULO_CARD}
  }
`);

export const ARTICULO_QUERY = defineQuery(`
  *[_type == "articulo" && slug.current == $slug][0] {
    ${ARTICULO_CARD},
    _updatedAt,
    cuerpo,
    ctaTexto,
    seoTitulo,
    seoDescripcion,
    "relacionados": *[
      _type == "articulo" && defined(slug.current) && slug.current != $slug
    ] | order(select(categoria == ^.categoria => 0, 1) asc, fechaPublicacion desc)[0...3] {
      ${ARTICULO_CARD}
    }
  }
`);

export const ARTICULOS_SITEMAP_QUERY = defineQuery(`
  *[_type == "articulo" && defined(slug.current)] { "slug": slug.current, _updatedAt }
`);

export const INICIO_QUERY = defineQuery(`
  *[_type == "inicio" && _id == "inicio"][0] {
    kicker, titulo, tituloEnfasis, subtitulo,
    botonCreditos, botonPresupuesto, botonPlanos,
    imagen
  }
`);

export const OBRAS_QUERY = defineQuery(`
  *[_type == "obra"] | order(orden asc, _createdAt asc) {
    _id, nombre, localidad, anio, superficie, modalidad, descripcion,
    destacada, pendienteConfirmacion, imagenes
  }
`);

export const PREGUNTAS_QUERY = defineQuery(`
  *[_type == "preguntaFrecuente"] | order(orden asc, _createdAt asc) { _id, pregunta, respuesta }
`);

export const RESENAS_QUERY = defineQuery(`
  *[_type == "resena"] | order(orden asc, _createdAt asc) { _id, nombre, texto, estrellas, destacada }
`);
