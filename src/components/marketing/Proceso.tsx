const pasos = [
  {
    numero: "1",
    titulo: "Reunión de relevamiento",
    texto:
      "Escuchamos tu idea, el terreno o la vivienda, tu presupuesto orientativo y tus objetivos de diseño. Sin costo ni compromiso.",
  },
  {
    numero: "2",
    titulo: "Anteproyecto y propuesta",
    texto:
      "Diseño preliminar con foco en funcionalidad, estética y sustentabilidad, más una propuesta de tiempos y costos por escrito.",
  },
  {
    numero: "3",
    titulo: "Proyecto ejecutivo y permisos",
    texto:
      "Planos definitivos, documentación técnica, cómputos y gestión de permisos municipales en Mendoza.",
  },
  {
    numero: "4",
    titulo: "Obra con dirección técnica",
    texto:
      "Ejecución con supervisión propia continua, llave en mano o por etapas, con controles antes de avanzar a cada fase.",
  },
  {
    numero: "5",
    titulo: "Entrega y garantía",
    texto:
      "Entrega formal de la vivienda o la etapa, con garantía escrita según lo acordado por contrato.",
  },
];

export function Proceso() {
  return (
    <section className="proceso">
      <div className="container">
        <div className="proceso-header">
          <h2 className="section-h2">
            Un método claro para avanzar sin incertidumbre.
          </h2>
          <p className="proceso-sub">
            Cada proyecto sigue el mismo flujo ordenado. Vos sabés en qué
            etapa estás y qué viene después.
          </p>
        </div>

        <div className="proceso-steps">
          {pasos.map((paso) => (
            <div className="proceso-step" key={paso.numero}>
              <div className="proceso-step-num" aria-hidden="true">
                {paso.numero}
              </div>
              <h3 className="proceso-step-h3">{paso.titulo}</h3>
              <p className="proceso-step-p">{paso.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
