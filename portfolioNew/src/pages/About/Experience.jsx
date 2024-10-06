import React, { useEffect } from "react";
import './Exp.css'
import { useTheme } from "../../context/themeContext";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experience(args) {

  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: "0px 0px -50px 0px",
  });

  const animate = inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50, };

  //console.log(args);
  const { role, company, date, marks, site, cols } = args;
  const {theme} = useTheme()

  // useEffect(() => {
  //   const exp = document.getElementById("exp");
  //   //console.log(exp);
  //   exp.style.setProperty("--cols", cols);
  // },[args])

  return (
    <motion.div
      ref={ref}
      animate={animate}
      transition={{ duration: 0.5 }}
    className={`w-full py-4 border-b ${theme ? 'border-neutral-800 text-white/75' : 'border-black'} items-center justify-between flex md:grid grid-cols-3 auto-cols-auto text-xl flex-wrap`}>
      <h2 className="mr-auto w-full font-bold">{role}</h2>
      <p className="md:mr-auto w-full font-medium md:font-bold">{site ? <a href={site} target="_blank">{company}</a> : company}</p>
      <p className="md:uppercase md:mr-auto font-medium md:font-bold">{date}</p>
      {marks && <h2 className="md:mr-auto md:w-full font-bold">{marks}</h2>}
    </motion.div>
  );
}

export default Experience;
