import { useNavigate, useSearchParams } from 'react-router-dom';
import React, { Suspense } from 'react'
import PageHead from '../../components/Heading/PageHead'
import Navbar from '../../components/Navbar/Navbar';
import ProjectCard from './Card';
import ProjectDrawer from './ProjectDrawer';
import projects from '../../lib/projectsData';

const navLinks = Object.entries(projects).map(([key,value]) => ({ name: value.name, query: key }));

function ProjectPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q");
  const projectIndex = searchParams.get("index");

  return (
    <div className="w-full flex flex-col min-h-screen gap-6 sm:gap-8 p-4 py-24 md:px-8 pb-32">
        <header className='flex flex-col items-center justify-center sm:gap-8 gap-6'>
            <PageHead title='Projects'/>
            <p className="text-center w-full text-sm md:text-base">Featuring some of my best work till date from Collaborative Teams to Independent Projects.</p>
            <Navbar links={navLinks} id='project-nav'/>
        </header>
        <main>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:py-4 py-0 pb-12 container">
          {
            Object.entries(projects).map(([key, projectData]) => {
              if (query && query !== key) return null;
              return projectData.projects.map((project, index) => (
                <Suspense fallback={<div className="w-full h-[400px] rounded-xl bg-[#0a0a0a] outline outline-1 outline-neutral-800 animate-pulse"></div>}>
                  <ProjectCard id={key + index} key={project?.title} {...project} onClick={()=>{
                    setSearchParams({
                      q: key,
                      index: index
                    }, false)
                  }} />
                </Suspense>
              ))
            })
          }
          </section>
        </main>
        <ProjectDrawer show={query && parseInt(projectIndex) >= 0} toggle={() => navigate(-1)} project={projects?.[query]?.projects?.[projectIndex]}/>
    </div>
  )
}

export default ProjectPage