import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsArrowBarRight, BsArrowDown, BsArrowRight } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import HomeLogic from "./HomeLogic";
import {
  BiArrowFromRight,
  BiArrowToRight,
  BiLinkExternal,
} from "react-icons/bi";
import SkillMarquee from "../../components/SkillMarquee/SkillMarquee";

function Home() {
  const initial = { opacity: 0, y: 30 };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: 1, ease: "easeIn" };

  const { contributions } = HomeLogic();

  const [activeContribution, setActiveContribution] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  });

  const animateIn = inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 };

  return (
    <div className="pb-24">
      <motion.div className="w-full relative flex flex-col min-h-[95vh] sm:min-h-screen items-center justify-start md:justify-center pt-44 md:pt-0 md:pb-20 gap-8 p-2 z-10">
        <motion.h1
          initial={initial}
          animate={animate}
          transition={transition}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-[3rem] sm:leading-[4rem] md:leading-[4.5rem] max-w-[95%] md:max-w-[80%]"
        >
          Hi, I'm Pranay Goel
          <br />a web developer
        </motion.h1>
        <motion.p
          initial={{ ...initial, y: -30 }}
          animate={animate}
          transition={{ ...transition }}
          className="px-8 md:px-0 md:max-w-[35%] 3xl:max-w-[30%] text-center"
        >
          I build scalable and reliable web applications from stable backend and
          frontend libraries and frameworks that work.
        </motion.p>
        <motion.div
          initial={{ ...initial, y: 30 }}
          animate={animate}
          transition={{ ...transition, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center text-sm md:text-base"
        >
          <Link
            to={"https://github.com/pranaygoel02"}
            target="_blank"
            className="btn"
          >
            <IoLogoGithub className="text-xl" />
            <p>View GitHub Profile</p>
          </Link>
          <div className="btn">
            <span className="w-3 h-3 aspect-square rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-xl"></span>
            <p>I'm open for jobs!</p>
          </div>
        </motion.div>
        <div className="text-center flex flex-col items-center justify-center gap-2 text-xs mt-12 sm:mt-0 sm:absolute bottom-[22%]">
          <BsArrowDown className="text-xl animate-bounce" />
          <span>Scroll Down</span>
        </div>
      </motion.div>
      <SkillMarquee />
      <motion.div className="container mt-8">
        <motion.h2
          animate={animateIn}
          ref={ref}
          className="text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[4rem] md:max-w-[65%]"
        >
          Some of my notable contributions to the community
        </motion.h2>
        <motion.div
          animate={animateIn}
          ref={ref}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-5 xl:grid-cols-3 py-8 gap-y-8 w-full"
        >
          <motion.ul className="flex flex-row overflow-auto flex-wrap w-full md:flex-col md:col-span-2 xl:col-span-1 gap-4  pl-6 md:p-8 border-l-2 border-neutral-800">
            {contributions?.map((item, idx) => (
              <>
                <motion.li
                  onClick={(e) => {
                    e?.preventDefault();
                    setActiveContribution((prev) => idx);
                  }}
                  className={`btn w-max text-sm cursor-pointer relative ${
                    activeContribution === idx
                      ? "outline-white active-contribution"
                      : "opacity-60"
                  }`}
                >
                  <img className="w-8 rounded-lg" src={item?.icon} />
                  {item?.title}{" "}
                  {activeContribution === idx && (
                    <motion.span
                      layoutId="activeContribution"
                      className="absolute w-2 aspect-square top-[50%] -translate-y-[50%] -left-3 md:-left-4 rounded-full inset-0 bg-white"
                    ></motion.span>
                  )}
                </motion.li>
              </>
            ))}
          </motion.ul>
          <motion.div className="relative md:col-span-3 xl:col-span-2 bg-gray-900/50 rounded-xl outline outline-1 outline-neutral-800 p-8 space-y-4 overflow-hidden">
            <h3 className="text-xl font-semibold">
              {contributions[activeContribution]?.position}
            </h3>
            <p className="whitespace-pre-wrap font-normal text-sm md:text-[0.95rem]">
              {contributions[activeContribution]?.description}
            </p>
            <Link
              to={contributions[activeContribution]?.link}
              target="_blank"
              className="btn outline-none p-0"
            >
              Community Website <BiLinkExternal />
            </Link>
          </motion.div>
        </motion.div>
        <div className="flex text-neutral-400 italic  flex-col gap-2 mb-6">
          <Link
            to={"/contact"}
            className="inline-flex items-center gap-2 hover:text-white text-xs font-light"
          >
            Drop your queries <BsArrowRight />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
