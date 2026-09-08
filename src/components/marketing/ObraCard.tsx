import Image from "next/image";
import type { Obra } from "@/types/content";

export function ObraCard({ obra }: { obra: Obra }) {
  const imagen = obra.imagenes[0];

  return (
    <article className="obra-card">
      <div className="obra-media">
        <Image
          src={imagen.src}
          alt={imagen.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="obra-image"
        />
      </div>
      <div className="obra-caption">
        <p className="obra-location">{obra.localidad}</p>
      </div>
    </article>
  );
}
