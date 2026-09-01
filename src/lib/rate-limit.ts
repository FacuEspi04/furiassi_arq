/**
 * Rate limit best-effort en memoria, por IP. Vive mientras vive la instancia
 * del server: en un despliegue serverless con múltiples instancias o cold
 * starts frecuentes, esto NO es un límite estricto. Suficiente para frenar
 * abuso trivial del formulario en esta fase; si el volumen de spam lo
 * justifica, reemplazar por Upstash Ratelimit (Redis) — ver README.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 3;

const hits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  return false;
}
