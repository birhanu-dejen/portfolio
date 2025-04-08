import adminImg from "../assets/abAdmin.png";
import userImg from "../assets/abUser.png";
import RasDashenImg from "../assets/rasDashenImg.png";
import { IProject } from "./types";
export const projects: IProject[] = [
  {
    title: " Ras Dashen Retreats - Luxury Mountain Cabin",
    description:
      "A mountain-side cabin booking and nature retreat platform for unforgettable getaways in Ethiopia’s iconic Simien Mountains.",
    image: RasDashenImg,
    tech: ["Next.js", "Tailwind CSS", "supabase"],
    previewLink: "https://ras-dashen-retreats.vercel.app/",
    githubLink: "https://github.com/birhanu-dejen/Ras-Dashen-Retreats.",
  },
  {
    title: "eCommerce –  ultimate electronics marketplace.",
    description:
      "A modern digital platform for purchasing electronics, providing a quick, secure, and easy-to-use experience.",
    image: userImg,
    tech: ["React", "tailwind css", "Node js", "mongodb", "Express"],
    previewLink: "https://abstore-user.onrender.com/",
    githubLink: "https://github.com/birhanu-dejen/ABStore-user",
  },
  {
    title: " Dashboard - Take control of your digital realm.",
    description:
      "An  interface designed for administrators to manage, monitor, and optimize every aspect of an ecommerce website.",
    image: adminImg,
    tech: ["React", "tailwind css", "Node js", "mongodb", "Express"],
    previewLink: "https://abstore-admin.onrender.com/",
    githubLink: "https://github.com/birhanu-dejen/ABStore-admin",
  },
];
