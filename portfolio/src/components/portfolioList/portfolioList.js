import React from 'react'
import './portfolioList.css'
import {Link} from 'react-router-dom'

export default function portfolio() {
  return (
    <div className='projects-list'>
        <ul className='project-links'>
            <Link className='about-skills' style={{"borderTop":"none"}} to="/project/web-development">
                <li><h1>Web Development</h1></li>
                <h1>01</h1>
            </Link>
            <Link className='about-skills' to="/project/graphic-design">
                <li ><h1>Graphic Design</h1></li>
                <h1>02</h1>
            </Link>
            <Link className='about-skills' to="/project/sketches">
                <li><h1>Sketches</h1></li>
                <h1>03</h1>
            </Link>   
        </ul>
    </div>
  )
}
