import type { Servicio } from "@/types/content";

// "Llave en mano" y "Por etapas" viven en la sección Modalidades, no acá
// — son formas de contratación, no servicios, y listarlas en las dos
// secciones era una duplicación real.
const servicios: Servicio[] = [
  {
    id: "arquitectura-personalizada",
    titulo: "Arquitectura residencial personalizada",
    tagline: "Cada vivienda, pensada para vos.",
    descripcion: "Sin planos tipo, sin soluciones genéricas — cada casa parte de cómo vivís.",
  },
  {
    id: "construccion-sustentable",
    titulo: "Construcción sustentable",
    tagline: "Menos consumo, más confort.",
    descripcion: "Orientación, aislación y ventilación pensadas desde el primer boceto.",
  },
  {
    id: "direccion-de-obra",
    titulo: "Dirección y supervisión de obra",
    tagline: "Control técnico en cada etapa.",
    descripcion: "Supervisión propia continua, con estándares acordados por escrito.",
  },
  {
    id: "documentacion-tecnica",
    titulo: "Documentación técnica y permisos",
    tagline: "Planos ejecutivos y gestión municipal.",
    descripcion: "Planos, cómputos y permisos municipales, gestionados de punta a punta.",
  },
];

export function getServicios(): Servicio[] {
  return servicios;
}
