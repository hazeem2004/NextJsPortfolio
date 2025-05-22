"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML, CSS, JavaScript", level: 90 },
      { name: "Blazor Server (.NET 8)", level: 85 },
      { name: "Bootstrap / Tailwind CSS", level: 85 },
      { name: "React", level: 70 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "C#", level: 85 },
      { name: ".NET 8", level: 85 },
      { name: "Entity Framework Core", level: 80 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git, GitHub, GitBash", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Jenkins", level: 70 },
      { name: "CI/CD Pipelines", level: 70 },
      { name: "Gmail & Google Chat Integration", level: 75 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQLite (local)", level: 80 },
      { name: "SQL (queries and joins)", level: 75 },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "LiveChartsCore", level: 80 },
      { name: "IJSRuntime for Blazor", level: 80 },
      { name: "VS Code, Visual Studio, Postman", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="skills">
      <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
            {category.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: { name: string; level: number } }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${skill.level}%`,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [isInView, controls, skill.level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm font-medium">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
}
