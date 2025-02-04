import Card from "../card/portfolioCard";
import { projects } from "../../data/projects";

function Project() {
  return (
    <section id="Projects">
      <div
        className="container px-4 mx-auto
    "
      >
        <h1 className=" mb-4 text-2xl font-semibold"> projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mt-4">
          {projects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </div>
        <div className=" p-4 flex items-center justify-center">
          <button className="text-black font-[100px] text-[18px] hover:text-blue-700">
            show more
          </button>
        </div>
      </div>
    </section>
  );
}
export default Project;
