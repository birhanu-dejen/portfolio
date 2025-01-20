import Card from "../card/card";
function Project() {
  return (
    <div
      className="flex flex-col
    "
    >
      <h1 className="ml-9 mb-4"> projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className=" w-auto flex items-center justify-center">
        <button>show more button</button>
      </div>
    </div>
  );
}
export default Project;
