"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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
                <div className="flex">
                  <div className="w-5/6">
                    <h1 className="text-xl m-auto p-2">
                      Wis3
                    </h1>
                    <div className="text-sm	italic ml-4 mt-4">
                      A fullstack decentralised courselling dApp
                    </div>
                    <ul>
                      <li className="ml-4 mt-4">
                        Timstamps created through ComposeDB from a backend server, Refunds dealt through DAO with weightage on course completion
                      </li>
                      <li className="flex h-1/6 mt-6 ml-4">
                        <div className="mt-auto mb-auto">GraphQL</div> <img src="graphql.png" className="ml-1 w-1/12" />
                        <div className=" ml-2 mt-auto mb-auto">TypeScript</div> <img src="ts.png" className="ml-1 w-1/12" />
                        <div className=" ml-2 mt-auto mb-auto">NodeJS</div> <img src="node.png" className="ml-1 w-1/6" />
                      </li>
                      <li className="flex ml-4 mt-4 mb-8">
                        <Link href={"https://github.com/ashu26jha/courseselling"} className="flex"><div className="mt-auto mb-auto mr-2">GitHub</div> <img src="github.png" className="w-1/12" /></Link>
                        <Link href={"https://ethglobal.com/showcase/wis3-91a0v"} className="flex"><div className="mt-auto mb-auto mr-2">Link</div> <img src="link.png" className="w-1/12" /></Link>
                      </li>
                      <li className="ml-4 mt-4">
                        Ceramic 1<sup>st</sup> 🥇 prize
                      </li>
                      <li className="ml-4 mb-4">
                        Huddle01 3<sup>rd</sup> 🥉 prize
                      </li>
                    </ul>
                  </div>
                  <div className="ml-auto">
                    <img src="wis3.jpeg" className="w-auto h-full max-w-3xl" />
                  </div>
                </div>
              </li>
              <li className="text-white mt-4  bg-slate-800 ">
                <div className="flex">
                <div className="w-5/6">
                    <h1 className="text-xl m-auto p-2">
                      Li - NFT
                    </h1>
                    <div className="text-sm	italic ml-4 mt-4">
                      A fullstack decentralised courselling dApp
                    </div>
                    <ul>
                      <li className="ml-4 mt-4">
                      Create unique NFTs with a single prompt, mint the ones you love, and sell them on our marketplace to earn real rewards. Plus, showcase your style with your NFT avatar in your chats.                      </li>
                      <li className="flex h-1/6 mt-6 ml-4">
                        <div className="mt-auto mb-auto">JavaScript</div> <img src="javascript.png" className="ml-1 w-1/12" />
                        <div className=" ml-2 mt-auto mb-auto">Rust</div> <img src="rust.png" className="ml-1 w-1/6" />
                      </li>
                      <li className="flex ml-4 mt-4 mb-4">
                        <Link href={"https://github.com/ashu26jha/linera-help"} className="flex"><div className="mt-auto mb-auto mr-2">GitHub</div> <img src="github.png" className="w-1/12" /></Link>
                        <Link href={"https://dorahacks.io/hackathon/linera-autumn-2023/detail"} className="flex"><div className="mt-auto mb-auto mr-2">Link</div> <img src="link.png" className="w-1/12" /></Link>
                      </li>
                      <li className="ml-4 mt-4 mb-4">
                        Linera summer school 2<sup>nd</sup> 🥈 prize
                      </li>
                    </ul>
                  </div>
                  <div className="ml-auto">
                    <img src="linft.png" className="w-auto h-full max-w-3xl"/>
                  </div>
                </div>
              </li>
              <li className="text-white mt-4  bg-slate-800 ">
                <div className="flex w-3/4">
                  <div className="">
                    <h1 className="text-xl m-auto p-2">
                      Li-NFT
                    </h1>
                    <div className="text-sm	italic ml-4 mt-4">
                      Cross-Chain NFT Marketplace
                    </div>
                    <ul className="">
                      <li className="ml-4 mt-4">
                      Create unique NFTs with a single prompt, mint the ones you love, and sell them on our marketplace to earn real rewards. Plus, showcase your style with your NFT avatar in your chats.
                      </li>
                      <li className="flex h-1/6 mt-6 ml-4">
                        <div className="mt-auto mb-auto">JavaScript</div> <img src="javascript.png" className="ml-1 w-1/12" />
                        <div className=" ml-2 mt-auto mb-auto">Rust</div> <img src="rust.png" className="ml-1 w-1/6" />
                      </li>
                      <li className="flex ml-4 mt-4 mb-4">
                        <Link href={"https://github.com/ashu26jha/linera-help"} className="flex"><div className="mt-auto mb-auto mr-2">GitHub</div> <img src="github.png" className="w-1/12" /></Link>
                        <Link href={"https://dorahacks.io/hackathon/linera-autumn-2023/detail"} className="flex"><div className="mt-auto mb-auto mr-2">Link</div> <img src="link.png" className="w-1/12" /></Link>
                      </li>

                    </ul>
                  </div>
                  <div className="m-auto">
                    <img src="linft.png" className="w- m-4 ml-auto" />
                  </div>
                </div>
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
