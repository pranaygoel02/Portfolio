import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function CustomNavLink({link, isActive, motionDivId}) {
  return (
    <NavLink
      className={(isActive) => {
        return `p-2 md:px-3 rounded-xl relative w-max`;
      }}
      to={link.query ? `?q=${link.query}` : link.path}
    >
      {isActive && (
        <motion.div
          style={{ borderRadius: "12px" }}
          layoutId={motionDivId}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute inset-0 bg-black"
        ></motion.div>
      )}
      <span className={`relative ${isActive && "text-white"} w-full`}>
        {link.name}
      </span>
    </NavLink>
  );
}

export default CustomNavLink;
