import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Riddarna af Bardhe</h1>
      </div>
      <div className="info-container">
        <div className="info-box">
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="p-0 flex flex-col lg:flex-row items-center gap-6">
              <img
                alt="riddare"
                src="/riddare.jpg"
                className="w-full lg:w-[420px] h-[240px] lg:h-[260px] object-cover shadow-md"
              />
              <div className="text-center lg:text-left">
                <CardHeader className="p-0">
                  <CardTitle className="section-headline mb-2 text-dark">
                    Föreningen
                  </CardTitle>
                </CardHeader>
                <p className="text-text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="p-0 flex flex-col lg:flex-row items-center gap-6">
              <div className="text-center lg:text-left">
                <CardHeader className="p-0">
                  <CardTitle className="section-headline mb-2 text-dark">
                    Tornerspel
                  </CardTitle>
                </CardHeader>
                <p className="text-text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <img
                alt="riddare"
                src="/riddare2.jpg"
                className="w-full lg:w-[420px] h-[240px] lg:h-[260px] object-cover shadow-md"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
