import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import AnimatedWrapper from "../../utils/animatedWarpper";
function SkillSection() {
  return (
    <AnimatedWrapper>
      <section id="Skills" className="pb-20 pt-3">
        <div className="container px-4 mx-auto">
          <h1 className="text-2xl font-semibold">Skills</h1>
          <div className="text-justify mb-4 text-lg text-black font-[400] lg:font-light">
            I have a solid foundation in technologies such as React, Node,
            Python, and I also have experience in other tech stacks. I am always
            eager to learn new technologies.
          </div>
          <div className="flex flex-row justify-between">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
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
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
}

export default SkillSection;
