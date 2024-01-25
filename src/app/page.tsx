"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    let section = document.querySelectorAll('section');
    let menu = document.querySelectorAll('header nav a');
    window.onscroll = () => {
      section.forEach(i => {
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
        let height = i.offsetHeight;
        console.log(top, " ", offset + 150, height)
        if (top < offset - 2500) {
          setShowNavbar(false)
        }

        let id = i.getAttribute('id');

        if (top >= offset && top < offset + height) {
          menu.forEach(link => {
            link.classList.remove('active');
            let selectedLink = document.querySelector('header nav a[href*=' + id + ']');
            if (top > offset) {
              setShowNavbar(true);
            }

            if (selectedLink) {
              selectedLink.classList.add('active');
            }
          });
        }
      });
    };

    // Cleanup the event handler when the component unmounts
    return () => {
      window.onscroll = null;
    };
  }, []);


  return (
    <div>
      <header>
        <nav className={`z-50 fixed bg-slate-900 w-full ml-auto flex items-center transition-all duration-500 ${showNavbar ? 'visible' : 'hidden'} `}>
          <div className="navhead z-50 mr-auto ml-4 font-ubuntu text-2xl"><img src="logo.png" className="w-1/6" /></div>
          <a href="#projects" className="ml-auto mr-2 tags"><Fade>Projects</Fade></a>
          <a href="#open-source" className="ml-auto mr-2 tags"><div className="tags"><Fade>Open Source</Fade></div></a>
          <a href="#achievements" className="ml-auto mr-2 tags"><Fade>Achievements</Fade></a>
          <a href="#contact" className="ml-auto mr-2 tags">Contact</a>
        </nav>
      </header>

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

      <div className="w-full bg-[#06141D]">
        <div className="w-4/5 pt-10 m-auto">

          <section id="projects">


            <div >
              <div className="text-white text-4xl font-fira font-bold">
                Projects
              </div>

              <ul className="ml-4">
                <Fade duration={2000}>
                  <li className="text-white mt-16 bg-slate-800 rounded-3xl p-4">

                    <div className="flex">
                      <div className="w-5/6">
                        <h1 className="m-auto p-2 font-ubuntu text-3xl">
                          Wis3
                        </h1>
                        <div className="text-sm	italic ml-4 mt-4 text-slate-300">
                          A fullstack decentralised courselling dApp
                        </div>
                        <ul>
                          <li className="ml-4 mt-4">
                            Timstamps created through ComposeDB from a backend server, Refunds dealt through DAO with weightage on course completion
                          </li>
                          <li className="flex h-1/6 mt-6 ml-2">
                            <div className=" ml-2 mt-auto mb-auto h-1/12">TypeScript</div> <img src="ts.png" className="ml-1 w-1/12 h-1/6" />
                            <div className=" ml-2 mt-auto mb-auto h-1/12">NodeJS</div> <img src="node.png" className="ml-1 w-1/12 h-1/6" />
                          </li>
                          <li className="flex ml-4 mt-4 mb-8">
                            <Link href={"https://github.com/ashu26jha/courseselling"} className="flex"><div className="mt-auto mb-auto mr-2 ">GitHub</div> <img src="github.png" className="w-1/12 github" /></Link>
                            <Link href={"https://ethglobal.com/showcase/wis3-91a0v"} className="flex"><div className="mt-auto mb-auto mr-2 ">Link</div> 🔗 </Link>
                          </li>
                          <li className="ml-4 mt-4">
                            Ceramic 1<sup>st</sup> 🥇 prize
                          </li>
                          <li className="ml-4 mb-4">
                            Huddle01 3<sup>rd</sup> 🥉 prize
                          </li>
                        </ul>
                      </div>
                      <div className="ml-auto m-auto test  md:ml-4">
                        <img src="wis3.jpeg" className="w-11/12 max-w-3xl rounded-3xl ml-4" />
                      </div>

                    </div>

                  </li>
                </Fade>

                <Fade duration={2000}>
                  <li className="text-white mt-16 bg-slate-800 rounded-3xl p-4 ">
                    <div className="flex">
                      <div className="w-5/6">
                        <h1 className="m-auto p-2 font-ubuntu text-3xl">
                          Li - NFT
                        </h1>
                        <div className="text-sm	italic ml-4 mt-4 text-slate-300">
                          Crosschain NFT Marketplace
                        </div>
                        <ul>
                          <li className="ml-4 mt-4">
                            Create unique NFTs with a single prompt, mint the ones you love, and sell them on our marketplace to earn real rewards. Plus, showcase your style with your NFT avatar in your chats.                      </li>
                          <li className="flex h-1/6 mt-6 ml-4">
                            <div className="mt-auto mb-auto">GraphQL</div> <img src="graphql.png" className="ml-1 w-1/12" />
                            <div className=" ml-2 mt-auto mb-auto">Rust</div> <img src="rust.png" className=" w-1/12 ml-2" />
                          </li>
                          <li className="flex ml-4 mt-4 mb-4">
                            <Link href={"https://github.com/ashu26jha/linera-help"} className="flex"><div className="mt-auto mb-auto mr-2">GitHub</div> <img src="github.png" className="w-1/12 github" /></Link>
                            <Link href={"https://dorahacks.io/hackathon/linera-autumn-2023/detail"} className="flex"><div className="mt-auto mb-auto mr-2">Link</div> 🔗 </Link>
                          </li>
                          <li className="ml-4 mt-4 mb-4">
                            Linera summer school 2<sup>nd</sup> 🥈 prize
                          </li>
                        </ul>
                      </div>
                      <div className="ml-auto m-auto">
                        <img src="linft.png" className="w-11/12 max-w-3xl h-11/ rounded-3xl ml-4" />
                      </div>
                    </div>
                  </li>
                </Fade>

                <Fade duration={2000}>
                  <li className="text-white mt-16  bg-slate-800 rounded-3xl p-4">
                    <div className="flex">
                      <div className="w-5/6">
                        <h1 className="font-ubuntu text-3xl m-auto p-2">
                          Token Hunt
                        </h1>
                        <div className="text-sm	italic ml-4 mt-4 text-slate-300">
                          NFT Raffle
                        </div>
                        <ul>
                          <li className="ml-4 mt-4">
                            Create AI generated NFTs, earn money by putting it in a raffle. Completely decentralised frontend created with help specially tailored serialisation and deserialisation logic on Hedera testnet
                          </li>
                          <li className="flex h-1/6 mt-6 ml-4">
                            <div className="mt-auto mb-auto">JavaScript</div> <img src="javascript.png" className="ml-1 w-1/12 h-1/6 m-auto" />
                          </li>
                          <li className="flex ml-4 mt-4 mb-4">
                            <Link href={"https://github.com/ashu26jha/token_hunt"} className="flex"><div className="mt-auto mb-auto mr-2">GitHub</div> <img src="github.png" className="w-1/12 github" /></Link>
                            <Link href={"https://devpost.com/software/token-hunt"} className="flex"><div className="mt-auto mb-auto mr-2">Link</div> 🔗 </Link>
                          </li>
                          <li className="ml-4 mt-4 mb-4">
                            MLH Web3Apps - Hedera 1<sup>st</sup> 🥇 prize
                          </li>
                        </ul>
                      </div>
                      <div className="ml-auto m-auto">
                        <img src="tokenhunt.png" className="w-11/12 max-w-3xl rounded-3xl ml-4" />
                      </div>
                    </div>
                  </li>
                </Fade>
              </ul>
            </div>
          </section>

          <section id="open-source">
            <div className="mt-16">
              <div className="text-white text-4xl font-fira font-bold">
                Open Source
              </div>
              <ul className="ml-4">
                <li className="text-white mt-16 bg-slate-800 rounded-3xl p-4">
                  <div className="text-2xl">
                    UI Enhancement
                  </div>
                  <div className="mt-4 flex">
                    Complete overhaul of Ceramic forum UI. <Link href={"https://staging-forum.ceramic.network/"} className="flex"><div className="mt-auto mb-auto mr-2 ml-1"> Link 🔗</div></Link>
                  </div>

                </li>

                <li className="text-white mt-8 bg-slate-800 rounded-3xl p-4">
                  <div className="text-2xl">
                    Brew Formula
                  </div>
                  <div className="mt-4 flex">
                    Created a brew formula in Ruby, for wheel to be installable via brew - MacOS package manager. <Link href={"https://github.com/ceramicstudio/wheel/pull/25"} className="flex"><div className="mt-auto mb-auto mr-2 ml-1"> Link 🔗</div></Link>
                  </div>
                </li>

                <li className="text-white mt-8 bg-slate-800 rounded-3xl p-4">
                  <div className="text-2xl">
                    Subscribe chains
                  </div>
                  <div className="mt-4 flex">
                    Created a CLI for a chain to subscribe / unsubsribe to other chains. <Link href={"https://github.com/linera-io/linera-protocol/pull/1489"} className="flex"><div className="mt-auto mb-auto mr-2 ml-1"> Link 🔗</div></Link>
                  </div>
                </li>
              </ul>

            </div>
          </section>

          <section id="achievements">
            <div className="mt-16">
              <div className="text-white text-4xl font-fira font-bold">
                Achievements
              </div>
              <ul className="ml-4">
                <Fade>
                  <li className="text-white mt-16 bg-slate-800 rounded-3xl p-4">
                    <div className="text-2xl">
                      🏆 Hackathons 👨🏻‍💻
                    </div>
                    <div className="mt-4 flex">
                      Winner at 5 different Hackathons as solo and team participant
                    </div>
                    <ul className="ml-4 mt-4">
                      <li className=""><a href="https://ethglobal.com/showcase/wis3-91a0v">1. HackFS&apos;23 - ETHGlobal: <b>1<sup>st</sup></b> prize - Ceramic, <b>3<sup>rd</sup></b> prize - Huddle01  🔗</a></li>
                      <li className="mt-2"><a href="https://devpost.com/software/token-hunt">2. Web3Apps - MLH: <b>1<sup>st</sup></b> prize - Hedera &apos;Best use case&apos;  🔗</a> </li>
                      <li className="mt-2"><a href="https://dorahacks.io/hackathon/linera-autumn-2023/detail">3. Linera Autumn School - Linera: <b>2<sup>nd</sup></b> prize - Linera  🔗</a> </li>
                      <li className="mt-2"><a href="https://ethglobal.com/showcase/snaplink-j2v75">4. ETHOnline&apos;23 - ETHGlobal: <b>3<sup>rd</sup></b> pool prize - UMA 🔗</a></li>
                      <li className="mt-2"><a href="https://ethglobal.com/showcase/ezcred-dfary">5. ETHIndia&apos;23 - ETHGlobal: <b>3<sup>rd</sup></b> prize - 1inch 🔗</a></li>
                    </ul>

                  </li>
                </Fade>
                <li className="text-white mt-8 bg-slate-800 rounded-3xl p-4">
                  <div className="text-2xl">
                    Teaching 📖
                  </div>
                  <div className="mt-4 flex">
                    Blockchain instructor - Localhost - IIIT Pune
                  </div>
                </li>

                <li className="text-white mt-8 bg-slate-800 rounded-3xl p-4">
                  <div className="text-2xl">
                    Data structure & Algorithms
                  </div>
                  <div className="mt-4 flex">
                    Solved over 200+ problems
                  </div>
                </li>
              </ul>

            </div>
          </section>

          <footer>
            <div className="flex justify-center items-center w-full">
              <a className=" githubimg w-1/3" href="https://github.com/ashu26jha"><img src="github.png" ></img></a>
              <a className="m-4 ml-6 w-1/3 linkedinimg" href="https://www.linkedin.com/in/ashutosh-jha-6b57451b8/"><img src="linkedin.png" className="w-full" ></img></a>
              <a className=" twitterimg w-1/3" href="https://twitter.com/ashu26jha"><img src="twitter.png" ></img></a>
            </div>
            Resume EMAIL
          </footer>

        </div>
      </div>
    </div>
  );
}
