import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { NavButton } from "@/components/NavButton";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <header>
        {" "}
        <div className="header-name">
          <img
            alt="shield logo"
            src="/bardhelogo.png"
            className="header-logo"
          />
          <h2>Riddarna af Bardhe</h2>
        </div>
        <div className="header-nav">
          <NavButton to="/">Hem</NavButton>
          <NavButton to="/om-oss">Om oss</NavButton>
          <NavButton to="/evenemang">Evenemang</NavButton>
          <NavButton to="/föreningen">Föreningen</NavButton>
          <NavButton to="/kalender">Kalender</NavButton>
        </div>
      </header>

      <Outlet />
      <footer>
        <div className="footer-section">
          <h3>Om oss</h3>
          <ul>
            <li>Evenemang</li>
            <li>Föreningen</li>
            <li>Kalender</li>
          </ul>
        </div>
        <img alt="shield logo" src="/bardhelogo.png" className="header-logo" />
        <div className="footer-section">
          <h3>Kontakta Oss</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}
