import type { ReactNode } from "react";

export function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && (
        <p className="form-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
