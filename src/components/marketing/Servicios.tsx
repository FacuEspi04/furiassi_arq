import { getServicios } from "@/content/servicios";
import { Reveal } from "@/components/marketing/Reveal";

export function Servicios() {
  const servicios = getServicios();

  return (
    <section id="servicios" className="section-cream">
      <div className="container">
        <Reveal className="section-header">
          <p className="section-eyebrow">Servicios</p>
          <h2 className="section-h2">
            Diseñamos y construimos tu vivienda, de principio a fin.
          </h2>
          <p className="section-sub">
            Desde el anteproyecto hasta la entrega. Cada servicio pensado
            para que tu proyecto avance con claridad, sin sorpresas.
          </p>
        </Reveal>

        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <div className="servicio-card" key={servicio.id}>
              <h3 className="servicio-h3">{servicio.titulo}</h3>
              <p className="servicio-tagline">{servicio.tagline}</p>
              <p className="servicio-p">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
