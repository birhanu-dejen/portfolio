import adminImg from "../assets/abAdmin.png";
import userImg from "../assets/abUser.png";
import { Project } from "./types";
export const projects: Project[] = [
  {
    title: "eCComerce",
    description:
      "a digital platform that facilitates online buying and selling of goods and services.",
    image: userImg,
    tech: ["React", "tailwind css", "Node js", "mongodb", "Express"],
    previewLink: "https://",
    githubLink: "https://github.com/birhanu-dejen/AB-ECommerce-user-MERN",
  },
  {
    title: "Admin Dashboard",
    description:
      "a web-based interface designed for administrators to manage, monitor, and control various aspects of a website.",
    image: adminImg,
    tech: ["React", "tailwind css", "Node js", "mongodb", "Express"],
    previewLink: "https://",
    githubLink: "https://github.com/birhanu-dejen/AB-ECommerce-admin-MERN",
  },
];
