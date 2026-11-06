import Image from "next/image";
import { PortableText, type PortableTextComponents, type PortableTextBlock } from "next-sanity";
import { imagenDesdeCms, type ImagenCms } from "@/sanity/image";

function esLinkExterno(href: string) {
  return /^https?:\/\//.test(href) && !href.includes("furiassiarquitectos.com");
}

const components: PortableTextComponents = {
  types: {
    imagen: ({ value }: { value: ImagenCms }) => {
      const imagen = imagenDesdeCms(value);
      if (!imagen) return null;

      return (
        <figure className="articulo-figura">
          <Image
            src={imagen.src}
            alt={imagen.alt}
            width={imagen.width ?? 1600}
            height={imagen.height ?? 1000}
            sizes="(max-width: 860px) 100vw, 760px"
            className="articulo-figura-img"
          />
          {value.epigrafe && <figcaption>{value.epigrafe}</figcaption>}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      return esLinkExterno(href) ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

/** Texto del artículo tal como lo escribe Sebastián en el panel. */
export function ArticleBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="articulo-prosa">
      <PortableText value={value} components={components} />
    </div>
  );
}
