import { site } from "@/content/site";
import { Reveal } from "@/components/marketing/Reveal";
import { BrandMark } from "@/components/ui/BrandMark";

const valores = [
  "Diseño personalizado",
  "Construcción sustentable",
  "Calidad garantizada",
  "Dirección técnica propia",
  "Construcción por etapas",
  "Proceso transparente",
];

export function Estudio() {
  return (
    <section id="estudio" className="estudio-section">
      <div className="container">
        <div className="estudio-grid">
          <Reveal className="estudio-img-wrap">
            {/* TODO: reemplazar por <Image src="/estudio/sebastian-furiassi.jpg" ... />
                cuando llegue la foto real del arquitecto / obra. */}
            <div className="estudio-img-placeholder" aria-hidden="true">
              <BrandMark className="estudio-img-mark" />
            </div>
            <div className="estudio-stat-card">
              <p className="num">+{site.experienciaAnios}</p>
              <p className="label">Años de experiencia</p>
            </div>
          </Reveal>

          <div>
            <h2 className="section-h2">Arquitectura que refleja quién sos.</h2>

            <p className="estudio-p">
              Somos un estudio de arquitectura y construcción especializado
              en viviendas residenciales de alto valor en Mendoza, liderado
              por el {site.titular}. Con más de {site.experienciaAnios} años
              de experiencia, acompañamos a cada cliente desde la primera
              idea hasta la entrega de su hogar.
            </p>

            <p className="estudio-p">
              Creemos que una vivienda bien diseñada combina tres cosas:
              estética que inspira, construcción que dura y eficiencia que
              cuida tus recursos. Por eso cada proyecto es único y se
              ejecuta con dirección técnica propia en cada etapa.
            </p>

            <div className="estudio-valores">
              {valores.map((valor) => (
                <div className="valor-item" key={valor}>
                  <span className="valor-dot" aria-hidden="true" />
                  <span className="valor-text">{valor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
