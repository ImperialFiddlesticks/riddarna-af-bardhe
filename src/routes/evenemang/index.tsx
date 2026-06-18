import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/Button";

export const Route = createFileRoute("/evenemang/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Evenemang</h1>
      </div>

      {/* Intro */}
      <div className="relative bg-parchment -mt-15 z-0 flex flex-col items-center">
        <div className="history-box">
          <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full">
            <div className="history-text text-center lg:text-left lg:flex-1">
              <h2 className="section-headline text-dark mb-4">
                Vad vi erbjuder
              </h2>
              <p className="text-text-body leading-relaxed">
                Genom samarbetet med Apalle gård kan Riddarna af Bardhe ge ditt
                evenemang ett medeltida inslag — oavsett om det är ett bröllop,
                en svensexa eller ett företagsevenemang. Vi erbjuder tornerspel
                med gycklare och fotsoldater, riddaruppvisningar och
                skräddarsydda arrangemang efter era önskemål. Vi kan komma till
                er, eller välkomna er till gården i Bålsta.
              </p>
            </div>
            <div className="w-full max-w-150 lg:flex-2 aspect-16/10 bg-tan/30 shadow-md" />
          </div>
        </div>
      </div>

      {/* Tornerspel */}
      <div className="knight-container">
        <div className="page-content py-17">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:flex-1">
              <h2 className="section-headline text-text-muted mb-4">
                Tornerspel
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                För en medeltida riddare var tornerspelen en av de viktigaste
                sysselsättningarna — en plats att visa upp styrka, tapperhet och
                ridderlig dygd. Till en början var de i princip militärövningar,
                där stora skaror riddare brakade ihop i våldsamma lagstrider, så
                kallade mêlée. Dödstalen var höga, och det finns bevarade
                berättelser om torneringar där så många som 80 riddare stupade.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Från 1400-talets början övergick torneringarna till mer ordnade
                spel med tydliga regler. Riddarna stred vanligen två och två med
                lans på den så kallade rännarbanan — i ett försök att stöta
                motståndaren ur sadeln — och fortsatte med svärd och sköld vid
                oavgjort. Kringresande riddare från hela Europa deltog för ära
                och förtjänst, och en seger kunde ge betydande summor i
                lösensummor från besegrade motståndares familjer.{" "}
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Färger och heraldik spelade en central roll, och riddarna stred
                nästan alltid för en adelsdam ur åskådarskaran — vars tygstycke
                bars runt armen eller lansen som en hyllning till skönhet och
                dygd.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                När medeltiden övergick till renässansen på 1500-talet hade
                tornerspelen slutgiltigt förlorat sin militära betydelse och
                blivit ren underhållning. Dagens tornerspel är ofta en mix av
                olika tidsepoker, med moment på rännarbanan och det som kallas
                skill at arms.
              </p>
              <Button to="/kalender" variant="secondary">
                Se kommande datum
              </Button>
            </div>
            <div className="w-full lg:flex-1 aspect-16/10 bg-white/10 shadow-md" />
          </div>
        </div>
      </div>

      {/* Klubbmästerskap */}
      <div className="relative bg-parchment flex flex-col items-center py-24">
        <div className="page-content w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:flex-1 aspect-16/10 bg-tan/30 shadow-md" />
            <div className="lg:flex-1">
              <h2 className="section-headline text-dark mb-4">
                Klubbmästerskap
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                Varje år håller föreningen tillsammans med Apalle gård ett
                klubbmästerskap, öppet för alla ridande medlemmar — oavsett om
                du är page, väpnare eller riddare.
              </p>
              <p className="text-text-body leading-relaxed mb-6">
                Tävlingen består av två deltävlingar: den första på rännarbanan,
                den andra på en skill at arms-bana. Båda måste genomföras för
                att räknas som mästerskapets totalsegrare. Första deltävlingen
                hålls i samband med Apalles hästfest i juni, den andra på
                sensommaren i samband med föreningens sommarfest.
              </p>
            </div>
          </div>
        </div>
        <img
          alt="torn paper edge"
          className="torn-edge-light"
          src="/torn-edge-light-bottom.png"
        />
      </div>

      {/* Riddaruppvisningar */}
      <div className="bg-parchment-mid py-24">
        <div className="page-content">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:flex-1">
              <h2 className="section-headline text-dark mb-4">
                Riddaruppvisningar
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button to="/kontakt" variant="secondary-dark">
                Kontakta oss
              </Button>
            </div>
            <div className="w-full lg:flex-1 aspect-16/10 bg-dark/10 shadow-md" />
          </div>
        </div>
      </div>

      {/* Bröllop */}
      <div className="relative bg-parchment flex flex-col items-center py-24">
        <div className="page-content w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:flex-1 aspect-16/10 bg-tan/30 shadow-md" />
            <div className="lg:flex-1">
              <h2 className="section-headline text-dark mb-4">Bröllop</h2>
              <p className="text-text-body leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button to="/kontakt" variant="secondary-dark">
                Kontakta oss
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Svensexor & Möhippor */}
      <div className="bg-parchment-mid py-24">
        <div className="page-content">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:flex-1">
              <h2 className="section-headline text-dark mb-4">
                Svensexor & Möhippor
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button to="/kontakt" variant="secondary-dark">
                Kontakta oss
              </Button>
            </div>
            <div className="w-full lg:flex-1 aspect-16/10 bg-dark/10 shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
