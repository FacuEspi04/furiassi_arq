import { site } from "@/content/site";
import { getFaq } from "@/content/faq";
import { getServicios } from "@/content/servicios";

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organizacion`,
    name: site.nombre,
    alternateName: site.nombreGBP,
    description: site.descripcionCorta,
    image: `${site.url}/opengraph-image`,
    url: site.url,
    telephone: site.telefonoE164,
    email: site.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.direccion.calle}, ${site.direccion.complemento}`,
      addressLocality: site.direccion.localidad,
      addressRegion: site.direccion.region,
      postalCode: site.direccion.codigoPostal,
      addressCountry: site.direccion.pais,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.googleMapsDireccionesUrl,
    areaServed: site.zonaServicio.map((localidad) => ({
      "@type": "City",
      name: localidad,
    })),
    founder: {
      "@type": "Person",
      name: site.titular,
    },
    foundingDate: String(site.anioFundacion),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      site.redes.instagram,
      site.redes.facebook,
      site.googleMapsDireccionesUrl,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de arquitectura y construcción",
      itemListElement: getServicios().map((servicio) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: servicio.titulo,
          description: servicio.descripcion,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.resenas.ratingValue,
      reviewCount: site.resenas.reviewCount,
    },
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getFaq().map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: site.url,
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#sitio`,
    name: site.nombre,
    url: site.url,
    inLanguage: "es-AR",
  };
}

export function getHomeJsonLd() {
  return [
    getProfessionalServiceSchema(),
    getFaqSchema(),
    getBreadcrumbSchema(),
    getWebSiteSchema(),
  ];
}
