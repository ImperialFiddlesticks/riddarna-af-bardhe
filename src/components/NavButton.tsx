import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type NavButtonProps = {
  readonly to: string;
  readonly children: ReactNode;
};

export function NavButton({ to, children }: NavButtonProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center px-3 py-2 font-['Cormorant_SC'] text-[#cfcfcf]
        hover:scale-[1.06]
        hover:drop-shadow-md
        transition"
    >
      {children}
    </Link>
  );
}
