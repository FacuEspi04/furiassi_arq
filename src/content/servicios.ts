import type { Servicio } from "@/types/content";

const servicios: Servicio[] = [
  {
    id: "arquitectura-personalizada",
    titulo: "Arquitectura residencial personalizada",
    tagline: "Cada vivienda, pensada para vos.",
    descripcion:
      "Diseñamos tu hogar desde cero: planta, volumetría, materialidad y estética alineadas a tu forma de vivir. Sin planos tipo, sin soluciones genéricas.",
  },
  {
    id: "llave-en-mano",
    titulo: "Construcción llave en mano",
    tagline: "Vos elegís, nosotros construimos.",
    descripcion:
      "Materiales, mano de obra, cronograma y entrega. Un único equipo responsable desde el primer día hasta que recibís las llaves.",
    destacado: "principal",
  },
  {
    id: "por-etapas",
    titulo: "Construcción por etapas",
    tagline: "Tu casa, a tu ritmo.",
    descripcion:
      "Planificamos el proyecto completo y lo ejecutamos en fases. Cada etapa habitable y coherente con la siguiente, sin rehacer ni desperdiciar presupuesto.",
    destacado: "principal",
  },
  {
    id: "construccion-sustentable",
    titulo: "Construcción sustentable",
    tagline: "Menos consumo, más confort.",
    descripcion:
      "Orientación bioclimática, aislación eficiente y ventilación cruzada. Una vivienda que cuida el ambiente y reduce tus gastos de mantenimiento.",
    destacado: "sustentable",
  },
  {
    id: "direccion-de-obra",
    titulo: "Dirección y supervisión de obra",
    tagline: "Control técnico en cada etapa.",
    descripcion:
      "Supervisión profesional continua para que la obra avance en tiempo, en presupuesto y con los estándares acordados por escrito.",
  },
  {
    id: "documentacion-tecnica",
    titulo: "Documentación técnica y permisos",
    tagline: "Planos ejecutivos y gestión municipal.",
    descripcion:
      "Toda la documentación necesaria para construir: planos, memoria descriptiva, cómputos y gestión de permisos en Mendoza.",
  },
];

export function getServicios(): Servicio[] {
  return servicios;
}
