import { motion } from "framer-motion";

const AnimatedWrapper = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            // delay: 0.25,
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
