"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill } from "@/data/types";
import AnimatedScrollWrapper from "./shared/AnimatedScrollWrapper";

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  // Use consistent animation values that don't rely on random generation
  const animateVariants = {
    hidden: {
      opacity: 0,
      y: -20, // Fixed value instead of random
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
      },
    },
  };

  return (
    <AnimatedScrollWrapper>
      <section className="py-4 bg-gradient-to-r from-gray-700 to-cyan-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-semibold">Skills</h2>

          <div className="text-justify mb-4 font-[100]">
            I have expertise in technologies such as React, Node, Python, Java,
            and I also have experience in other tech stacks. and always eager to
            learn new technologies.
          </div>

          <div className="flex flex-row justify-between">
            {skills.map(({ name, icon }) => (
              <motion.span
                key={name}
                variants={animateVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Only animate once
                className="flex items-center justify-center w-8 h-8 rounded-full shadow-xl bg-gradient-to-r from-gray-700 to-cyan-800"
              >
                <Image
                  src={icon}
                  alt={name}
                  width={22}
                  height={22}
                  className="hover:grayscale"
                />
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </AnimatedScrollWrapper>
  );
}
