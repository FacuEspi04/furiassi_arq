import type { SchemaTypeDefinition } from "sanity";
import { imagenConAlt } from "./imagenConAlt";
import { cuerpoArticulo } from "./cuerpoArticulo";
import { articulo } from "./articulo";
import { inicio } from "./inicio";
import { obra } from "./obra";
import { preguntaFrecuente } from "./preguntaFrecuente";
import { resena } from "./resena";

export const schemaTypes: SchemaTypeDefinition[] = [
  imagenConAlt,
  cuerpoArticulo,
  articulo,
  inicio,
  obra,
  preguntaFrecuente,
  resena,
];

/** Documentos únicos: no se pueden crear, duplicar ni borrar desde el panel. */
export const SINGLETONS = ["inicio"] as const;
