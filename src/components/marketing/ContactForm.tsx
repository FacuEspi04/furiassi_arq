"use client";

import { useState, type FormEvent } from "react";
import { modalidadInteres } from "@/lib/modalidad-interes";
import { Field } from "@/components/ui/Field";
import { trackFormSubmit } from "@/lib/analytics";
import { buildWhatsappMessageUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      ["nombre", "telefono", "email", "localidad", "modalidad", "mensaje"].map(
        (name) => [name, String(formData.get(name) ?? "").trim()]
      )
    );
    const nextErrors: Record<string, string> = {};

    for (const field of ["nombre", "telefono", "email", "modalidad"]) {
      if (!values[field as keyof typeof values]) {
        nextErrors[field] = "Este campo es obligatorio.";
      }
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      trackFormSubmit("error");
      return;
    }

    setErrors({});
    const message = [
      ["Nombre", values.nombre],
      ["Teléfono", values.telefono],
      ["Email", values.email],
      ["Localidad", values.localidad],
      ["Modalidad de interés", values.modalidad],
      ["Idea", values.mensaje],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n");

    trackFormSubmit("success");
    window.location.assign(buildWhatsappMessageUrl(message));
  }

  return (
    <form className="contacto-right" onSubmit={handleSubmit} noValidate>
      <div className="honeypot-field" aria-hidden="true">
        <label htmlFor="empresa">No completar este campo</label>
        <input
          type="text"
          id="empresa"
          name="empresa"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-row">
        <Field id="nombre" label="Nombre" error={errors.nombre}>
          <input
            className="form-input"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            minLength={2}
            maxLength={80}
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
          />
        </Field>
        <Field id="telefono" label="Teléfono" error={errors.telefono}>
          <input
            className="form-input"
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="+54 9 ..."
            minLength={6}
            maxLength={25}
            aria-invalid={Boolean(errors.telefono)}
            aria-describedby={errors.telefono ? "telefono-error" : undefined}
          />
        </Field>
      </div>

      <Field id="email" label="Email" error={errors.email}>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
      </Field>

      <Field
        id="localidad"
        label="Localidad del terreno o vivienda"
        error={errors.localidad}
      >
        <input
          className="form-input"
          type="text"
          id="localidad"
          name="localidad"
          placeholder="Maipú, Luján de Cuyo, Godoy Cruz..."
          minLength={2}
          maxLength={80}
          aria-invalid={Boolean(errors.localidad)}
          aria-describedby={errors.localidad ? "localidad-error" : undefined}
        />
      </Field>

      <Field id="modalidad" label="Modalidad de interés" error={errors.modalidad}>
        <select
          className="form-select"
          id="modalidad"
          name="modalidad"
          defaultValue=""
          aria-invalid={Boolean(errors.modalidad)}
          aria-describedby={errors.modalidad ? "modalidad-error" : undefined}
        >
          <option value="" disabled>
            Elegí una opción
          </option>
          {modalidadInteres.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </Field>

      <Field id="mensaje" label="Contanos tu idea" error={errors.mensaje}>
        <textarea
          className="form-textarea"
          id="mensaje"
          name="mensaje"
          placeholder="Descripción breve, ubicación aproximada, presupuesto orientativo..."
          minLength={10}
          maxLength={2000}
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
        />
      </Field>

      <button className="form-submit" type="submit">
        Enviar consulta
      </button>
    </form>
  );
}
