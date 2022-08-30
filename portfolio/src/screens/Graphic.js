import React from 'react'
import Nav from '../components/Navbar/nav'
import { useRef, useEffect, useState } from 'react'
import Lottie from 'lottie-web'
import Typewriter from 'typewriter-effect'

import Ps from '../components/images/icons/adobe-photoshop.svg'
import Ai from '../components/images/icons/adobe-illustrator.svg'
import figma from '../components/images/icons/figma.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Iris1 from '../components/images/posters/iris_poster.jpg'
import Iris2 from '../components/images/posters/iris_mockup1.jpg'
import Iris3 from '../components/images/posters/iris_mockup2.jpg'
import bgmi from '../components/images/posters/BGMI .png'
import pes1 from '../components/images/posters/PES.png'
import pes2 from '../components/images/posters/pes2.jpg'
import comm from '../components/images/posters/comm.jpg'
import sherlock from '../components/images/posters/sherlock.jpg'

import may from '../components/images/socials/may.png'
import girl from '../components/images/socials/girl.jpg'
import plastic from '../components/images/socials/plastic.png'
import KK from '../components/images/socials/KK.png'
import water from '../components/images/socials/water.png'
import j from '../components/images/socials/j.jpg'
import web from '../components/images/socials/web.jpg'

import ugg from '../components/images/branding/UGG.png'
import bru from '../components/images/branding/Bru.jpg'
import m1 from '../components/images/branding/m1.jpg'
import m2 from '../components/images/branding/m2.jpg'
import m3 from '../components/images/branding/m3.jpg'
import estd from '../components/images/branding/brand.jpg'
import { svgIconClasses } from '@mui/material'


export default function Graphic() {

  const posterBtn = document.getElementById("poster")
  const posterDiv = document.getElementById("posters")
  const socialBtn = document.getElementById("social")
  const socialDiv = document.getElementById("socials")
  const brandBtn = document.getElementById("brand")
  const brandDiv = document.getElementById("brands")

  const posterBtnRef = useRef();
  const posterRef = useRef();
  const socailBtnRef = useRef();
  const socialRef = useRef();
  const brandBtnRef = useRef();
  const brandRef = useRef();



  function showPosters(){  
    posterBtnRef.current.classList.toggle("rotate");
    posterRef.current.style.display ==="none" ? posterRef.current.style.display = "flex" : posterRef.current.style.display = "none";
  }
  function showSocials(){
    socailBtnRef.current.classList.toggle("rotate");
    socialRef.current.style.display ==="none" ? socialRef.current.style.display = "flex" : socialRef.current.style.display = "none";
  }
  function showBrands(){
    brandBtnRef.current.classList.toggle("rotate");
    brandRef.current.style.display ==="none" ? brandRef.current.style.display = "flex" : brandRef.current.style.display = "none";
  }

  const penToolRef = useRef(null);
  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: penToolRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../components/images/lottie/penTool.json')
    })
    return () => instance.destroy();
  }, [])
  

  return (
    <div>
        <Nav page={"Graphic"}/>
        <h1 className='graphic-header'>Graphic Designing</h1>
        <div className='flex-row'>
          <ul className='graphic-tools'>
            <li id='pen-tool' className='tool' ref={penToolRef}></li>
            <li id='ps' className='tool animate-tool'><img className='tool-icon' src={Ps}></img></li>
            <li id='ai' className='tool animate-tool'><img className='tool-icon' src={Ai}></img></li>
            <li id='figma' className='tool animate-tool'><img className='tool-icon' src={figma}></img></li>
          </ul>
          <div id='graphic-about' className='about-me'>
            <p>I am a passionate Graphic Designer. My design style is simple and minimalistic.</p>
            <p id='quote'>I beleive that graphic designing is a part of <Typewriter options={{strings: ["storytelling!","innovation!"], autoStart: true, loop: true}}/></p>
            <p>I have experience using Photoshop, Illustrator, and Figma. I used this tools to design logos, social media creatives, posters and flyers for events and other socities in my college.</p>
          </div>
        </div>
        <h1 id='graphic-sub-header' className='graphic-header' style={{"margin":"1em auto","border":"1px solid rgba(0, 0, 0, 0.496)","borderLeft":"0px","borderRight":"0px","fontSize":"1.25em","textAlign":"left","letterSpacing":"0.1px","padding":"0.7em 0.5em"}}>My Work</h1>
        <ul className='navLinks project-links' style={{"marginTop":"1em"}}>
            <div className='about-skills' onClick={showPosters} style={{"borderTop":"none","cursor":"pointer"}}>
                <li><h1>Posters <ArrowForwardIosIcon ref={posterBtnRef} id="poster"/></h1></li>
                <h1>01</h1>
            </div>
            <div ref={posterRef} id="posters" className='container expanded-div' style={{"display":"none"}}>
              <img className='graphic-img' src={Iris1}/>
              <img id='m1' className='graphic-img' src={Iris2}/>
              <img id='m2' className='graphic-img' src={Iris3}/>
              <img className='graphic-img' src={bgmi}/>
              <img className='graphic-img' src={pes1}/>
              <img className='graphic-img' src={pes2}/>
              <img className='graphic-img' src={comm}/>
              <img className='graphic-img' src={sherlock}/>
            </div>
            <div className='about-skills' onClick={showSocials} style={{"cursor":"pointer"}}>
                <li ><h1>Social Media Creatives <ArrowForwardIosIcon ref={socailBtnRef} id="social"/></h1></li>
                <h1>02</h1>
            </div>
            <div ref={socialRef} id="socials" className='container expanded-div' style={{"display":"none"}}>
              <img className='graphic-img' src={may}/> 
              <img className='graphic-img' src={KK}/>
              <img className='graphic-img' src={plastic}/>
              <img className='graphic-img' src={water}/>
              <img className='graphic-img' src={web}/>
              <img className='graphic-img' src={girl}/>
              <img className='graphic-img' src={j}/>
            </div>
            <div className='about-skills' onClick={showBrands} style={{"cursor":"pointer"}}>
                <li><h1>Branding <ArrowForwardIosIcon ref={brandBtnRef} id="brand"/></h1></li>
                <h1>03</h1>
            </div>   
            <div ref={brandRef} id="brands" className='container expanded-div' style={{"display":"none"}}>
                <h3>UGG Logo</h3>
                <img className='graphic-img' src={ugg}/>
                <h3>BRU Coffee Rebranding</h3>
                <img className='graphic-img' src={bru}/>
                <img className='graphic-img' src={m1}/>
                <img className='graphic-img' src={m2}/>
                <img className='graphic-img' src={m3}/>
                <img className='graphic-img' src={estd}/>
            </div>
        </ul>
        <p style={{"padding":"1em","fontSize":"0.8em"}}>*<a href="https://iconscout.com/icons/figma" target="_blank">Figma Icon</a> by <a href="https://iconscout.com/contributors/icon-54" target="_blank">Icon 54</a></p>
    </div>
  )
}
