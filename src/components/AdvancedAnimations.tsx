"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AdvancedAnimations() {
  // Example of scroll-driven fade-in using Intersection Observer and Framer Motion
  const fadeInRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (fadeInRef.current) {
      observer.observe(fadeInRef.current);
    }
    return () => {
      if (fadeInRef.current) {
        observer.unobserve(fadeInRef.current);
      }
    };
  }, [controls]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Example SVG path animation on load
  const svgPathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="advanced-animations">
      <h2 className="text-4xl font-bold mb-12 text-center">Advanced Animations</h2>

      <motion.div
        ref={fadeInRef}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="mb-16 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">Scroll-driven Fade-in</h3>
        <p>This content fades in smoothly as you scroll down.</p>
      </motion.div>

      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="mx-auto mb-16 text-black dark:text-white"
        initial="hidden"
        animate="visible"
        variants={svgPathVariants}
      >
        <motion.path
          d="M10 80 C 40 10, 65 10, 90 80"
          strokeLinecap="round"
          variants={svgPathVariants}
        />
      </motion.svg>

      {/* Parallax effect example using CSS */}
      <div className="relative h-64 overflow-hidden rounded-lg mb-16">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-600 transform-gpu will-change-transform parallax-bg"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-3xl font-bold">
          Parallax Effect (CSS only)
        </div>
      </div>

      <style jsx>{`
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
