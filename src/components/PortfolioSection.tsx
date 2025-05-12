"use client";
import { Project } from "@/data/types";
import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";

interface PortfolioSectionProps {
  projects: Project[];
}

export default function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    setVisibleCount((prev) => (prev === 3 ? projects.length : 3));
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleProjects.map((project: Project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
        {projects.length > 3 && (
          <div className="flex justify-center items-center p-4">
            <button
              onClick={handleToggle}
              className="font-medium cursor-pointer"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
