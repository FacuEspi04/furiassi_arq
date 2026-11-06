/**
 * Configuración de la CLI de Sanity (`npx sanity ...`), por ejemplo para
 * `npx sanity schema deploy` o `npx sanity exec scripts/seed-sanity.ts`.
 */
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
});
