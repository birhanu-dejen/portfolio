import Card from "../card/portfolioCard";
function Project() {
  return (
    <section id="Projects">
      <div
        className="flex flex-col px-4 mx-auto
    "
      >
        <h1 className="ml-9 mb-4 text-2xl font-semibold"> projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ">
          <Card />

          <Card />
          <Card />
        </div>
        <div className=" p-4 flex items-center justify-center">
          <button>show more</button>
        </div>
      </div>
    </section>
  );
}
export default Project;
