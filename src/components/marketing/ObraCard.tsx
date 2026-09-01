import type { Obra } from "@/types/content";

// TODO: cuando lleguen las fotos reales (Google Drive), reemplazar el
// <div className="obra-placeholder"> por <Image src={obra.imagenes[0].src}
// alt={obra.imagenes[0].alt} fill sizes="(max-width: 1024px) 100vw, 50vw" />
// dentro de .obra-media, manteniendo el aspect-ratio del contenedor.
export function ObraCard({ obra }: { obra: Obra }) {
  return (
    <article className="obra-card">
      <div className="obra-media">
        <div className="obra-placeholder" aria-hidden="true">
          <span className="obra-placeholder-icon">◈</span>
        </div>
      </div>
      <div className="obra-caption">
        <p className="obra-title">{obra.nombre}</p>
        <p className="obra-meta">
          <span>{obra.localidad}</span>
          {!obra.pendienteConfirmacion && (
            <>
              <span>{obra.anio}</span>
              <span>{obra.superficie} m²</span>
            </>
          )}
          <span>{obra.modalidad}</span>
        </p>
        {obra.pendienteConfirmacion && (
          <span className="obra-badge-pendiente">Ficha en preparación</span>
        )}
      </div>
    </article>
  );
}
