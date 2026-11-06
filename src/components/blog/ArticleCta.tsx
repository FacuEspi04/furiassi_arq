import Link from "next/link";
import { PrimaryLinkButton } from "@/components/ui/Button";
import { buildWhatsappMessageUrl } from "@/lib/whatsapp";
import { whatsapp } from "@/content/site";

/**
 * Caja final de cada artículo: es lo que convierte al lector que llegó
 * desde Google en una consulta. El mensaje de WhatsApp incluye el título
 * del artículo para saber de dónde vino el contacto.
 */
export function ArticleCta({ titulo, texto }: { titulo: string; texto?: string }) {
  const mensaje = `${whatsapp.mensajes.blog} (Artículo: "${titulo}")`;

  return (
    <aside className="articulo-cta" aria-label="Contacto">
      <p className="section-eyebrow section-eyebrow--light">Hablemos</p>
      <p className="articulo-cta-title">
        {texto || "¿Querés que te asesoremos en tu proyecto? Escribinos y lo charlamos."}
      </p>
      <div className="articulo-cta-actions">
        <PrimaryLinkButton
          href={buildWhatsappMessageUrl(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          data-whatsapp-origen="blog"
          className="articulo-cta-btn"
        >
          Consultar por WhatsApp
        </PrimaryLinkButton>
        <Link href="/#contacto" className="btn-ghost btn-ghost--light">
          O dejanos tus datos
        </Link>
      </div>
    </aside>
  );
}
