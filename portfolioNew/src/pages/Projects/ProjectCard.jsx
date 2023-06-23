import React from 'react'
import { ProjectLogic } from './ProjectLogic'
import {AiFillEye} from 'react-icons/ai'

function ProjectCard({title, description, stack, mt, image, id}) {
  
  const {handleProjectModalOpen} = ProjectLogic();

  return (
    <div className={`relative aspect-square w-full bg-black text-white rounded-3xl overflow-hidden ${mt && 'mt-4'} group`}>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-[850ms] transition-all peer' src={image}/>
        <div className='absolute top-0 p-6 py-8 opacity-0 bg-gradient-to-b from-black/40 to-black/60 w-full h-full flex items-start justify-between flex-col group-hover:opacity-100 transition-all duration-1000'>
          <div className='flex flex-wrap items-center gap-2'>{stack.map(item => <span className='outline outline-1 outline-white rounded-full bg-black/10 text-white p-1 capitalize text-sm'>{item}</span>)}</div>
          <button id={title} onClick={handleProjectModalOpen}  className='self-center bg-black/20 p-4 rounded-full text-3xl select-none'><AiFillEye/></button>
          <div className='space-y-2 md:space-y-4'>
            <h2 className='font-semibold text-3xl'>{title}</h2>
            <p className='line-clamp-2 md:line-clamp-3'>{description}</p>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard