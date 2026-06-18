import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";
import type { Knight } from "@/data/knights";
import { Link } from "@tanstack/react-router";

export function KnightPreviewCard({ knight }: { readonly knight: Knight }) {
  return (
    <Link
      to="/riddare/$knightId"
      params={{ knightId: knight.id }}
      className="block"
    >
      <Card className="bg-transparent border-0 shadow-none hover:scale-[1.02] transition pb-0">
        <CardContent className="p-0">
          <img
            src={knight.imageSrc}
            alt={knight.imageAlt}
            className="w-full border rounded-t-full border-text-muted max-w-50 sm:max-w-60 lg:max-w-none aspect-4/5 mx-auto object-cover shadow-md"
          />
          <CardHeader className="px-0">
            <CardTitle className="text-l font-['Cormorant_SC'] text-text-muted text-center mt-3">
              ✦ {knight.title} ✦
            </CardTitle>
          </CardHeader>
        </CardContent>
      </Card>
    </Link>
  );
}
