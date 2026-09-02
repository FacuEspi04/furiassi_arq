import { getFaq } from "@/content/faq";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { FaqAnalytics } from "@/components/marketing/FaqAnalytics";

export function Faq() {
  const faq = getFaq();

  return (
    <section id="faq" className="section-cream-2">
      <div className="container">
        <div className="faq-inner">
          <div className="faq-left">
            <h2 className="section-h2">
              Respondemos antes de que preguntes.
            </h2>
            <p className="faq-sub">
              Transparencia y claridad para que tomes decisiones con
              confianza. Si tu pregunta no está acá, hablemos.
            </p>
            <a
              href={buildWhatsappUrl("faq")}
              className="faq-cta-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar con el equipo
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <div className="faq-list">
            {faq.map((item, index) => (
              <details
                className="faq-item"
                key={item.id}
                data-faq-item={item.id}
                open={index === 0}
              >
                <summary className="faq-q">
                  {item.pregunta}
                  <span className="faq-q-icon" aria-hidden="true" />
                </summary>
                <div className="faq-a-inner">{item.respuesta}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <FaqAnalytics />
    </section>
  );
}
