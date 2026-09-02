import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  withArrow?: boolean;
};

export function PrimaryLinkButton({
  children,
  withArrow = true,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <a className={className ? `btn-primary ${className}` : "btn-primary"} {...props}>
      {children}
      {withArrow && <ArrowIcon />}
    </a>
  );
}

export function GhostLinkButton({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={className ? `btn-ghost ${className}` : "btn-ghost"} {...props}>
      {children}
    </a>
  );
}

export function SecondaryLinkButton({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={className ? `btn-secondary ${className}` : "btn-secondary"} {...props}>
      {children}
    </a>
  );
}

export function PrimarySubmitButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className={className ? `btn-primary ${className}` : "btn-primary"}
      {...props}
    >
      {children}
    </button>
  );
}
