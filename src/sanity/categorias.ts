/**
 * Categorías de los artículos. Vive separado del schema para que el front
 * pueda importarlo sin arrastrar el paquete `sanity` al bundle.
 */
export const CATEGORIAS_ARTICULO = [
  { title: "Lotes", value: "lotes" },
  { title: "Créditos", value: "creditos" },
  { title: "Construcción", value: "construccion" },
  { title: "Diseño", value: "diseno" },
  { title: "Sustentabilidad", value: "sustentabilidad" },
] as const;

export function getCategoriaLabel(value: string | undefined): string {
  return CATEGORIAS_ARTICULO.find((c) => c.value === value)?.title ?? "Artículo";
}
