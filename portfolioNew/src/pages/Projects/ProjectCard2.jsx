import React from 'react'
import { ProjectLogic } from './ProjectLogic';

function ProjectCard2({ title, description, stack, mt, image, id, color }) {

    const { handleProjectModalOpen } = ProjectLogic();

  return (
    <div className='p-4 rounded-xl space-y-4 bg-[#0a0a0a]/50 outline outline-1 outline-neutral-800 shadow-2xl'>
        <img src={image} alt="" className='rounded-xl' />
        <div className='space-y-2'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='text-sm line-clamp-4'>{description}</p>
            <button id={title} onClick={handleProjectModalOpen}>
                Open
            </button>
        </div>
    </div>
  )
}

export default ProjectCard2