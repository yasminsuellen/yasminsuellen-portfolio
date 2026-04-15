//Dados dos projetos tipados.

export interface Project {
  title: string;
  descriptionKey: "appointment" | "task";
  tags: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Appointment Rebooking",
    descriptionKey: "appointment",
    tags: ["Next.js 15", "RTK Query", "TypeScript"],
    github: "https://github.com/yasminsuellen/appointment-rebooking",
  },
  {
    title: "Task Management Dashboard",
    descriptionKey: "task",
    tags: ["Next.js 14", "TypeScript", "localStorage"],
    github: "https://github.com/yasminsuellen/task-management-dashboard",
  },
];
