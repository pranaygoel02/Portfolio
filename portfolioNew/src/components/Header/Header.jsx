import React from "react";
import { Link } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../../context/themeContext";
import ThemeToggler from "../Theme/ThemeToggler";

import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -250 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.75, easings: "easeInOut" }}
      className="flex w-full px-4 md:px-8 p-4 items-center justify-between absolute md:fixed top-0 left-0 z-10"
    >
      <Link to={"/"} className="font-bold text-lg">
        P.
      </Link>
      <div className="inline-flex items-center gap-4">
        <Link to={'/resume'} id="cv-btn" className="btn">
          Download Resume
        </Link>
        {/* <ThemeToggler /> */}
        <Link to={'https://github.com/pranaygoel02'} target="_blank" title="GitHub">
          <AiFillGithub className="text-2xl text-neutral-300" />
        </Link>
      </div>
    </motion.div>
  );
}

export default Header;
