import ExperianceCard from "../card/experianceCard";

function Experience() {
  return (
    <section className="pt-8 pb-6">
      <div className="container mx-auto px-6 ">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ol className="border-l border-neutral-500">
          <li className="text-lg">
            <ExperianceCard />
            <ExperianceCard />
            <ExperianceCard />
          </li>
        </ol>
      </div>
    </section>
  );
}
export default Experience;
