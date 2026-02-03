import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate();
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
          <Link className="nav-button" to="/">
            Hem
          </Link>
          <Link className="nav-button" to="/om-oss">
            Om oss
          </Link>
          <Link className="nav-button" to="/evenemang">
            Evenemang
          </Link>
          <Link className="nav-button" to="/föreningen">
            Föreningen
          </Link>
          <Link className="nav-button" to="/kalender">
            Kalender
          </Link>
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
