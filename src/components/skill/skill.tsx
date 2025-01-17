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
  {
    name: "AWS",
    icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
];

function Skill() {
  return (
    <section>
      <h2>Skills</h2>
      <div>
        I have expertise in technologies such as React, Node, Python, and I also
        have experience in other tech stacks. and always eager to learn new
        technologies.
      </div>
      <div>
        {skills.map((skill, index) => (
          <span key={index}>
            <img src={skill.icon} alt={`${skill.name} icon`} />
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skill;
