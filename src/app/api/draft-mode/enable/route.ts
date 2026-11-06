/**
 * Lo llama el modo edición del panel (/admin → "Ver y editar la página")
 * para activar draft mode. next-sanity valida un secreto de un solo uso
 * que genera el propio Studio, así que nadie puede activarlo desde afuera.
 */
import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/client";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
});
