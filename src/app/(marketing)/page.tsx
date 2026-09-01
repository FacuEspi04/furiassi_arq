import { Hero } from "@/components/marketing/Hero";
import { Diferenciales } from "@/components/marketing/Diferenciales";
import { Servicios } from "@/components/marketing/Servicios";
import { Modalidades } from "@/components/marketing/Modalidades";
import { EtapasTimeline } from "@/components/marketing/EtapasTimeline";
import { Sustentabilidad } from "@/components/marketing/Sustentabilidad";
import { Obras } from "@/components/marketing/Obras";
import { Estudio } from "@/components/marketing/Estudio";
import { Proceso } from "@/components/marketing/Proceso";
import { Resenas } from "@/components/marketing/Resenas";
import { Faq } from "@/components/marketing/Faq";
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
      <Modalidades />
      <EtapasTimeline />
      <Sustentabilidad />
      <Obras />
      <Estudio />
      <Proceso />
      <Resenas />
      <Faq />
      <Contacto />
    </>
  );
}
