import { Project } from "@/data/types";

import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { IconButton } from "./shared/IconButton";
import AnimatedScrollWrapper from "./shared/AnimatedScrollWrapper";
import { Image } from "@imagekit/next";
interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const { title, description, tech, previewLink, image, githubLink } = project;

  return (
    <AnimatedScrollWrapper>
      <div className="rounded-lg border-solid border-[0.5px] border-gray-400  overflow-hidden flex flex-col md:hover:drop-shadow-lg cursor-pointer md:hover:shadow-xl md:hover:scale-[102%] transition-transform duration-300 md:min-h-[360px]">
        <Image
          urlEndpoint="https://ik.imagekit.io/WorkGallery/"
          src={image ?? "/projects/"}
          width={500}
          height={500}
          alt={title ?? "Project image"}
        />
        <div className="flex-grow px-3 py-2 mb-auto">
          <div className="flex flex-row justify-between mb-2">
            <span className="font-semibold text-md">{title}</span>
            <div className="flex flex-row text-md">
              {previewLink && (
                <IconButton
                  link={previewLink}
                  icon={<BiLinkExternal />}
                  target="_blank"
                />
              )}
              {githubLink && (
                <IconButton
                  link={githubLink}
                  icon={<BsGithub />}
                  target="_blank"
                />
              )}
            </div>
          </div>
          <p className="text-sm text-justify font-[100]">{description}</p>
        </div>
        <div className="px-3 py-4 font-[200]">
          {tech?.map((item) => (
            <span
              key={item}
              className="inline-block py-1 pr-2 mr-1 text-xs border-gray-200 rounded-full text-cyan-200"
            >
              #{item}
            </span>
          ))}
        </div>{" "}
      </div>
    </AnimatedScrollWrapper>
  );
}
