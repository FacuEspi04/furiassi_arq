import { site } from "@/content/site";
import { BrandMark } from "@/components/ui/BrandMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-logo">
          <span className="footer-logo-mark">
            <BrandMark />
          </span>
          {site.nombre}
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} · {site.direccion.localidad},{" "}
          {site.direccion.region} · Argentina
        </p>
        <nav className="footer-links" aria-label="Enlaces legales y redes">
          <a href={site.redes.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={site.redes.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="/aviso-legal">Aviso legal</a>
          <a href="/privacidad">Privacidad</a>
        </nav>
      </div>
    </footer>
  );
}
