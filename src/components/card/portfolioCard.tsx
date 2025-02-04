import { IProject } from "../../data/types";
import { BsGithub } from "react-icons/bs";
import AnimatedWrapper from "../../utils/animatedWarpper";
import { FiExternalLink } from "react-icons/fi";
interface PortfolioCardProps {
  project: IProject;
}

function Card({ project }: PortfolioCardProps) {
  const { title, description, tech, image, previewLink, githubLink } = project;
  return (
    <AnimatedWrapper>
      <div
        className="rounded-lg border-solid border-[0.5px] border-gray-400 overflow-hidden flex flex-col
     md:hover: drop-shadow-lg cursor-pointer md:hover:shadow-2xl md:hover:scale-[102%] transition-transform duration-300 md:min-h-[360px] "
      >
        <img
          className="w-full max-h-48 object-cover "
          src={image}
          alt={`screenshot of ${project.title}`}
          width={400}
          height={300}
          loading="lazy"
        />
        <div className="px-3 py-2 mb-auto flex-grow bg-blue-900 ">
          <div>
            <span className="font-semibold text-lg  text-white">{title}</span>
            <div className="text-md  flex flex-row justify-end">
              <a
                href={previewLink}
                rel="noopener noreferrer"
                className="px-1 underline hover:text-cyan-500"
                target="_blank"
              >
                <FiExternalLink className="text-white hover:text-cyan-500" />
              </a>
              <a
                href={githubLink}
                rel="noopener noreferrer"
                className="px-1 underline  hover:text-cyan-500"
                target="_blank"
              >
                <BsGithub className="text-white hover:text-cyan-500" />
              </a>
            </div>
            <p className="text-md text-justify font-[100] text-white">
              {description}
            </p>
          </div>
          <div className="px-3 py-4 font-[200]">
            {tech?.map((item: string) => (
              <span
                key={item}
                className="inline-block  border-gray-200 rounded-full pr-2 py-1 text-sm mr-1 text-blue-300"
              >
                #{item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default Card;
