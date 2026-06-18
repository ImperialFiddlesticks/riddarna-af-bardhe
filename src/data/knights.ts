export type Knight = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  tagline?: string;
  name?: string;
  favoriteWeapon?: string;
};

export const KNIGHTS: Knight[] = [
  {
    id: "storman-ahl",
    title: "Storman Åhl",
    imageSrc: "/stormanåhl.jpg",
    imageAlt: "Storman Åhl",
    tagline: "Lorem ipsum dolor sit amet.",
    name: "Rickard Åhl",
    favoriteWeapon: "Svärd",
  },
  {
    id: "apalle",
    title: "Riddaren af Apalle",
    imageSrc: "/riddareapalle.jpg",
    imageAlt: "Riddaren af Apalle",
    tagline: "Lorem ipsum dolor sit amet.",
    name: "Camilla Åhl",
    favoriteWeapon: "Svärd",
  },
  {
    id: "korp-enoga",
    title: "Riddare Korp Enöga",
    imageSrc: "/korpenöga.jpeg",
    imageAlt: "Korp Enöga",
    tagline: "Ett öga räcker – resten är överkurs!",
    name: "Susanne Henriksson",
    favoriteWeapon: "Svärd",
  },
  {
    id: "lejonet-fran-norden",
    title: "Lejonet från Norden",
    imageSrc: "/lejonetfrånnorden.jpg",
    imageAlt: "Lejonet Från Norden",
    tagline: "Lorem ipsum dolor sit amet.",
    name: "Kim Andersen",
    favoriteWeapon: "Svärd",
  },
  {
    id: "riddare-ormvrak",
    title: "Riddare Ormvråk",
    imageSrc: "/ormvråk.jpg",
    imageAlt: "Riddare Ormvråk",
    tagline: "Den där är min!",
    name: "Robin Bleckert",
    favoriteWeapon: "Långsvärd",
  },
];

export function getKnightById(id: string): Knight | undefined {
  return KNIGHTS.find((k) => k.id === id);
}
