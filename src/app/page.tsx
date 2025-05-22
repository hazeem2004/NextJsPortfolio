"use client";

import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import AdvancedAnimations from "../components/AdvancedAnimations";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <AdvancedAnimations />
    </>
  );
}
