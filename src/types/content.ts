export type Modalidad = "Llave en mano" | "Por etapas" | "Proyecto y dirección";

export type ImagenObra = {
  src: string;
  alt: string;
  width: number;
  height: number;
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
  | "heroReunion"
  | "heroPresupuesto"
  | "heroPlanos"
  | "nav"
  | "etapas"
  | "obras"
  | "faq"
  | "footer"
  | "fab";
