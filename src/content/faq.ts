import type { FaqItem } from "@/types/content";

const faq: FaqItem[] = [
  {
    id: "presupuesto",
    pregunta: "¿Cómo se define el presupuesto de mi proyecto?",
    respuesta:
      "Después de la reunión de relevamiento, armamos un anteproyecto con superficie, materialidad y modalidad de contratación definidas. Sobre esa base entregamos una propuesta de costos por escrito antes de firmar nada.",
  },
  {
    id: "reunion-inicial",
    pregunta: "¿Qué incluye la reunión inicial?",
    respuesta:
      "Relevamiento del terreno o la vivienda, tus objetivos y presupuesto orientativo, y lineamientos preliminares de diseño. No tiene costo ni compromiso.",
  },
  {
    id: "construccion-por-etapas",
    pregunta: "¿Cómo funciona la construcción por etapas?",
    respuesta:
      "Planificamos el proyecto completo desde el inicio pero lo ejecutamos en fases según tu disponibilidad de presupuesto. Cada etapa está pensada para que la siguiente encaje perfectamente: sin demoler, sin rehacer.",
  },
  {
    id: "garantia-calidad",
    pregunta: "¿Cómo se garantiza la calidad de la obra?",
    respuesta:
      "Con dirección técnica propia y controles por etapa antes de avanzar a la siguiente, y con una garantía escrita que se establece por contrato antes de empezar. Preferimos confirmar el alcance exacto por escrito con cada cliente antes de generalizarlo acá.",
  },
  {
    id: "alcance-garantia",
    pregunta: "¿Qué cubre la garantía y por cuánto tiempo?",
    respuesta:
      "El alcance y el plazo de garantía se detallan por escrito en el contrato de cada proyecto, según la modalidad de contratación. Lo conversamos en la primera reunión para que quede claro antes de avanzar.",
  },
  {
    id: "plazos",
    pregunta: "¿Cuáles son los plazos típicos de obra?",
    respuesta:
      "Depende de la superficie, la modalidad elegida y la complejidad del proyecto. Te damos un cronograma estimado en la propuesta inicial y lo actualizamos en cada etapa del proyecto ejecutivo.",
  },
  {
    id: "permisos",
    pregunta: "¿Gestionan los permisos municipales?",
    respuesta:
      "Sí. La documentación técnica, los cómputos y la gestión de permisos municipales en Mendoza están incluidos dentro del servicio de proyecto ejecutivo.",
  },
  {
    id: "sustentabilidad-costo",
    pregunta: "¿Qué implica construir sustentable y cuánto suma al costo?",
    respuesta:
      "Estrategias como orientación bioclimática, aislación correcta o ventilación cruzada se definen en el diseño y en general no representan un sobrecosto relevante. Sistemas activos (paneles solares, por ejemplo) sí tienen una inversión inicial adicional, que evaluamos caso a caso según tu presupuesto.",
  },
  {
    id: "actualizacion-costos",
    pregunta: "¿Cómo se maneja la actualización de costos durante la obra?",
    respuesta:
      "El presupuesto se define en la moneda y condiciones que se acuerdan por contrato, con el mecanismo de actualización explicitado por escrito antes de empezar. En la construcción por etapas esto es todavía más importante: cada etapa se cotiza y se acuerda antes de arrancarla, no de una vez para toda la obra.",
  },
  {
    id: "zona",
    pregunta: "¿Trabajan en Mendoza capital y en los departamentos del Gran Mendoza?",
    respuesta:
      "Sí. Trabajamos en Maipú, Godoy Cruz, Luján de Cuyo, Las Heras, Guaymallén, Chacras de Coria y Ciudad de Mendoza.",
  },
];

export function getFaq(): FaqItem[] {
  return faq;
}
