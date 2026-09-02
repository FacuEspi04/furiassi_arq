# Furiassi Arquitectos — landing

Landing pública de Furiassi Arquitectos (Mendoza, Argentina), construida en Next.js 16 (App Router) sobre el prototipo aprobado `referencia.html`. 100% estática (SSG), preparada para que las fases de admin y portal de clientes se sumen sin reescribir estos componentes.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

## Variables de entorno

Copiar `.env.example` a `.env.local` y completar:

| Variable | Para qué |
|---|---|
| `RESEND_API_KEY` | Envío de emails del formulario de contacto (resend.com). Sin esto, el formulario muestra un error visible en vez de fallar en silencio. |
| `RESEND_FROM_EMAIL` | Remitente verificado en Resend. Mientras no haya un dominio propio verificado, usa el remitente de pruebas `onboarding@resend.dev`. |

## Dónde editar cada contenido

Todo el contenido vive en `src/content/` y se consume a través de funciones (`getObras()`, `getFaq()`, etc.), nunca importando los arrays directamente — así, cuando el panel de admin (fase 2) mueva esto a una base de datos, solo cambia la implementación de esas funciones, no los componentes.

| Qué | Archivo |
|---|---|
| NAP (nombre, dirección, teléfono, geo, horarios, redes) | `src/content/site.ts` — **única fuente de verdad**; nav, footer, JSON-LD y contacto leen de acá |
| Obras / portfolio | `src/content/obras.ts` — hoy con datos placeholder, ver "Riesgos" |
| Servicios | `src/content/servicios.ts` |
| Preguntas frecuentes | `src/content/faq.ts` |
| Reseñas individuales | `src/content/resenas.ts` — vacío a propósito, ver "Riesgos" |
| Tokens de diseño (paleta, tipografía) | `styles/tokens.css` |
| Fuentes self-hosted | `src/app/fonts/index.ts` + los `.woff2` en `src/app/fonts/` |
| Isotipo / marca ("F") | `src/components/ui/BrandMark.tsx` (SVG inline, se usa en nav y como marca de agua en Hero/Estudio/Contacto) + `public/mark.svg`. Favicons por convención de archivo: `src/app/icon.png` y `src/app/apple-icon.png`. Variantes PNG exportadas (fondo transparente, espresso/blanco) en `public/brand/` por si se necesitan fuera de la web (impresos, firma de email, etc.). |

## First Load JS de `/` — medido, no estimado

**≈ 181 KB gzip**, contra el presupuesto de 120 KB de la sección 3 del brief. No se llegó al número, y vale explicar por qué en vez de disimularlo:

- Se detectó y corrigió un problema real: `ContactForm.tsx` importaba el schema de Zod directamente desde `lib/validation.ts`, y aunque solo se usaba `modalidadInteres` (un array de strings), la importación arrastraba **toda la librería Zod (~85 KB gzip)** al bundle del cliente porque el resto del módulo no era tree-shakeable con seguridad. Se aisló `modalidadInteres` en `lib/modalidad-interes.ts` (sin `zod`) y la validación completa quedó exclusivamente en el Server Action — gratis en el cliente. Esto solo bajó el total de 263 KB a 181 KB.
- Se intentó reducir el polyfill bundle (~39 KB gzip, con `core-js` detectado) agregando un `browserslist` en `package.json` apuntando solo a navegadores modernos evergreen. **No tuvo efecto medible** en este build de Turbopack — no está claro si Turbopack en Next 16 todavía no respeta `browserslist` para esto, o si ese chunk no es realmente el polyfill legacy que parece. Se dejó el `browserslist` igual, porque es correcto tenerlo y no cuesta nada.
- El resto (~140 KB gzip) es, por lo que se pudo inspeccionar en los chunks generados, mayormente runtime de React 19 + Next 16 App Router (hidratación, router, plumbing de Server Actions vía `useActionState`) — el costo base de cualquier página de App Router con interactividad real (menú mobile, formulario, FAQ analytics, reveal on scroll), no código de la aplicación en sí.
- Si en el futuro se quiere apretar más este número, las palancas con mayor impacto real serían: sacar `@vercel/speed-insights` (deja solo Analytics), evaluar si Next 16 gana soporte más completo de `browserslist` en Turbopack en una versión posterior, o — el cambio más drástico — reconsiderar si todas las piezas interactivas actuales (analytics por sección, reveal-on-scroll) valen su costo en KB para esta landing.

El resto del presupuesto de performance (Lighthouse, LCP, CLS, peso total <1 MB) no se midió con Lighthouse real en este entorno — recomendado correrlo contra el deploy de Vercel antes de dar por cerrada la fase.

## Sección 9 del brief — preparación para fases futuras (documentada, no implementada)

- **Fase 2 (admin)**: route group `(admin)` bajo `/admin`, layout propio. Cuando `getObras()` / `getFaq()` etc. pasen a leer de una base de datos, ningún componente de `src/components/marketing` debería tocarse — ya reciben los datos vía esas funciones, no vía imports directos de los arrays.
- **Fase 3 (portal de clientes)**: route group `(portal)` bajo `/portal`.
- **Auth recomendada**: Auth.js v5 con adaptador de base de datos (o Clerk si se prioriza velocidad). Roles `ADMIN`/`CLIENTE` en el token, autorización en middleware **y** revalidada en cada Server Action.
- **Base de datos recomendada**: Postgres (Neon o Supabase) con Prisma o Drizzle.
- **Archivos**: Vercel Blob o S3 para fotos de obra y documentación de clientes.
- Nada de esto está instalado ni scaffoldeado — son decisiones documentadas para cuando llegue el momento, tal como pidió el brief.

## Checklist de puesta en producción

- [ ] Confirmar y cargar las fichas de obra reales (ver Riesgos) en `src/content/obras.ts`, quitando `pendienteConfirmacion: true`.
- [ ] Cargar el texto real de al menos 3–6 reseñas en `src/content/resenas.ts`.
- [ ] Conseguir `RESEND_API_KEY` y un dominio de envío verificado; setear ambas env vars en Vercel.
- [ ] Verificar/activar el Google Business Profile (nombre, categoría, fotos, horario) y confirmar que coincide con `content/site.ts`.
- [ ] Dominio `furiassiarquitectos.com` apuntando al deploy de Vercel; redirect 301 desde `www` y desde el `.vercel.app`.
- [ ] Validar los 4 JSON-LD en [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
- [ ] Enviar el sitemap en Google Search Console.
- [ ] Correr Lighthouse mobile real contra el deploy y comparar con los umbrales de la sección 3.
- [ ] Reemplazar los placeholders de imagen (hero, obras, foto del arquitecto) por los archivos reales — cada lugar tiene un comentario `// TODO` marcando exactamente qué componente de `next/image` va ahí.
- [ ] Revisión legal de `/aviso-legal` y `/privacidad` (hoy son borradores estructurales).

## Riesgos y supuestos — qué se inventó o asumió y necesita validación del cliente

1. **Email de contacto**: se mantuvo `arqsebastianfuriassi@hotmail.com` porque es el único dato provisto; el brief pide reemplazarlo por un dominio propio pero nunca llegó a especificar cuál.
2. **Obras**: el prototipo aprobado y el sitio en producción listan seis obras con nombres/m²/años que no coinciden entre sí. En vez de elegir una lista o inventar una nueva, `src/content/obras.ts` tiene seis fichas placeholder (`pendienteConfirmacion: true`) con localidad real pero sin nombre, año ni m² inventados — la sección es funcional pero honesta sobre lo que falta.
3. **Reseñas individuales**: no hay texto/nombre/localidad reales disponibles. El rating agregado (5.0 · 48 reseñas) sí está confirmado por el cliente y se usa en el JSON-LD; la sección de reseñas individuales se renderiza en estado vacío con link al perfil real de Google en vez de inventar testimonios.
4. **Garantía**: el sitio actual dice "hasta 5 años", pero eso es una obligación contractual que no venía respaldada por escrito en el brief. El copy (FAQ, diferenciales) habla de "garantía escrita" sin comprometer un plazo específico.
5. **Cifras de sustentabilidad**: el "35–50% menos consumo / 40% menos agua" que aparecía en el sitio actual no tenía fuente. Se omitieron esas cifras; la sección de sustentabilidad describe acciones concretas sin porcentajes.
6. **Google Business Profile**: se usaron el nombre, coordenadas geográficas y CID reales que confirmó el cliente. Falta verificar que el resto del perfil (categoría, fotos, horario) esté completo y coincida.
7. **Mapa de contacto**: sin API key de Google Maps Static, se reemplazó por una ilustración propia + el link real de "Cómo llegar" (`maps.app.goo.gl/dTSrGi7NNz7xVEbNA`) en vez de un iframe embebido (que además hubiera dañado LCP y sumado cookies de terceros).
8. **Rate limiting del formulario**: implementado en memoria, por instancia — no es un límite estricto en un despliegue serverless con múltiples instancias o cold starts frecuentes. Suficiente para frenar abuso trivial ahora; si el volumen de spam lo justifica, migrar a Upstash Ratelimit (Redis).
9. **Hero y fotos de obra**: sin fotografía real todavía (llega vía Google Drive), se mantuvo el tratamiento de placeholder con gradientes de marca del prototipo en vez de usar banco de imágenes. Cada lugar tiene un comentario marcando dónde entra la imagen real.
10. **`/aviso-legal` y `/privacidad`**: son borradores estructurales, no texto legal validado por un profesional.
11. **First Load JS**: ver la sección de arriba — 181 KB gzip medido contra el presupuesto de 120 KB, con la causa raíz explicada.
12. **Isotipo ("F")**: a diferencia de las fotos (que sí son placeholders), el logo que usan `BrandMark.tsx`, `icon.png`/`apple-icon.png` y `public/brand/` es el diseño real de marca — no hace falta reemplazarlo, solo confirmar que es la versión final antes de imprimir cualquier pieza física con él.
