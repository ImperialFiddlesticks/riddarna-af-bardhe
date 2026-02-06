import { createFileRoute } from "@tanstack/react-router";
import { getKnightById } from "@/data/knights";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  Card,
} from "@/components/ui/card";

export const Route = createFileRoute("/riddare/$knightId")({
  component: KnightRouteComponent,
});

function KnightRouteComponent() {
  const { knightId } = Route.useParams();
  const knight = getKnightById(knightId);

  if (!knight) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-[#242424]">
        <h1 className="text-2xl font-['Cormorant_SC']">
          Riddaren hittades inte
        </h1>
        <p className="mt-2 text-[#505050]">Ingen riddare med id: {knightId}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Card className="bg-[#f7ecd8] text-[#242424] border-2 border-[#1e325f]/35 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-['Cormorant_SC']">
            {knight.title}
          </CardTitle>
          {knight.tagline && (
            <CardDescription className="italic font-['Libre_Baskerville'] text-[#505050] leading-relaxed">
              “{knight.tagline}”
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <img
            src={knight.imageSrc}
            alt={knight.imageAlt}
            className="w-full aspect-[4/5] object-cover shadow-md"
          />
          <div className="space-y-2 text-[#505050]">
            {knight.name && (
              <p>
                <span className="font-semibold text-[#242424]">Namn: </span>
                {knight.name}
              </p>
            )}
            {knight.favoriteWeapon && (
              <p>
                <span className="font-semibold text-[#242424]">
                  Favoritvapen:
                </span>{" "}
                {knight.favoriteWeapon}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
