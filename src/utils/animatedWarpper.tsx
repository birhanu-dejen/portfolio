import { motion } from "framer-motion";
import { AnimatedWrapperProps } from "../data/types";
const AnimatedWrapper = ({ children }: AnimatedWrapperProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
