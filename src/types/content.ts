export type Modalidad = "Llave en mano" | "Por etapas" | "Proyecto y dirección";

export type ImagenObra = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** `object-position` CSS derivado del punto de interés marcado en el CMS. */
  objectPosition?: string;
};

/** Textos y foto del Hero, editables desde el panel (documento "inicio"). */
export type ContenidoInicio = {
  kicker: string;
  titulo: string;
  tituloEnfasis?: string;
  subtitulo: string;
  botonCreditos: string;
  botonPresupuesto: string;
  botonPlanos: string;
  imagen: ImagenObra;
};

export type Testimonio = {
  id: string;
  name: string;
  rating: number;
  text: string;
  featured: boolean;
};

export type ArticuloResumen = {
  id: string;
  titulo: string;
  slug: string;
  extracto: string;
  categoria: string;
  categoriaLabel: string;
  /** ISO 8601 */
  fechaPublicacion: string;
  portada: ImagenObra | null;
};

export type Obra = {
  slug: string;
  nombre: string;
  localidad: string;
  anio: number;
  superficie: number;
  modalidad: Modalidad;
  highlights: string[];
  descripcion: string;
  imagenes: ImagenObra[];
  destacada?: boolean;
  /**
   * true cuando nombre/año/m² son placeholders: el cliente todavía no
   * confirmó cuál de las dos listas de obras existentes es la real (ver
   * README > riesgos). La UI no debe mostrar año/m² como si fueran datos
   * reales mientras esto sea true.
   */
  pendienteConfirmacion?: boolean;
};

export type Servicio = {
  id: string;
  titulo: string;
  tagline: string;
  descripcion: string;
  destacado?: "sustentable";
};

export type FaqItem = {
  id: string;
  pregunta: string;
  respuesta: string;
};

export type Resena = {
  id: string;
  texto: string;
  autor: string;
  localidad: string;
  anio: number;
  rating: number;
};

export type WhatsappOrigen =
  | "heroPresupuesto"
  | "heroPlanos"
  | "heroCreditos"
  | "nav"
  | "etapas"
  | "obras"
  | "faq"
  | "footer"
  | "gracias"
  | "blog"
  | "fab";
