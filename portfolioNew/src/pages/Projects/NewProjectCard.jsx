import React from "react";
import { ProjectLogic } from "./ProjectLogic";
import { AiFillEye } from "react-icons/ai";
import { useTheme } from "../../context/themeContext";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function NewProjectCard({ title, description, stack, mt, image, id, color }) {
  const { theme } = useTheme();
  const { handleProjectModalOpen } = ProjectLogic();

  return (
    <div
      className={`space-y-2 aspect-square relative w-full bg-black text-white rounded-3xl shadow-2xl overflow-hidden ${
        mt && "mt-4"
      } group transition-all`}
    >
      <div className="overflow-hidden rounded-3xl h-full transition-all object-cover shadow-xl z-10">
        <img
          src={image}
          className="w-full h-full object-cover transition-all scale-100 group-hover:scale-110 duration-700 ease-out"
        />
      </div>
      <div
        className="p-6 group-hover:p-4 backdrop-blur-3xl space-y-4 h-full w-full flex flex-col justify-start group-hover:justify-center transition-all bg-black absolute -bottom-[75%] md:-bottom-[80%] group-hover:bottom-0 text-center duration-500 ease-out"
        style={{ background: theme && color }}
      >
        <button
          className="rounded-full opacity-1 group-hover:opacity-0 transition-all p-4 bg-black text-white absolute inset-0 w-min h-min left-[50%] -translate-x-[50%] -top-[6%]"
          style={{ background: theme && color }}
        >
          <MdOutlineKeyboardDoubleArrowUp className="text-3xl animate-bounce" />
        </button>
        <h2
          className="font-extrabold text-3xl"
          style={{ color: !theme && color }}
        >
          {title}
        </h2>
        <div className="flex items-center justify-center gap-4">
          {stack.map((item) => (
              <span className="transition-all hidden group-hover:flex text-xs md:text-sm">
                {item}
            </span>
          ))}
        </div>
          {/* <p className="transition-all hidden group-hover:flex">{description}</p> */}
        <button
          id={title}
          onClick={handleProjectModalOpen}
          className="transition-all hidden group-hover:flex self-center bg-black/20 p-4 rounded-full text-3xl select-none"
        >
          <AiFillEye />
        </button>
      </div>
    </div>
  );
}

export default NewProjectCard;
