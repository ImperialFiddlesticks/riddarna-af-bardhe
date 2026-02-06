import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";
import type { Knight } from "@/data/knights";
import { Link } from "@tanstack/react-router";

export function KnightPreviewCard({ knight }: { knight: Knight }) {
  return (
    <Link
      to="/riddare/$knightId"
      params={{ knightId: knight.id }}
      className="block"
    >
      <Card className="bg-transparent border-0 shadow-none hover:scale-[1.02] transition">
        <CardContent className="p-0">
          <img
            src={knight.imageSrc}
            alt={knight.imageAlt}
            className="w-full max-w-[320px] sm:max-w[360px] md:max-w-none aspect-[4/5] mx-auto object-cover shadow-md"
          />
          <CardHeader className="px-0">
            <CardTitle className="text-2xl font-['Cormorant_SC'] text-[#242424] text-center mt-3">
              {knight.title}
            </CardTitle>
          </CardHeader>
        </CardContent>
      </Card>
    </Link>
  );
}
