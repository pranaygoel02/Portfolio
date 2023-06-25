import React, { useEffect } from "react";
import { ProjectLogic } from "./ProjectLogic";
import { links } from "./ProjectData";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useTheme } from "../../context/themeContext";
import { motion } from "framer-motion";

function ProjectModal() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { theme } = useTheme();

  const { handleProjectModalClose, openId } = ProjectLogic();

  const project = links
    .find((link) => link.query == query)
    ?.projects.find((project, idx) => {
      //console.log("ProjectID", idx, openId);
      return project.title === openId;
    });

  //console.log("ProjectModal", project, openId);

  return (
    <motion.div
    // initial={{ height: 0 }}
    // animate={{  height: "100vh" }}
    // transition={{ duration: 1 }}
    // exit={{  height: 0 }}
      id="modal-wrapper"
      className="fixed flex justify-end items-end inset-0 w-full h-full backdrop-blur-sm md:px-4 z-20 bg-black/60"
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{  height: "95vh" }}
        transition={{ duration: 1.2 }}
        exit={{  height: 0 }}
        id="modal"
        className={`relative w-full h-[95vh] ${
          theme ? "bg-dark" : "bg-white"
        } rounded-t-3xl shadow-lg flex flex-col overflow-auto p-6 md:p-8 pt-12 md:pt-16 space-y-8`}
      >
        {/* <hr className='absolute top-2 rounded-full self-center bg-slate-300 w-20 h-1'></hr> */}
        <h2 className="font-bold text-4xl">{project?.title}</h2>
        <div className="flex flex-col-reverse md:flex-row gap-8 pb-8 md:pb-20 h-max">
          <div className="flex flex-col space-y-6 w-full">
            {project?.description && <p>{project?.description}</p>}
            <div className="grid grid-cols-2 gap-4 w-full h-full">
              <Link
                className="flex p-2 gap-2 rounded-3xl text-white bg-black items-center text-2xl aspect-square md:aspect-[2/1] text-center justify-center relative"
                target={"_blank"}
                to={project?.git}
              >
                <BsGithub className="absolute w-full text-gray-800 text-[6rem]" />{" "}
                <p className="z-10 drop-shadow-2xl text-l">GitHub</p>
              </Link>
              {project?.live && <Link
                className="flex p-2 gap-2 rounded-3xl text-white bg-black items-center text-2xl aspect-square md:aspect-[2/1] text-center justify-center relative"
                target={"_blank"}
                to={project?.live}
              >
                <BiLinkExternal className="absolute w-full text-gray-800 text-[6rem]" />{" "}
                <p className="z-10 drop-shadow-2xl text-3xl">Live Site</p>
              </Link>}
            </div>
          </div>
          <div className="w-full space-y-4">
            <div>
              <label>Stack</label>
              <p
                className={`py-2 border-b ${
                  theme && "border-neutral-800"
                } font-medium text-lg`}
              >
                {project?.stack?.join(", ")}
              </p>
            </div>
            <div>
              <label>Year</label>
              <p
                className={`py-2 border-b ${
                  theme && "border-neutral-800"
                } font-medium text-lg`}
              >
                {project?.year}
              </p>
            </div>
          </div>
        </div>
        {/* <img
          src={project?.image}
          className="max-h-[36rem] rounded-3xl object-cover object-center"
        /> */}
      </motion.div>
      <button
        onClick={handleProjectModalClose}
        className="absolute bottom-[4rem] left-[50%] -translate-x-[50%] text-black bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-md flex items-center gap-1 md:text-lg"
      >
        Close <IoCloseCircleOutline />
      </button>
    </motion.div>
  );
}

export default ProjectModal;
