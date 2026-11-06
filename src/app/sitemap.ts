import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getArticulosParaSitemap } from "@/content/cms/articulos";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const articulos = await getArticulosParaSitemap();
  const ultimaActualizacion = articulos.reduce<Date | null>((max, a) => {
    const fecha = new Date(a.actualizado);
    return !max || fecha > max ? fecha : max;
  }, null);

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/blog`,
      lastModified: ultimaActualizacion ?? now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...articulos.map((articulo) => ({
      url: `${site.url}/blog/${articulo.slug}`,
      lastModified: new Date(articulo.actualizado),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${site.url}/aviso-legal`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${site.url}/privacidad`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
