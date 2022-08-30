import React from 'react'
import './about.css'
import MyPhoto from '../images/MyPhoto.jpeg'
import Stroke from '../images/Stroke.svg'

export default function about() {
  return (
    <div className='flex-row'>
    <div className='container about-container' style={{"paddingTop": "1em"}}>
        <h1 className='about-header'>About Me</h1>
        <img className='stroke' src={Stroke}></img>
        <ul className='navLinks' style={{"marginTop":"1em"}}>
            <li className='about-skills'><h4>Coder</h4></li>
            <li className='about-skills'><h4>Graphic Designer</h4></li>
            <li className='about-skills'><h4>Web Developer</h4></li>
        </ul>
        <div className='about-me'>
            <p>I’m a enthusiastic and creative person. I have passion for Programming and Graphic Designing and try to keep good knowledge in this fields.</p> 
            <p>At present I am testing hands on Front-End and Back-End Web Development.</p>
            <p>I believe that there is no end to learning good things. I make sure that whatever knowledge I have gained till date is used for the greater good, hence the development of the organization I am associated with.</p>
        </div>
    </div>
        <img className='about-pic' src={MyPhoto}></img>
        </div>
  )
}
