/**
 * Migración inicial: sube a Sanity el contenido que hoy está en el código
 * (textos del Hero, obras con sus fotos, reseñas y preguntas frecuentes),
 * para que el panel arranque con lo mismo que se ve en la web.
 *
 * Uso (una sola vez, con la sesión de la CLI de Sanity iniciada):
 *
 *   npx sanity login
 *   npx sanity exec scripts/seed-sanity.ts --with-user-token
 *
 * Usa `createIfNotExists` con ids fijos: correrlo de nuevo no duplica ni
 * pisa lo que Sebastián ya haya editado.
 */
import { createReadStream } from "node:fs";
import { basename, join } from "node:path";
import { getCliClient } from "sanity/cli";

import { obrasLocales } from "../src/content/obras";
import { faqLocal } from "../src/content/faq";
import { inicioLocal } from "../src/content/inicio";
import { testimonials } from "../src/content/site";

const client = getCliClient({ apiVersion: "2026-10-01" });

async function subirImagen(rutaPublica: string, alt: string) {
  const archivo = join(process.cwd(), "public", rutaPublica);
  const asset = await client.assets.upload("image", createReadStream(archivo), {
    filename: basename(archivo),
  });
  return {
    _type: "imagenConAlt",
    asset: { _type: "reference", _ref: asset._id },
    alt,
  };
}

async function main() {
  console.log("→ Portada");
  await client.createIfNotExists({
    _id: "inicio",
    _type: "inicio",
    kicker: inicioLocal.kicker,
    titulo: inicioLocal.titulo,
    tituloEnfasis: inicioLocal.tituloEnfasis,
    subtitulo: inicioLocal.subtitulo,
    botonCreditos: inicioLocal.botonCreditos,
    botonPresupuesto: inicioLocal.botonPresupuesto,
    botonPlanos: inicioLocal.botonPlanos,
    imagen: await subirImagen(inicioLocal.imagen.src, inicioLocal.imagen.alt),
  });

  for (const [i, obra] of obrasLocales.entries()) {
    console.log(`→ Obra ${i + 1}: ${obra.localidad}`);
    const imagenes = [];
    for (const imagen of obra.imagenes) {
      imagenes.push({ ...(await subirImagen(imagen.src, imagen.alt)), _key: `img${imagenes.length}` });
    }
    await client.createIfNotExists({
      _id: `obra-${i + 1}`,
      _type: "obra",
      nombre: obra.nombre,
      localidad: obra.localidad,
      modalidad: obra.modalidad,
      descripcion: obra.descripcion,
      destacada: obra.destacada ?? false,
      pendienteConfirmacion: obra.pendienteConfirmacion ?? true,
      orden: (i + 1) * 10,
      imagenes,
      ...(obra.anio ? { anio: obra.anio } : {}),
      ...(obra.superficie ? { superficie: obra.superficie } : {}),
    });
  }

  console.log("→ Reseñas");
  for (const [i, resena] of testimonials.entries()) {
    await client.createIfNotExists({
      _id: `resena-${resena.id}`,
      _type: "resena",
      nombre: resena.name,
      texto: resena.text,
      estrellas: resena.rating,
      destacada: resena.featured,
      orden: (i + 1) * 10,
    });
  }

  console.log("→ Preguntas frecuentes");
  for (const [i, item] of faqLocal.entries()) {
    await client.createIfNotExists({
      _id: `faq-${item.id}`,
      _type: "preguntaFrecuente",
      pregunta: item.pregunta,
      respuesta: item.respuesta,
      orden: (i + 1) * 10,
    });
  }

  console.log("✓ Listo. Entrá a /admin para ver el contenido.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
