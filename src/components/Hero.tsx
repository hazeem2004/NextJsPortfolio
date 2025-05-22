"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Hero() {
  const controls = useAnimation();
  const svgPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    controls.start({
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 px-6 text-center">
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="mb-8 text-black dark:text-white"
      >
        <motion.path
          ref={svgPathRef}
          d="M10 80 C 40 10, 65 10, 90 80"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
      </motion.svg>
      <h1 className="text-5xl font-extrabold mb-4">Hi, I&apos;m Hazeem</h1>
      <p className="text-xl max-w-2xl leading-relaxed mb-8">
        A passionate Front-End and .NET Developer based in Islamabad. I specialize in building responsive, 
        user-centric web applications using Blazor (.NET 8), C#, and modern front-end technologies.
      </p>
      <p className="text-lg max-w-2xl leading-relaxed">
        I&apos;m currently pursuing my Associate Degree in Computer Science from Air University and working on 
        real-world projects like POS systems and universal e-commerce platforms to sharpen my skills. 
        I&apos;m on a mission to grow into a full-stack engineer with a strong foundation in backend, cloud, and DevOps.
      </p>
    </section>
  );
}
