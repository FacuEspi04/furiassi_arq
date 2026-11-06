"use client";

import Image from "next/image";
import { site } from "@/content/site";
import type { ContenidoInicio } from "@/types/content";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { trackWhatsappClick } from "@/lib/analytics";
import { SecondaryLinkButton, PrimaryLinkButton } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";

export function Hero({ contenido }: { contenido: ContenidoInicio }) {
  const { imagen } = contenido;

  return (
    <section id="inicio" className="hero">
      <div className="hero-left">
        <p className="hero-kicker">{contenido.kicker}</p>

        <h1 className="hero-h1">
          {contenido.titulo}
          {contenido.tituloEnfasis && <em> {contenido.tituloEnfasis}</em>}
        </h1>

        <p className="hero-sub">{contenido.subtitulo}</p>
        
        <PrimaryLinkButton
          href={buildWhatsappUrl("heroCreditos")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-creditos"
          data-cta="whatsapp_hero_creditos"
          onClick={() => trackWhatsappClick("heroCreditos")}
          withArrow={false}
        >
          {contenido.botonCreditos}
        </PrimaryLinkButton>

        <div className="hero-actions">
          <SecondaryLinkButton
            href={buildWhatsappUrl("heroPresupuesto")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp_hero_presupuesto"
            onClick={() => trackWhatsappClick("heroPresupuesto")}
          >
            {contenido.botonPresupuesto}
          </SecondaryLinkButton>
          <PrimaryLinkButton
            href={buildWhatsappUrl("heroPlanos")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp_hero_planos"
            onClick={() => trackWhatsappClick("heroPlanos")}
            withArrow={false}
          >
            {contenido.botonPlanos}
          </PrimaryLinkButton>
        </div>
        <a href="#obras" className="text-link">Ver obras</a>

        <div className="hero-stats">
          <div>
            <p className="stat-num">+{site.experienciaAnios}</p>
            <p className="stat-label">Años de experiencia</p>
          </div>
          <div>
            <p className="stat-num">{site.resenas.ratingValue.toFixed(1)}</p>
            <p className="stat-label">
              Calificación · {site.resenas.reviewCount} reseñas
            </p>
          </div>
          <div>
            <p className="stat-num">{site.zonaServicio.length}</p>
            <p className="stat-label">Localidades en el Gran Mendoza</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <Image
          src={imagen.src}
          alt={imagen.alt}
          fill
          priority
          quality={90}
          sizes="(max-width: 860px) 100vw, 50vw"
          className="hero-right-image"
          style={imagen.objectPosition ? { objectPosition: imagen.objectPosition } : undefined}
        />
        <div className="hero-right-overlay" aria-hidden="true" />
        <div className="hero-right-overlay-edge" aria-hidden="true" />
        <div className="hero-right-mark" aria-hidden="true">
          <BrandMark className="hero-right-mark-svg" />
        </div>
      </div>
    </section>
  );
}
