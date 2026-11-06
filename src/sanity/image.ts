import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { stegaClean } from "next-sanity";
import { client } from "./client";
import type { ImagenObra } from "@/types/content";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto("format");
}

/** Forma de una imagen tal como llega del CMS (tipo `imagenConAlt`). */
export type ImagenCms = {
  asset?: { _ref?: string };
  hotspot?: { x?: number; y?: number };
  crop?: unknown;
  alt?: string;
  epigrafe?: string;
};

/** Lee el ancho y alto del id del asset: "image-<hash>-1200x800-jpg". */
function dimensiones(ref: string | undefined) {
  const match = ref?.match(/-(\d+)x(\d+)-[a-z0-9]+$/);
  return match ? { width: Number(match[1]), height: Number(match[2]) } : {};
}

/**
 * Convierte una imagen del CMS en el formato que usan los componentes
 * (`src` + `alt`). El recorte final lo hace next/image; acá solo se
 * limita el original a un ancho razonable.
 */
export function imagenDesdeCms(
  imagen: ImagenCms | null | undefined,
  altPorDefecto = ""
): ImagenObra | null {
  if (!imagen?.asset?._ref) return null;

  const { width, height } = dimensiones(imagen.asset._ref);
  const hotspot = imagen.hotspot;

  return {
    src: urlFor(imagen as SanityImageSource).width(2400).fit("max").url(),
    alt: stegaClean(imagen.alt) || altPorDefecto,
    width,
    height,
    objectPosition:
      hotspot?.x !== undefined && hotspot?.y !== undefined
        ? `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`
        : undefined,
  };
}
