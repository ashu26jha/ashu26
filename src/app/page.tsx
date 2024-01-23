"use client"
import React from "react";
import MultiLayerParallax from "../../components/MultiLayerParallax";
import OpenSource from "../../components/OpenSource";
import About from "../../components/About";
import Projects from "../../components/Projects";

export default function () {
  

  return (
    <div>
      <MultiLayerParallax />
      <About/>
      <OpenSource/>
      <Projects/>
    </div>
  );
}
