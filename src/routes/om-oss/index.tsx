import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { KNIGHTS } from "@/data/knights";
import { KnightPreviewCard } from "@/components/KnightPreviewCard";

export const Route = createFileRoute("/om-oss/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Om oss</h1>
      </div>
      <div className="relative bg-[#e2d1b0] -mt-[60px] z-0 flex flex-col items-center">
        <div className="history-box">
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="p-0 flex flex-col lg:flex-row items-center gap-6">
              <div className="text-center lg:text-left lg:flex-[1]">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl sm:text-3xl font-['Cormorant_SC'] mb-2 text-[#242424]">
                    Vår Historia
                  </CardTitle>
                </CardHeader>
                <p className="text-[#505050] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <img
                alt="Riddare på hästar"
                src="/public/föreningen.jpg"
                className="w-full max-w-[600px] lg:flex-[2] aspect-[16/10]  object-cover shadow-md"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="knight-container">
        <img
          alt="torn paper edge"
          className="torn-edge-dark"
          src="/torn-edge-dark.png"
        />

        <div className="max-w-5xl mx-auto px-6 py-17 z-20">
          <h1 className=" text-[#242424] font-['Cinzel'] text-5xl text-center mb-5">
            Riddare
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {KNIGHTS.map((k) => (
              <KnightPreviewCard key={k.id} knight={k} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
