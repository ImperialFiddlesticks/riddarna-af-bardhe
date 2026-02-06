export type ISODateString = `${number}-${number}-${number}`;

export type EventItem = {
  id: string;
  title: string;
  start: ISODateString;
  end?: ISODateString;
  location?: string;
  description?: string;
};

export const EVENTS: readonly EventItem[] = [
  {
    id: "1",
    title: "Knight Training",
    start: "2026-03-12",
    location: "Courtyard",
    description:
      "Öppen träning med svärd, sköld och rustning. Alla nivåer välkomna.",
  },
  {
    id: "2",
    title: "Spring Tournament",
    start: "2026-04-02",
    location: "Great Hall",
    description: "Intern turnering med publik. Rustning krävs.",
  },
  {
    id: "3",
    title: "Tornerspel på Ängsö Medeltidsdagar",
    start: "2026-05-29",
    end: "2026-05-31",
    location: "Ängsö Slott",
    description: "Intern turnering med publik. Rustning krävs.",
  },
  {
    id: "4",
    title: "Tornerspel på Salsta Slott",
    start: "2026-06-26",
    end: "2026-06-28",
    location: "Salsta Slott",
    description: "Intern turnering med publik. Rustning krävs.",
  },
  {
    id: "5",
    title: "Årsmöte",
    start: "2026-02-28",
    location: "Apalle Gård",
    description: "Intern turnering med publik. Rustning krävs.",
  },
];
