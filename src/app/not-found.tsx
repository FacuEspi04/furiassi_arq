import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="section-cream"
      style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}
    >
      <div
        className="container"
        style={{ textAlign: "center", maxWidth: 480, marginInline: "auto" }}
      >
        <p className="section-eyebrow" style={{ justifyContent: "center" }}>
          Error 404
        </p>
        <h1 className="section-h2">Esta página no existe.</h1>
        <p className="section-sub" style={{ marginBottom: 32 }}>
          Puede que el enlace esté desactualizado o mal escrito.
        </p>
        <Link href="/" className="btn-primary">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
