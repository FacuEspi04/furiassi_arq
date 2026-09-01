import localFont from "next/font/local";

export const cormorantGaramond = localFont({
  src: [
    { path: "./CormorantGaramond-Roman-Variable.woff2", weight: "300 600", style: "normal" },
    { path: "./CormorantGaramond-Italic-Variable.woff2", weight: "300 600", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const outfit = localFont({
  src: "./Outfit-Variable.woff2",
  weight: "300 500",
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const dmMono = localFont({
  src: [
    { path: "./DMMono-400.woff2", weight: "400", style: "normal" },
    { path: "./DMMono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});
