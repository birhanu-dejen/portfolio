const skills = [
  {
    name: "Typescript",
    icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    name: "NodeJs",
    icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },

  {
    name: "Mongo DB",
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "Postgres",
    icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "React",
    icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },

  {
    name: "Firebase",
    icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "Python",
    icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
];

function Skill() {
  return (
    <section id="Skills" className="pb-20 pt-3 ">
      <div className="container px-4 mx-auto ">
        <h1 className=" text-2xl font-semibold">Skills</h1>
        <div className="text-justify mb-4 text-lg">
          I have expertise in technologies such as React, Node, Python, and I
          also have experience in other tech stacks. and always eager to learn
          new technologies.
        </div>
        <div className="flex  flex-row justify-between ">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="flex items-center justify-center w-9 h-9 rounded-full shadow-xl"
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                loading="lazy"
                width={26}
                height={26}
                className="hover:grayscale"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skill;
