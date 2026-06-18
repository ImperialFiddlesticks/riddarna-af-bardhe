import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";
import type { Horse } from "@/data/horses";

export function HorsePreviewCard({ horse }: { readonly horse: Horse }) {
  return (
    <Card className="bg-transparent border-0 shadow-none hover:scale-[1.02] transition pb-0">
      <CardContent className="p-0">
        <img
          src={horse.imageSrc}
          alt={horse.imageAlt}
          className="w-full max-w-50 sm:max-w-60 lg:max-w-none aspect-4/5 mx-auto border rounded-b-full object-cover border-tan"
        />
        <CardHeader className="px-0">
          <CardTitle className="text-l font-['Cormorant_SC'] text-dark text-center mt-3">
            ✦ {horse.name} ✦
          </CardTitle>
        </CardHeader>
      </CardContent>
    </Card>
  );
}
