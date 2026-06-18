export type Instructor = {
  id: string;
  name: string;
  role: string;
  specialty?: string;
};

export const INSTRUCTORS: Instructor[] = [
  {
    id: "rickard-åhl",
    name: "Rickard Åhl",
    role: "Instruktör tornerspel",
    specialty: "Vapenhantering",
  },
  {
    id: "camilla-åhl",
    name: "Camilla Åhl",
    role: "Ridlärare",
    specialty: "Skill at arms",
  },
  { id: "sandra-åhl", name: "Sandra Åhl", role: "Ridlärare" },
];
