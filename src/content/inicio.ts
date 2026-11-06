import type { ContenidoInicio } from "@/types/content";
import { heroImage } from "./site";

/** Textos actuales del Hero: respaldo si el CMS no tiene la portada cargada. */
export const inicioLocal: ContenidoInicio = {
  kicker: "Arquitectura residencial",
  titulo: "Construimos tu proyecto.",
  tituloEnfasis: "Vos disfrutas el resultado.",
  subtitulo:
    "Desde el diseño hasta la entrega llave en mano, nos ocupamos de planificar, controlar y ejecutar cada etapa, optimizando costos y tiempos, obteniendo eficientes resultados de obra. Garantía certificada.",
  botonCreditos: "Asesoramiento para créditos hipotecarios y construcción",
  botonPresupuesto: "Obtener presupuesto de obra",
  botonPlanos: "Cotizar los planos de mi proyecto",
  imagen: { src: heroImage.src, alt: heroImage.alt },
};
