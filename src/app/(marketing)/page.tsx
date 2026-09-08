import { Hero } from "@/components/marketing/Hero";
import { Diferenciales } from "@/components/marketing/Diferenciales";
import { Servicios } from "@/components/marketing/Servicios";
import { Obras } from "@/components/marketing/Obras";
import { Resenas } from "@/components/marketing/Resenas";
import { Contacto } from "@/components/marketing/Contacto";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomeJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={getHomeJsonLd()} />
      <Hero />
      <Diferenciales />
      <Servicios />
      <Obras />
      <Resenas />
      <Contacto />
    </>
  );
}
