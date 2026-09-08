import type { Obra, Modalidad } from "@/types/content";

/**
 * TODO(cliente): el prototipo aprobado y el sitio en producción listan seis
 * obras con nombres, m² y años que NO COINCIDEN entre sí. Hasta que el
 * cliente confirme por escrito cuál lista (o cuáles fotos, vía Google Drive)
 * es la real, esta sección se publica con datos placeholder y
 * `pendienteConfirmacion: true` en vez de inventar o elegir una de las dos
 * listas contradictorias. Ver README > riesgos y supuestos.
 */
const obrasReales = [
  {
    localidad: "Bº Milcayac I, Luján de Cuyo",
    src: "/images/obras/b-milcayac-lujan-casamyf.jpg",
  },
  {
    localidad: "Bº La Vasconia, Coquimbito",
    src: "/images/obras/b-la-vasconia-coquimbito.jpg",
  },
  {
    localidad: "Bº Boedo Village, Luján de Cuyo",
    src: "/images/obras/b-boedo-village-lujan-casa-cm.png",
  },
  {
    localidad: "Bº Natania, Maipú",
    src: "/images/obras/b-natania-maipu-casamc.JPG",
  },
  {
    localidad: "Bº Rulcahue, Maipú",
    src: "/images/obras/b-rulcahue-maipu-casapyj.jpg",
  },
  {
    localidad: "Bº Terra Grappa, Coquimbito",
    src: "/images/obras/b-terra-grappa-coquimbito-casa-r.PNG",
  },
];

const modalidades: Modalidad[] = [
  "Llave en mano",
  "Por etapas",
  "Proyecto y dirección",
];

const obras: Obra[] = obrasReales.map((obra, i) => ({
  slug: `obra-${i + 1}`,
  nombre: "Vivienda unifamiliar",
  localidad: obra.localidad,
  anio: 0,
  superficie: 0,
  modalidad: modalidades[i % modalidades.length],
  highlights: [],
  descripcion:
    "Ficha de obra en preparación: nombre, año, superficie y fotos pendientes de confirmación del cliente.",
  imagenes: [
    {
      src: obra.src,
      alt: `Vivienda unifamiliar en ${obra.localidad} - Furiassi Arquitectos`,
    },
  ],
  destacada: i === 0,
  pendienteConfirmacion: true,
}));

export function getObras(): Obra[] {
  return obras;
}
