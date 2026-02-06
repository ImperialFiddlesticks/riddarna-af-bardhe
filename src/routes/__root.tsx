import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { NavButton } from "@/components/NavButton";
import { Header } from "@/components/Header";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Header></Header>

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
