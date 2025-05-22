"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const timelineItems = [
  {
    id: 1,
    year: "2023",
    title: "Senior Web Developer",
    company: "Awesome Company",
    description: "Led frontend development and implemented advanced animations.",
  },
  {
    id: 2,
    year: "2021",
    title: "Frontend Developer",
    company: "Tech Startup",
    description: "Built responsive web apps with React and Tailwind CSS.",
  },
  {
    id: 3,
    year: "2019",
    title: "Junior Developer",
    company: "Web Agency",
    description: "Assisted in building client websites and improving UI/UX.",
  },
  // Add more timeline items as needed
];

export default function Resume() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20" id="resume">
      <h2 className="text-4xl font-bold mb-12 text-center">Resume</h2>
      <div className="relative border-l-4 border-blue-600 dark:border-blue-400 pl-8">
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.id} item={item} isLast={index === timelineItems.length - 1} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  isLast,
}: {
  item: { id: number; year: string; title: string; company: string; description: string };
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      className="mb-12 relative"
    >
      <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-black"></div>
      <time className="text-blue-600 dark:text-blue-400 font-semibold">{item.year}</time>
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="italic mb-2">{item.company}</p>
      <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
      {!isLast && <div className="border-l-2 border-blue-600 dark:border-blue-400 absolute left-0 top-8 bottom-0 ml-1"></div>}
    </motion.div>
  );
}
