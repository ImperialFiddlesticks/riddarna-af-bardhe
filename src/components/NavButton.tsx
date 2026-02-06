import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type NavButtonProps = {
  to: string;
  children: ReactNode;
};

export function NavButton({ to, children }: NavButtonProps) {
  return (
    <Link to={to} className="nav-button">
      {children}
    </Link>
  );
}
