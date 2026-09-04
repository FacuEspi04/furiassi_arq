/**
 * Fuente única de verdad del NAP (Name, Address, Phone) y datos de contacto.
 * Nav, footer, JSON-LD y la sección de contacto leen todos de acá — no
 * hardcodear ninguno de estos valores en otro archivo.
 */
export const site = {
  nombre: "Furiassi Arquitectos",
  nombreGBP: "Furiassi Arquitectos | Empresa de construcción en Maipú, Mendoza",
  titular: "Arq. Sebastián Furiassi",
  descripcionCorta:
    "Estudio de arquitectura residencial y constructora en Mendoza. Diseño a medida, construcción llave en mano o por etapas, con foco en sustentabilidad y garantía escrita.",
  url: "https://furiassiarquitectos.com",
  telefono: "+54 9 261 366 9285",
  telefonoE164: "+5492613669285",
  // TODO: el cliente solo confirmó este email (@hotmail.com); pidió reemplazarlo
  // por uno con dominio propio pero no llegó a proveerlo. Ver README > riesgos.
  email: "arqsebastianfuriassi@hotmail.com",
  direccion: {
    calle: "Rawson 2600, 1° piso, of. 11",
    complemento: "Centro Empresarial El Torreón",
    localidad: "Maipú",
    region: "Mendoza",
    codigoPostal: "5515",
    pais: "AR",
  },
  // Coordenadas y CID confirmados por el cliente desde el Google Business Profile real.
  geo: {
    latitude: -34.7873176,
    longitude: -68.5310871,
  },
  googleBusinessProfileCid: "0x63fb1b563f9e6e41:0x18df1b59c82bcb2e",
  googleMapsDireccionesUrl: "https://maps.app.goo.gl/dTSrGi7NNz7xVEbNA",
  horario: {
    dias: "Lunes a viernes",
    horas: "09:00–18:00",
    nota: "Respuesta en máx. 2 hs hábiles",
  },
  zonaServicio: [
    "Maipú",
    "Godoy Cruz",
    "Luján de Cuyo",
    "Las Heras",
    "Guaymallén",
    "Ciudad de Mendoza",
    "Chacras de Coria",
  ],
  redes: {
    instagram: "https://www.instagram.com/furiassiarquitectos/",
    facebook: "https://www.facebook.com/profile.php?id=100075989480282",
  },
  experienciaAnios: 12,
  resenas: {
    ratingValue: 5.0,
    reviewCount: 48,
  },
  anioFundacion: 2013,
} as const;

/**
 * Mensajes de WhatsApp prellenados por sección de origen, para poder
 * identificar de dónde vino el lead con solo mirar el mensaje entrante.
 */
export const whatsapp = {
  numero: "5492613669285",
  mensajes: {
    nav: "Hola! Vi su web y quiero cotizar un proyecto.",
    heroPresupuesto: "Hola! Quiero obtener un presupuesto de obra para mi proyecto.",
    heroPlanos: "Hola! Quiero cotizar el diseño y los planos de mi proyecto.",
    etapas: "Hola! Quiero entender cómo funciona la construcción por etapas.",
    obras: "Hola! Vi las obras y quiero consultar por un proyecto similar.",
    faq: "Hola! Tengo una consulta que no encontré en las preguntas frecuentes.",
    footer: "Hola! Quiero coordinar una reunión de relevamiento.",
    fab: "Hola! Quiero coordinar una reunión de relevamiento.",
  },
} as const;

/**
 * Imagen real del panel derecho del Hero (anteproyecto residencial). Tipada
 * acá para que Hero.tsx no hardcodee el path ni el alt de la imagen LCP.
 */
export const heroImage = {
  src: "/images/hero/anteproyecto-hormigon-pileta.webp",
  alt: "Render de anteproyecto residencial de Furiassi Arquitectos: vivienda de hormigón visto con pileta, Mendoza",
} as const;

/**
 * Imagen del panel izquierdo de la sección "Sobre nosotros" (Estudio).
 * Tipada acá para que Estudio.tsx no hardcodee el path ni el alt.
 */
export const aboutImage = {
  src: "/images/nosotros/planos-obra.webp",
  alt: "Planos, casco y nivel sobre el hormigón: proceso de dirección técnica de Furiassi Arquitectos",
} as const;

export function getDireccionCompleta(): string {
  const { calle, localidad, region, pais } = site.direccion;
  return `${calle}, ${localidad}, ${region}, ${pais}`;
}
