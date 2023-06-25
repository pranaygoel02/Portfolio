import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../../context/themeContext";
import { motion } from "framer-motion";
import CustomNavLink from "./CustomNavLink";

function Navbar() {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab((prev) => pathname);
  }, [pathname]);

  //console.log(pathname);

  const { theme } = useTheme();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const navbar = document.getElementById("navbar");
  //   let currentScrollPos = window.scrollY;
  //   const listentToNav =  window.addEventListener("scroll", (e) => {
  //     console.log(window.scrollY > currentScrollPos);
  //     if(window.scrollY > currentScrollPos){
  //       navbar.style.bottom = "-100%";
  //     }
  //     else{
  //       navbar.style.bottom = "4rem";
  //     }
  //     currentScrollPos = window.scrollY;
  //   });
    

  //   return () => {
  //     window.removeEventListener("scroll", listentToNav);
  //   }

  // },[])

  if(pathname === '/resume') return null;

  return (
    <motion.div
      id="navbar"
      className={`fixed bottom-[4rem] left-[50%] z-10 transition-all -translate-x-[50%] flex gap-3 md:gap-4 p-2 px-4 items-center justify-evenly rounded-2xl bg-white/80 text-black backdrop-blur-lg shadow-xl text-sm md:text-base flex-wrap w-max`}
      initial={{ opacity: 0, y: 100, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.5, delay: 1.05 }}
    >
      {navLinks.map((link) => (
        <CustomNavLink link={link} isActive={pathname === link.path} motionDivId='active-pill' />
      ))}
    </motion.div>
  );
}

export default Navbar;
