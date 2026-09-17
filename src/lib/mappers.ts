import type { Knight } from "@/data/knights";
import type { WPKnight } from "@/api/wordpress";

export const mapWPKnightToKnight = (
  wpKnight: WPKnight,
  imageUrl: string,
): Knight => ({
  id: wpKnight.slug,
  title: wpKnight.title.rendered,
  imageSrc: imageUrl,
  imageAlt: wpKnight.title.rendered,
  name: wpKnight.acf.name,
  tagline: wpKnight.acf.tagline,
  favoriteWeapon: wpKnight.acf.favorite_weapon,
});
