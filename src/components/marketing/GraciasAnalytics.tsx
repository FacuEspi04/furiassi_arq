"use client";

import { useEffect } from "react";
import { trackFormSubmit } from "@/lib/analytics";

/** Se llega a /gracias únicamente tras un envío exitoso del formulario. */
export function GraciasAnalytics() {
  useEffect(() => {
    trackFormSubmit("success");
  }, []);

  return null;
}
