import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/Button";

export const Route = createFileRoute("/föreningen/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Föreningen</h1>
      </div>

      {/* Info */}
      <div className="relative bg-parchment -mt-15 z-0 flex flex-col items-center">
        <div className="history-box">
          <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full">
            <div className="history-text text-center lg:text-left lg:flex-1">
              <h2 className="section-headline text-dark mb-4">Om föreningen</h2>
              <p className="text-text-body leading-relaxed">
                Föreningen startades 2012 av Rickard Åhl, som efter många år av
                tornerspelsridande med en annan förening, Celeres Nordica, ville
                skapa något eget och då med anknytning till familjens gård och
                ridskola i Bålsta. Sedan dess har konceptet förfinats till vad
                det är idag. eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="w-full lg:flex-2 aspect-16/10 bg-tan/30 shadow-md" />
          </div>
        </div>
      </div>

      {/* Medlemskap */}
      <div className="knight-container">
        <div className="page-content py-17">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:flex-1">
              <h2 className="section-headline text-text-muted mb-4">
                Medlemskap
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Vi är i färd med att bredda föreningens verksamhet till att inte
                enbart kretsa kring de delar som knyter an till hästarna, utan
                också fokusera på annat, som tillsammans med nuvarande
                verksamhet bättre kommer att knyta ihop vår medeltida säck… Vi
                välkomnar alla som har ett intresse för medeltiden i allmänhet
                och i synnerhet dig som kanske är speciellt intresserad av
                medeltida matlagning, musik, artisteri, markstrid m.m.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Tveka inte att kontakta oss i Riddarna af Bardhe. Då vi är en
                förening under uppbyggnad finns goda möjligheter att vara med
                och påverka inriktning och innehåll i verksamheten även för nya
                medlemmar.
              </p>
              <Button href="mailto:" variant="secondary">
                Bli medlem
              </Button>
            </div>
            <div className="w-full lg:flex-1 aspect-16/10 bg-white/10 shadow-md" />
          </div>
        </div>
      </div>

      {/* Styrelsen */}
      <div className="relative bg-parchment flex flex-col items-center py-24">
        <div className="page-content w-full mb-15">
          <h2 className="section-headline text-dark mb-8 text-center">
            Styrelsen
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Add board members here */}
            {[
              { role: "Ordförande", name: "Namn Namnsson" },
              { role: "Vice ordförande", name: "Namn Namnsson" },
              { role: "Kassör", name: "Namn Namnsson" },
              { role: "Sekreterare", name: "Namn Namnsson" },
              { role: "Ledamot", name: "Namn Namnsson" },
            ].map((member) => (
              <div key={member.role} className="flex flex-col gap-1">
                <span className="subsection-headline text-dark">
                  {member.role}
                </span>
                <span className="text-text-body">{member.name}</span>
              </div>
            ))}
          </div>
        </div>
        <img
          alt="torn paper edge"
          className="torn-edge-light"
          src="/torn-edge-light-bottom.png"
        />
      </div>

      {/* Galleri */}
      <div className="bg-parchment-mid py-24">
        <div className="page-content">
          <h2 className="section-headline text-dark mb-8 text-center">
            Galleri
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Add images here */}
            {["bild-1", "bild-2", "bild-3", "bild-4", "bild-5", "bild-6"].map(
              (id) => (
                <div key={id} className="aspect-video bg-dark/10 shadow-md" />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
