/**
 * Webhook de Sanity: se dispara cada vez que se publica, edita o borra un
 * documento y marca como viejo todo el contenido cacheado del CMS. La
 * próxima visita ya ve la versión nueva, sin redeploy.
 *
 * Se configura en sanity.io/manage → API → Webhooks (ver README).
 */
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_TAG } from "@/sanity/live";

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Falta SANITY_REVALIDATE_SECRET" }, { status: 500 });
  }

  try {
    const { isValidSignature } = await parseBody(req, secret, true);
    if (!isValidSignature) {
      return NextResponse.json({ message: "Firma inválida" }, { status: 401 });
    }

    // expire: 0 → la próxima visita espera el contenido nuevo en vez de
    // recibir la versión vieja. Es un sitio de poco tráfico: preferimos que
    // Sebastián vea su cambio al recargar.
    revalidateTag(SANITY_TAG, { expire: 0 });
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error("[sanity] Error en el webhook de revalidación:", error);
    return NextResponse.json({ message: "Error procesando el webhook" }, { status: 500 });
  }
}
