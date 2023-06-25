import React, { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHead from "../../components/Heading/PageHead";
import ProjectCard from "./ProjectCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import { links, projects } from "./ProjectData";
import ProjectModal from "./ProjectModal";
import { ProjectLogic } from "./ProjectLogic";
import { useTheme } from "../../context/themeContext";
import NewProjectCard from "./NewProjectCard";
import CustomNavLink from "../../components/Navbar/CustomNavLink";

const ProjectCard2 = React.lazy(() => import("./ProjectCard2"))

function Projects() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { handleProjectModalOpen, projectModalOpen } = ProjectLogic();

  //console.log(query);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (query === null) {
      navigate("?q=all", { replace: true });
    }
  }, [query]);

  //console.log(projectModalOpen);

  const { theme } = useTheme();

  return (
    <>
      <div className="w-full flex flex-col min-h-screen items-start justify-start gap-8 p-4 py-24 md:px-8 pb-32">
        <PageHead title={"Projects"} />
        <p className="text-center w-full text-sm md:text-base">Featuring some of my best work till date from Collaborative Teams to Independent Projects.</p>
        <div
          id="project-links"
          className={`flex relative items-center justify-between max-w-full md:max-w-[70%] shadow-xl self-center rounded-2xl overflow-x-scroll ${
            theme ? "bg-white/80" : "bg-white/70"
          } text-black backdrop-blur-lg text-sm md:text-base`}
        >
          <button className="hidden fixed left-0 px-2 bg-gradient-to-r from-white/60 to-transparent h-full">
            L
          </button>
          <div
            id="links"
            className="flex gap-2 md:gap-4 p-2 items-center justify-between"
          >
            {links?.map((link) => (
              <CustomNavLink
                link={link}
                isActive={query === link.query}
                motionDivId="active-project-pill"
              />
            ))}
          </div>
          <button className="hidden fixed right-0 px-2 bg-gradient-to-l from-white/60 to-transparent h-full">
            R
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full py-4 pb-12 container">
          {links
            .find((link) => link.query === query)
            ?.projects.sort((a, b) => {
              return a.year > b.year;
            })
            .map((project, id) => (
              <Suspense fallback={<div className="w-full h-[400px] rounded-xl bg-[#0a0a0a] outline outline-1 outline-neutral-800 animate-pulse"></div>}>
              <ProjectCard2 id={id} key={project?.title} {...project} />
              </Suspense>
            ))}
        </div>
      </div>
      {projectModalOpen && <ProjectModal />}
    </>
  );
}

export default Projects;
