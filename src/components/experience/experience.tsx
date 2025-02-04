import ExperienceCard from "../card/experienceCard";
import workExperience from "../../data/workExperience";

function ExperienceSection() {
  return (
    <section className="pt-8 pb-6">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold pb-4">Experience</h2>
        <ol className="border-l border-neutral-500">
          {workExperience.map((experience, index) => (
            <li key={index} className="text-lg">
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ExperienceSection;
