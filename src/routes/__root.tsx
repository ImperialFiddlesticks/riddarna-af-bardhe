import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Header></Header>

      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
