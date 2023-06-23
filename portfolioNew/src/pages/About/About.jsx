import React from "react";
import Info from "../../components/Info/Info";
import TwitterCard from "../../components/TwitterCard/TwitterCard";
import { data, org, achievements, education } from "./ExperienceData";
import { useTheme } from "../../context/themeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import { icons } from "../Home/HomeLogic";
import SkillMarquee from "../../components/SkillMarquee/SkillMarquee";

function About() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -30px 0px",
  });

  const animate = inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 };

  const desc = `I'm a web developer and a tech enthusiast based in Kolkata, India.
  Currently a Software Development Intern at Pephub, a startup that
  provides a platform for people to learn and grow in the field of
  technology.`;
  return (
    <div className="w-full flex flex-col min-h-screen items-start justify-start md:justify-center gap-8 p-4 py-32 md:px-8">
      <p className="text-4xl md:text-[3.8rem] font-semibold md:max-w-[90%] leading-tight md:mb-2">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hey, Pranay here.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* {desc.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: (index +1) * 0.05 }}
          >
            {char}
          </motion.span>
        ))} */}
          {desc}
        </motion.h2>
      </p>
      <div
        className={`font-medium text-lg md:text-xl grid md:grid-cols-2 gap-4 md:gap-8 ${
          theme && "text-white/75"
        }`}
      >
        <div className="space-y-8">
          <motion.p ref={ref} animate={animate} transition={{ duration: 1 }}>
            In addition to web development, I am also passionate about
            programing, and keep interest in graphic designing and sketching.
          </motion.p>
          <TwitterCard
            delay={desc.length * 0.05 + 3}
            tweet="I enjoy the idea of collaborating design along with modern tech-stack to build amazing websites that not just serve the functionality, but also look good to the eye."
          />
        </div>
        <motion.div
          ref={ref}
          animate={animate}
          transition={{ duration: 1, delay: 0.1 }}
          className="space-y-4"
        >
          <p>
            Unlike any other web developer, I started my web development journey
            with <strong>HTML, CSS, and Javascript</strong>.
          </p>
          <p>
            I am currently working as a full-stack{" "}
            <strong>MERN developer</strong>. I have worked on projects driven by
            the concept of <strong>Config driven UI and Forms.</strong>
          </p>
          <p>
            Skilled in ReactJs, NodeJs, ExpressJs, MongoDB, Redux, Firebase and Appwrite. I have
            experience using TailwindCSS, Bootstrap and MaterialUI styled
            components.
          </p>
          <p>At present I am working with NextJS 13.</p>
        </motion.div>
      </div>
      <SkillMarquee />
      <Info heading={"Work Experience"} data={data} />
      <Info heading={"Organizations"} data={org} />
      <Info heading={"Achievements"} data={achievements} />
      <Info heading={"Education Qualifications"} data={education} />
    </div>
  );
}

export default About;
