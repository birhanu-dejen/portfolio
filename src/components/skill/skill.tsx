import styles from "./skill.module.css";
const skills = [
  {
    name: "Node.js",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "React.js",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  {
    name: "React Native",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  {
    name: "PostgreSQL",
    icon: "https://img.icons8.com/color/48/000000/postgresql.png",
  },
  { name: "Python", icon: "https://img.icons8.com/color/48/000000/python.png" },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/48/000000/typescript.png",
  },
  { name: "Rust", icon: "https://img.icons8.com/color/48/000000/rust.png" },
  { name: "API", icon: "https://img.icons8.com/color/48/000000/api.png" },
  { name: "Git", icon: "https://img.icons8.com/color/48/000000/git.png" }, // Added Git
];
function Skill() {
  return (
    <section>
      <h2>Skills</h2>
      <div className={styles.intro}>
        I have expertise in technologies such as React, Node, Python, and I also
        have experience in other tech stacks. and always eager to learn new
        technologies.
      </div>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className={styles.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skill;
