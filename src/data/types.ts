import { ReactNode } from "react";

export interface IProject {
  title: string;
  description?: string;
  tech?: string[];
  previewLink?: string;
  image?: string;
  githubLink?: string;
}
export interface ISkill {
  name: string;
  icon: string;
}
export interface IbasicInfo {
  phone: string;
  email: string;
  github: string;
  linkdin: string;
  upwork: string;
}
export interface IworkExpreience {
  company: string;
  startDate: string;
  position: string;
  endDate: string;
  bulletPoints: string[];
}
export interface AnimatedWrapperProps {
  children: ReactNode;
  duration?: number;
  ease?: string;
  y?: number;
}
