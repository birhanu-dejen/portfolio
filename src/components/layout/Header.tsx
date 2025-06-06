import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BasicInfo } from "@/data/types";
import Button from "../shared/Button";

interface HeaderProps {
  basicInfo: BasicInfo;
}

export default function Header({ basicInfo }: HeaderProps) {
  const { name, title, email, linkedin, github } = basicInfo;

  const links = [
    {
      link: "mailto:vernu1997@gmail.com",
      icon: <TfiEmail />,
      text: email,
    },
    {
      link: linkedin,
      icon: <BsLinkedin />,
      text: linkedin?.replace("https://linkedin.com", ""),
    },
    {
      link: github,
      icon: <BsGithub />,
      text: github?.replace("https://github.com", ""),
    },
  ];
  return (
    <header className="flex flex-col lg:flex-row lg:items-center justify-between py-2 px-6 lg:px-8 bg-gradient-to-r from-gray-700 to-cyan-900 text-white md:sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-sm">{title}</p>
      </div>
      <div className="flex md:items-center mt-4 md:mt-0 flex-col md:flex-row font-[200]">
        {links.map(({ link, icon, text }) => (
          <Button key={link} link={link} icon={icon} text={text} />
        ))}
      </div>
    </header>
  );
}
