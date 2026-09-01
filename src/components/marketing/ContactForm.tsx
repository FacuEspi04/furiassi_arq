"use client";

import { useActionState, useEffect, useRef } from "react";
import { enviarConsulta, type ContactoState } from "@/lib/actions";
import { modalidadInteres } from "@/lib/modalidad-interes";
import { Field } from "@/components/ui/Field";
import { trackFormSubmit } from "@/lib/analytics";

const initialState: ContactoState = { status: "idle" };

/**
 * La validación completa (Zod) vive en lib/validation.ts y corre en el
 * Server Action — no se importa acá a propósito: zod pesa ~85 KB gzip y
 * rompía el presupuesto de First Load JS. En el cliente nos apoyamos en
 * los atributos HTML5 (required, type, minLength) para feedback
 * inmediato, y en los errores que devuelve el server tras el submit.
 */
export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    enviarConsulta,
    initialState
  );

  const errors = state.fieldErrors ?? {};

  // Éxito = el Server Action redirige a /gracias (el componente se
  // desmonta antes de que "state" refleje un status de éxito), así que
  // ese evento se registra allá. Acá solo registramos los rechazos.
  const lastTrackedStatus = useRef<ContactoState["status"]>("idle");
  useEffect(() => {
    if (state.status !== "idle" && state.status !== lastTrackedStatus.current) {
      trackFormSubmit("error");
    }
    lastTrackedStatus.current = state.status;
  }, [state.status]);

  return (
    <form className="contacto-right" action={formAction}>
      {state.formError && (
        <p className="form-error-banner" role="alert">
          {state.formError}
        </p>
      )}

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
            required
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
            required
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
          required
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
          required
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
          required
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
          required
        />
      </Field>

      <button className="form-submit" type="submit" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}
