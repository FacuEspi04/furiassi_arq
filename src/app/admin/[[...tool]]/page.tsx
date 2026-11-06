/**
 * Panel de administración (Sanity Studio). Sebastián entra acá con su
 * usuario de Sanity (Google o email) para escribir artículos y editar los
 * contenidos de la home.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { sanityConfigurado } from "@/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function AdminPage() {
  if (!sanityConfigurado) {
    return (
      <main style={{ padding: "64px 24px", maxWidth: 640, margin: "0 auto", fontFamily: "system-ui" }}>
        <h1>Panel sin configurar</h1>
        <p>
          Falta la variable de entorno <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>. Ver el README,
          sección &ldquo;Panel de contenidos (Sanity)&rdquo;.
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
