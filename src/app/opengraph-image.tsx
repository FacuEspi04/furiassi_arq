import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #2a2318 0%, #4a3f32 55%, #6a5f50 100%)",
          color: "#f5f1eb",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c4a86a",
            marginBottom: 28,
            display: "flex",
          }}
        >
          Arquitectura residencial · Mendoza
        </div>
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.15,
            fontWeight: 300,
            maxWidth: 980,
            display: "flex",
          }}
        >
          {site.nombre}
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 300,
            color: "#b5a898",
            marginTop: 24,
            maxWidth: 900,
            display: "flex",
          }}
        >
          Diseño a medida · Llave en mano o por etapas · Garantía escrita
        </div>
      </div>
    ),
    { ...size }
  );
}
