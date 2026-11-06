import Image from "next/image";
import type { Obra } from "@/types/content";

export function ObraCard({ obra }: { obra: Obra }) {
  const imagen = obra.imagenes[0];
  // Nombre, año y m² solo se muestran cuando el cliente confirmó que son
  // reales (en el panel: destildar "Datos pendientes de confirmación").
  const confirmada = !obra.pendienteConfirmacion;
  const meta = [
    obra.anio > 0 ? String(obra.anio) : null,
    obra.superficie > 0 ? `${obra.superficie} m²` : null,
  ].filter(Boolean);

  return (
    <article className="obra-card">
      <div className="obra-media">
        <Image
          src={imagen.src}
          alt={imagen.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="obra-image"
          style={imagen.objectPosition ? { objectPosition: imagen.objectPosition } : undefined}
        />
      </div>
      <div className="obra-caption">
        {confirmada && <p className="obra-name">{obra.nombre}</p>}
        <p className="obra-location">
          {obra.localidad}
          {confirmada && meta.length > 0 && <> · {meta.join(" · ")}</>}
        </p>
      </div>
    </article>
  );
}
