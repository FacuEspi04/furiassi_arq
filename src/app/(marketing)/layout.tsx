import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { WhatsappFab } from "@/components/marketing/WhatsappFab";
import { WhatsappClickTracker } from "@/components/marketing/WhatsappClickTracker";
import { SanityLive } from "@/sanity/live";

// Red de seguridad: el contenido del CMS se actualiza al instante por el
// webhook (/api/revalidate), pero si Sanity no respondió durante un build,
// las páginas se regeneran solas como mucho una vez por hora.
export const revalidate = 3600;

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Modo edición: solo activo cuando Sebastián abre la página desde el
  // panel (/admin → "Ver y editar la página"). Los visitantes nunca cargan
  // este JS.
  const { isEnabled: modoEdicion } = await draftMode();

  return (
    <>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <WhatsappFab />
      <WhatsappClickTracker />
      {modoEdicion && (
        <>
          <SanityLive />
          <VisualEditing />
          <a href="/api/draft-mode/disable" className="modo-edicion-badge">
            Modo edición · Salir
          </a>
        </>
      )}
    </>
  );
}
