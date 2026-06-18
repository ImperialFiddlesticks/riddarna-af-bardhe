import { Link } from "@tanstack/react-router";

type ButtonProps = {
  readonly variant?: "primary" | "secondary" | "secondary-dark";
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly href?: string;
  readonly to?: string;
  readonly target?: string;
  readonly rel?: string;
  readonly onClick?: () => void;
  readonly type?: "button" | "submit" | "reset";
};

const variantClasses = {
  primary:
    "bg-navy w-48 text-text-muted py-3 border border-navy hover:bg-navy/85 hover:scale-105 transition-transform cursor-pointer",
  secondary:
    "bg-transparent text-text-muted border border-text-muted hover:bg-navy/25 hover:scale-105 transition-transform cursor-pointer",
  "secondary-dark":
    "bg-transparent text-dark border border-dark hover:bg-navy/10 hover:scale-105 transition-transform cursor-pointer",
};

const baseClasses =
  "inline-block px-5 py-2 rounded-full text-sm font-semibold text-center";

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  to,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
