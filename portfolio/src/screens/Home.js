import React,{useEffect, useState} from 'react'
import Nav from '../components/Navbar/nav'
import About from '../components/About/about'
import TestimonialCard from '../components/Testimonial/TestimonialCard';
// import './index.css'
import Splash from './Splash';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import ProjectsLink from '../components/ProjectsLink';

export default function Home() {
  const[open,setOpen]=useState(false)
    setTimeout(()=>{
        setOpen(true)
    },4500)
    // useEffect(()=>{
    //   setTimeout(()=>{
    //     window.scrollTo({
    //       top:0,
    //       left:0,
    //       behavior:'smooth'
    //     })
    //   },4500)
    // },[])
    return (
      <div style={{position:'relative'}}>
        {!open && <Splash/>}
        <div className="App">
          <Nav page={"Home"}/>
          <About/>
          <Education/>
          <Skills/>
          <Experience/>
          <ProjectsLink/>
          {/* <TestimonialCard/> */}
        </div>
      </div>
      );
}
