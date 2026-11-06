import { Hero } from "@/components/marketing/Hero";
import { Diferenciales } from "@/components/marketing/Diferenciales";
import { Servicios } from "@/components/marketing/Servicios";
import { Obras } from "@/components/marketing/Obras";
import { Resenas } from "@/components/marketing/Resenas";
import { Articulos } from "@/components/marketing/Articulos";
import { Contacto } from "@/components/marketing/Contacto";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomeJsonLd } from "@/lib/schema";
import { getInicio } from "@/content/cms/inicio";

export default async function Home() {
  const [inicio, jsonLd] = await Promise.all([getInicio(), getHomeJsonLd()]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero contenido={inicio} />
      <Diferenciales />
      <Servicios />
      <Obras />
      <Resenas />
      <Articulos />
      <Contacto />
    </>
  );
}
