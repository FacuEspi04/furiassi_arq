import type { Obra, Modalidad } from "@/types/content";

/**
 * TODO(cliente): el prototipo aprobado y el sitio en producción listan seis
 * obras con nombres, m² y años que NO COINCIDEN entre sí. Hasta que el
 * cliente confirme por escrito cuál lista (o cuáles fotos, vía Google Drive)
 * es la real, esta sección se publica con datos placeholder y
 * `pendienteConfirmacion: true` en vez de inventar o elegir una de las dos
 * listas contradictorias. Ver README > riesgos y supuestos.
 */
const localidadesReales = [
  "Maipú, Mendoza",
  "Godoy Cruz, Mendoza",
  "Luján de Cuyo, Mendoza",
  "Las Heras, Mendoza",
  "Guaymallén, Mendoza",
  "Chacras de Coria, Mendoza",
];

const modalidades: Modalidad[] = [
  "Llave en mano",
  "Por etapas",
  "Proyecto y dirección",
];

const obras: Obra[] = Array.from({ length: 6 }, (_, i) => ({
  slug: `obra-${i + 1}`,
  nombre: "Vivienda unifamiliar",
  localidad: localidadesReales[i],
  anio: 0,
  superficie: 0,
  modalidad: modalidades[i % modalidades.length],
  highlights: [],
  descripcion:
    "Ficha de obra en preparación: nombre, año, superficie y fotos pendientes de confirmación del cliente.",
  imagenes: [],
  destacada: i === 0,
  pendienteConfirmacion: true,
}));

export function getObras(): Obra[] {
  return obras;
}
