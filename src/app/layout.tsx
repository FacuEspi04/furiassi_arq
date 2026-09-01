import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cormorantGaramond, outfit, dmMono } from "@/app/fonts";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Furiassi Arquitectos | Arquitectura residencial en Mendoza",
    template: `%s | ${site.nombre}`,
  },
  description: site.descripcionCorta,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.nombre,
    title: "Furiassi Arquitectos | Arquitectura residencial en Mendoza",
    description: site.descripcionCorta,
  },
  twitter: {
    card: "summary_large_image",
    title: "Furiassi Arquitectos | Arquitectura residencial en Mendoza",
    description: site.descripcionCorta,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1eb",
  width: "device-width",
  initialScale: 1,
};

// Reveal-on-scroll accesible: agrega la clase "js" a <html> de forma
// síncrona (script inline mínimo, no bloquea el render) para que
// .js .reveal solo oculte contenido cuando JS efectivamente corrió.
// Sin esto, o con JS deshabilitado, el contenido de .reveal es
// visible siempre (ver globals.css).
const revealScript = `document.documentElement.classList.add('js')`;

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      className={`${cormorantGaramond.variable} ${outfit.variable} ${dmMono.variable}`}
      // El script de reveal-on-scroll agrega la clase "js" antes de la
      // hidratación a propósito (ver revealScript abajo); sin esto React
      // reporta un hydration mismatch inofensivo en <html>.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
