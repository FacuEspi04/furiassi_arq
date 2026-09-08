"use client";

import Image from "next/image";
import { site, heroImage } from "@/content/site";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { trackWhatsappClick } from "@/lib/analytics";
import { SecondaryLinkButton, PrimaryLinkButton } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-left">
        <p className="hero-kicker">Arquitectura residencial</p>

        <h1 className="hero-h1">
          Construimos tu proyecto.<em> Vos disfrutas el resultado.</em>
        </h1>

        <p className="hero-sub">
          Desde el diseño hasta la entrega llave en mano, nos ocupamos de planificar, controlar y ejecutar cada etapa, optimizando costos y tiempos, obteniendo eficientes resultados de obra.
        </p>
        <p className="hero-sub hero-sub--supporting">Garantía certificada · Asesoramiento para la obtención de Créditos. Profesionales con experiencia</p>

        <div className="hero-actions">
          <SecondaryLinkButton
            href={buildWhatsappUrl("heroPresupuesto")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp_hero_presupuesto"
            onClick={() => trackWhatsappClick("heroPresupuesto")}
          >
            Obtener presupuesto de obra
          </SecondaryLinkButton>
          <PrimaryLinkButton
            href={buildWhatsappUrl("heroPlanos")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp_hero_planos"
            onClick={() => trackWhatsappClick("heroPlanos")}
            withArrow={false}
          >
            Cotizar los planos de mi proyecto
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
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          quality={90}
          sizes="(max-width: 860px) 100vw, 50vw"
          className="hero-right-image"
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
