import adminImg from "../assets/abAdmin.png";
import userImg from "../assets/abUser.png";
import coinQuest from "../assets/CoinQuest.png";
import { IProject } from "./types";
export const projects: IProject[] = [
  {
    title: "eCommerce –  ultimate electronics marketplace.",
    description:
      "A modern digital platform for purchasing electronics, providing a quick, secure, and easy-to-use experience.",
    image: userImg,
    tech: ["React", "tailwind css", "Node js", "mongodb", "Express"],
    previewLink: "deployed onrender.com",
    githubLink: "https://github.com/birhanu-dejen/AB-ECommerce-user-MERN",
  },
  {
    title: " Dashboard - Take control of your digital realm.",
    description:
      "A web-based interface designed for administrators to effortlessly manage, monitor, and optimize every aspect of a website.",
    image: adminImg,
    tech: ["React", "tailwind css", "Node js", "mongodb", "Express"],
    previewLink: "deployed onrender.com",
    githubLink: "https://github.com/birhanu-dejen/AB-ECommerce-admin-MERN",
  },
  {
    title: "CoinQuest – Turn money management into an adventure.",
    description:
      "A personal finance planning, budgeting and management platform",
    image: coinQuest,
    tech: ["React", "Next.Js", "GraphQL", "Postgres"],
    previewLink: "deployed  onrender.com",
    githubLink: "comming soon",
  },
];
