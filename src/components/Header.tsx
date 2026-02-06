import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { NavButton } from "./NavButton";

const NavItems = [
  { to: "/", label: "Hem" },
  { to: "/om-oss", label: "Om Oss" },
  { to: "/evenemang", label: "Evenemang" },
  { to: "/föreningen", label: "Föreningen" },
  { to: "/kalender", label: "Kalender" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] w-full bg-[#1e325f]">
      <div className="mx-auto flex h-[72px] md:h-[90px] max-w-6xl items-center justify-between px-3 md:px-4">
        <div className="flex items-center gap-2 md:gap-3">
          <img
            alt="shield logo"
            src="/bardhelogo.png"
            className="h-10 md:h-14 lg:h-[75px] w-auto"
          />

          <h2
            className="
                    font-['Cinzel'] text-xl md:text-2xl lg:text-[2rem]
                    bg-gradient-to-b from-[#505050] via-[#f3f2f2] to-[#707070]
                    bg-clip-text text-transparent
                    drop-shadow-sm
                    whitespace-nowrap"
          >
            Riddarna af Bardhe
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <div className="text-base lg:text-[1.4rem]">
            <NavButton to="/">Hem</NavButton>
            <NavButton to="/om-oss">Om oss</NavButton>
            <NavButton to="/evenemang">Evenemang</NavButton>
            <NavButton to="/föreningen">Föreningen</NavButton>
            <NavButton to="/kalender">Kalender</NavButton>
          </div>
        </nav>

        <div className="md:hidden relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="
              rounded-lg
              px-3 py-2
              text-[#cfcfcf]
              font-['Cormorant_SC']
              text-lg
              hover:brightness-110
              active:scale-[0.98]
              transition
            "
            aria-haspopup="menu"
            aria-expanded={open}
          >
            Meny ▾
          </button>

          {open && (
            <div
              className="absolute right-0 mt-2 w-48
                rounded-xl border border-black/10
                bg-[#f7ecd8]
                shadow-lg
                overflow-hidden
                z-[1000]"
              role="menu"
            >
              {NavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-[#242424]
                    font-['Cormorant_SC']
                    text-lg
                    hover:bg-black/5"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
