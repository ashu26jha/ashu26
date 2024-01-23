"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);

  return (
    <div>


      <div
        ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center"
      >
        <motion.h1
          style={{ y: textY }}
          className="font-bold text-white text-7xl md:text-9xl relative z-10"
        >
          Ashutosh.
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/image-full.jpg)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(/image-bottom.jpg)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <a href="#projects" className="z-40"><div><i className="arrow down"></i></div></a>
      </div>
      <div className="bg-black p-4 flex">
        <div className="subpixel-antialiased font-medium text-3xl  text-white">
          Ashutosh
        </div>
        <div className="subpixel-antialiased font-medium text-xl mt-auto ml-auto mr-6 text-white">
          <a href="#projects">Projects</a>
        </div>
        <div className="subpixel-antialiased font-medium text-xl mt-auto mr-6 text-white">
          <a href="#open-source">Contributions</a>
        </div>
      </div>

      <div className="w-full bg-[#06141D]">
        <div className="pl-10 pt-10">
          <div id="projects">
            <div className="text-white text-2xl">
              Projects
            </div>

            <ul className="ml-4">
              <li className="text-white mt-4  bg-slate-800 ">
                <h1 className="text-xl m-auto p-2">
                  Wis3
                </h1>
                <div className="text-sm	italic ml-4">
                  A fullstack decentralised courselling dApp
                </div>
                <div className="ml-4 mt-4 flex">
                  <ul>
                    <li>
                      Developed  full-stack course selling web-3 application using smart contracts with NextJS as the frontend
                    </li>
                    <li>
                      Developed a full-stack course selling web-3 application using smart contracts with NextJS as the frontend
                    </li>
                  </ul>
                  <img src="wis3.jpeg" className="w-1/2 h-1/2"/>
                </div>
              </li>
              <li>
                Li-NFT
              </li>

            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
          </div>
          <div id="open-source">
            <div className="text-white text-2xl ">
              Open Source Contributions
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
        </div>
      </div>
    </div>
  );
}
