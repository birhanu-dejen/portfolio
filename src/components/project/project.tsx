import Card from "../card/portfolioCard";
import { projects } from "../../data/projects";
import { useState } from "react";

function ProjectSection() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section id="Projects">
      <div className="container px-4 mx-auto">
        <h1 className="mb-4 text-2xl font-semibold">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {projects.slice(0, visibleProjects).map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </div>

        {visibleProjects < projects.length ? (
          <div className="p-4 flex items-center justify-center">
            <button
              className="text-black font-bold text-[18px] hover:text-blue-700"
              onClick={loadMoreProjects}
            >
              Show More
            </button>
          </div>
        ) : (
          <div className="p-4 flex items-center justify-center">
            <button
              className="text-gray-800 font-light text-[18px] cursor-not-allowed"
              disabled
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectSection;
