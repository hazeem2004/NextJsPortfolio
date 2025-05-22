"use client";

import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "POS System",
    subtitle: "Blazor, .NET 8, SQLite",
    role: "Full-Stack Developer",
    description: "A full-featured point-of-sale system with comprehensive business management capabilities.",
    features: [
      "Business registration",
      "Category & product management",
      "Daily menu handling",
      "Dynamic POS terminal",
      "Sales reporting with charts (LiveCharts2)",
      "CSV & PDF exports"
    ],
    techStack: "Blazor Server, .NET 8, SQLite, LiveCharts2, IJSRuntime",
    github: "https://github.com/yourusername/pos-system",
    demo: "https://pos-system-demo.com",
    image: "/pos-system.png"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    subtitle: "React, .NET Core, SQL Server",
    role: "Frontend Developer",
    description: "A universal e-commerce platform with modern features and responsive design.",
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Order management",
      "Payment integration",
      "Admin dashboard"
    ],
    techStack: "React, .NET Core, SQL Server, Entity Framework",
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-platform-demo.com",
    image: "/ecommerce.png"
  },
  {
    id: 3,
    title: "DevOps Pipeline",
    subtitle: "Jenkins, Docker, GitHub Actions",
    role: "DevOps Engineer",
    description: "Automated CI/CD pipeline for seamless deployment and integration.",
    features: [
      "Automated testing",
      "Docker containerization",
      "Continuous integration",
      "Automated deployment",
      "Monitoring integration",
      "Email notifications"
    ],
    techStack: "Jenkins, Docker, GitHub Actions, Shell Scripts",
    github: "https://github.com/yourusername/devops-pipeline",
    demo: "https://pipeline-demo.com",
    image: "/pipeline.png"
  }
];

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-8 p-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-blue-600 dark:text-blue-400">{project.subtitle}</p>
          <p className="font-semibold">Role: {project.role}</p>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          <div className="space-y-2">
            <h4 className="font-semibold">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Tech Stack:</span> {project.techStack}
          </p>
          <div className="flex space-x-4 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="relative h-64 md:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}
