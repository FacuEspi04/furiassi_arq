export function JsonLd({ data }: { data: object[] | object }) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Se escapa "<" porque parte del contenido (títulos de artículos)
          // viene del CMS: así un "</script>" en un texto no rompe la página.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
