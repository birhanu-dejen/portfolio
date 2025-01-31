import ExperianceCard from "../card/experianceCard";

function Experience() {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ol className="border-l border-neutral-500">
          <li>
            {" "}
            <ExperianceCard />
          </li>
        </ol>
      </div>
    </section>
  );
}
export default Experience;
