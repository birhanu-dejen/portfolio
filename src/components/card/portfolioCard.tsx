import Project from "../../data/types";
interface PortfolioCardProps {
  project: Project;
}

function Card({ project }: PortfolioCardProps) {
  const { title, description, tech, image, previewLink, githubLink } = project;
  return (
    <div
      className="rounded-lg border-solid border-[0.5px] border-gray-400 overflow-hidden flex flex-col
     md:hover: drop-shadow-lg cursor-pointer md:hover:shadow-2xl md:hover:scale-[102%] transition-transform duration-300 md:min-h-[360px] "
    >
      <img
        className="w-full max-h-48 object-cover "
        src={image}
        alt="project image"
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
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
              </svg>
            </a>
            <a
              href={githubLink}
              rel="noopener noreferrer"
              className="px-1 underline  hover:text-cyan-500"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
              </svg>
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
  );
}

export default Card;
