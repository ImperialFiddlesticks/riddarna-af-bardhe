import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute, Link } from "@tanstack/react-router";
import { KNIGHTS } from "@/data/knights";
import { HORSES } from "@/data/horses";
import { INSTRUCTORS } from "@/data/instructors";
import { HorsePreviewCard } from "@/components/HorsePreviewCard";
import { KnightPreviewCard } from "@/components/KnightPreviewCard";
import { Button } from "@/components/Button";

export const Route = createFileRoute("/om-oss/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Om oss</h1>
      </div>
      <div className="relative bg-parchment -mt-[60px] z-0 flex flex-col items-center">
        <div className="history-box">
          <div className="flex flex-col items-center ">
            <Card className="bg-transparent border-0 shadow-none flex flex-col">
              <CardContent className="p-0 flex flex-col lg:flex-row items-stretch gap-6">
                <div className="history-text text-center lg:text-left lg:flex-[1]">
                  <CardHeader className="p-0">
                    <CardTitle className="section-headline mb-2 text-dark">
                      Vår Historia
                    </CardTitle>
                  </CardHeader>
                  <p className="text-text-body leading-relaxed">
                    Riddarna af Bardhe är en ideell förening med en ovanlig
                    möjlighet i sitt hjärta: att som riddare träna och tävla i
                    tornerspel — utan att äga en egen häst. Det är troligtvis
                    unikt i Sverige. Det möjliggörs av ett nära samarbete mellan
                    Apalle gårds ridskola och föreningen, där hästar, mark och
                    kunskap delas för ett gemensamt syfte. Föreningen grundades
                    2012 av Rickard Åhl. Efter många år av tornerspelsridande
                    inom Celeres Nordica ville han skapa något eget — med en
                    starkare förankring till familjens gård och ridskola i
                    Bålsta. Sedan dess har konceptet växt och förfinats till vad
                    det är idag.
                  </p>
                </div>
                <img
                  alt="Riddare på hästar"
                  src="/public/föreningen.jpg"
                  className="w-full max-w-150 lg:flex-2 aspect-16/10 object-cover shadow-md"
                />
              </CardContent>
            </Card>

            <Card className="bg-transparent border-0 shadow-none flex flex-col">
              <CardContent className="p-0 mt-10">
                <p className="text-text-body leading-relaxed ">
                  Inte alla vill — eller kan — rida som riddare, och det är helt
                  okej.
                </p>
                <p>
                  {" "}
                  <br />I Riddarna af Bardhe finns det plats för alla, oavsett
                  om du vill sitta i sadeln, stötta från sidan eller bara dela
                  intresset för medeltiden. Det som förenar oss är kärleken till
                  levande historia och tornerspel. Föreningens mål Tillsammans
                  med Apalle gård arrangera och delta i olika former av
                  tornerspel, inklusive riksmästerskapet. Erbjuda träning och
                  aktiviteter för både ridande och icke-ridande medlemmar.
                  Sprida kunskap om nordeuropeisk medeltid under perioden
                  1000–1500 e.Kr. och vara en naturlig samlingsplats för alla
                  med intresse för levande historia.
                </p>{" "}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="knight-container">
        {/* <img
          alt="torn paper edge"
          className="torn-edge-dark"
          src="/torn-edge-dark.png"
        /> */}
        {/* <img
          alt="torn paper edge"
          className="torn-edge-dark"
          src="/arc-divider.svg"
        /> */}
        <img
          alt="decoration"
          className="decorative-border"
          src="/decorative-divider.svg"
        />

        <div className="max-w-5xl mx-auto page-content py-17 z-20">
          <h1 className="section-headline text-text-muted text-center mb-5">
            Riddare
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {KNIGHTS.map((k) => (
              <KnightPreviewCard key={k.id} knight={k} />
            ))}
          </div>
        </div>
      </div>

      <div className="horse-container">
        <img
          alt="decoration"
          className="decorative-border"
          src="/decorative-divider.svg"
        />
        <div className="horse-box">
          <div className="max-w-5xl mx-auto page-content py-17 z-20 flex flex-col items-center">
            <h1 className="section-headline text-dark text-center mb-2">
              Hästar
            </h1>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {HORSES.map((h) => (
                <HorsePreviewCard key={h.id} horse={h} />
              ))}
            </div>
          </div>
        </div>
        <img
          alt="Star-shaped divider"
          className="star-divider"
          src="/star-divider-grey.png"
        />
        <div className="instructor-box">
          <div className="w-full mx-auto  pt-12">
            <h2 className="section-headline text-dark mb-4 text-center">
              Instruktörer
            </h2>
            <p className="text-text-body mb-8">
              Bakom varje riddare och häst står de som lär ut konsten av sadel
              och svärd. Här är de som håller traditionen vid liv.
            </p>
            <div className="flex flex-wrap justify-evenly gap-x-10 gap-y-4">
              {INSTRUCTORS.map((i) => (
                <div key={i.id} className="flex items-center gap-3">
                  <span className="text-dark font-bold font-['Cormorant_SC']">
                    ✦ {i.name}
                  </span>
                  <span className="text-text-body italic text-sm">
                    {i.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="info-section">
        {/* <img alt="divider" className="torn-edge-dark" src="/arc-divider.svg" /> */}
        <div className="max-w-5xl mx-auto page-content pt-16 z-20">
          <div className="flex flex-col justify-center  gap-12">
            <div>
              <h2 className="subsection-headline text-text-muted mb-4">
                Hitta hit
              </h2>
              <p className="text-text-muted leading-relaxed">
                Apalle Gårdsväg 1
                <br />
                746 93 Bålsta
              </p>
              <Button
                href="https://www.google.com/maps/search/?api=1&query=Apalle+Gårdsväg+1,+746+93+Bålsta"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
                variant="secondary"
              >
                Visa på karta
              </Button>
            </div>
            <Button to="/föreningen">Föreningen</Button>
            <div>
              <h2 className="subsection-headline text-text-muted mb-4">
                Samarbetspartners
              </h2>
              <ul>
                <li className="text-text-muted leading-relaxed">
                  <Link
                    to="https://www.apallegard.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apalle Gård
                  </Link>
                </li>
                <li className="text-text-muted leading-relaxed">
                  <Link
                    to="https://www.salasilvergruva.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sala Silvergruva
                  </Link>
                </li>
                <li className="text-text-muted leading-relaxed">
                  <Link
                    to="https://eldcirkus.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cirkus Ignis
                  </Link>
                </li>
                <li className="text-text-muted leading-relaxed">
                  <Link
                    to="https://www.engso-events.com/upplevelsehelg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Engsö Upplevelsehelg
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
