import React from 'react'
import Tools from '../Tools/Tools';
import Links from '../Links/links';
import './websites.css'

export default function web({projects}) {
    // console.log(projects);
    return (
      <div className='project'>
      {projects.map((web) => {
        return(
          <>
          <div className='project-detail'>
            <h1 className='project-name'>{web.name}</h1>
            <div className='project-images'>
              <img id='project-img1' className='project-img' src={require(`../images/websites/${web.mockup.desktop}`)}></img>
              <img id='project-img2' className='project-img' src={require(`../images/websites/${web.mockup.mobile}`)}></img>
            </div>
            {web.description && <p className='project-descp'>{web.description}</p>}
            <div className='links'>
              <Tools tool={web.tools} />
              <Links links={{git: web.git, url: web.url}}/>
            </div>
          </div>
          </>
        )
      })}
    </div>
  )
}