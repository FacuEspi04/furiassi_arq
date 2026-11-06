"use client";

/**
 * Configuración del panel de administración (Sanity Studio), montado en
 * /admin por src/app/admin/[[...tool]]/page.tsx.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { esESLocale } from "@sanity/locale-es-es";

import { apiVersion, dataset, projectId, studioBasePath } from "./src/sanity/env";
import { schemaTypes, SINGLETONS } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { resolve } from "./src/sanity/presentation";

const singletons = new Set<string>(SINGLETONS);

export default defineConfig({
  name: "furiassi",
  title: "Furiassi Arquitectos",
  basePath: studioBasePath,
  projectId: projectId || "sin-configurar",
  dataset,
  plugins: [
    structureTool({ structure, title: "Contenido" }),
    presentationTool({
      title: "Ver y editar la página",
      resolve,
      previewUrl: {
        initial: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
    esESLocale(),
    // Consola de consultas GROQ: solo útil para desarrollo.
    ...(process.env.NODE_ENV === "development" ? [visionTool({ defaultApiVersion: apiVersion })] : []),
  ],
  schema: {
    types: schemaTypes,
    // La portada es un documento único: no aparece en "Crear nuevo".
    templates: (templates) => templates.filter(({ schemaType }) => !singletons.has(schemaType)),
  },
  document: {
    actions: (actions, { schemaType }) =>
      singletons.has(schemaType)
        ? actions.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : actions,
  },
});
