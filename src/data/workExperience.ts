import { ExperienceItem } from "./types";

export const workExperience: ExperienceItem[] = [
  {
    company: "Weyra Tutors",
    position: "Full-Stack Developer",
    startDate: "June 2025",
    endDate: "October 2025",
    bulletPoints: [
      "Built a full-stack e-learning platform connecting tutors and parents.",
      "Implemented secure authentication with JWT access and refresh tokens.",
      "Developed course management, booking system, and messaging between tutors and clients.",
      "Technologies used: Next.js, NestJS, PostgreSQL, Prisma, Tailwind CSS, JWT Authentication.",
    ],
  },
  {
    company: "ABStrore",
    position: "Backend Developer",
    startDate: "May 2024",
    endDate: "September 2024",
    bulletPoints: [
      "Worked on a complete rewrite of an eCommerce platform ",
      "Built payment integrations with Stripe, Chapa",
      "Technologies used: TypeScript, Node, Express, MongoDB",
    ],
  },
];
