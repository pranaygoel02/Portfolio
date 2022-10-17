import React from 'react'
import Nav from '../components/Navbar/nav'
import { useRef, useEffect, useState } from 'react'
import Lottie from 'lottie-web'
import Typewriter from 'typewriter-effect'
import {posters , socials, branding} from '../utils/graphics'

import Ps from '../components/images/icons/adobe-photoshop.svg'
import Ai from '../components/images/icons/adobe-illustrator.svg'
import figma from '../components/images/icons/figma.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

  // useEffect(()=>{
  //   window.scrollTo({
  //     top:0,
  //     left: 0,
  //     behavior:'smooth'
  //   })
  // },[])

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
        <ul className='navLinks project-links' style={{"marginTop":"1em","gap":"0"}}>
            <div className='about-skills' onClick={showPosters} style={{"borderTop":"none","cursor":"pointer"}}>
                <li><h1>Posters <ArrowForwardIosIcon ref={posterBtnRef} id="poster"/></h1></li>
                <h1>01</h1>
            </div>
            <div ref={posterRef} id="posters" className='container expanded-div' style={{"display":"none"}}>
              {posters.map(poster => {
                return(
                  <img className='graphic-img' src={require(`../components/images/posters/${poster.img}`)}/>
                )
              })}
            </div>
            <div className='about-skills' onClick={showSocials} style={{"cursor":"pointer"}}>
                <li ><h1>Social Media Creatives <ArrowForwardIosIcon ref={socailBtnRef} id="social"/></h1></li>
                <h1>02</h1>
            </div>
            <div ref={socialRef} id="socials" className='container expanded-div' style={{"display":"none"}}>
              {socials.map(social => {
                return(
                  <img className='graphic-img' src={require(`../components/images/socials/${social.img}`)}/>
                )
              })}
            </div>
            {/* <div className='about-skills' onClick={showBrands} style={{"cursor":"pointer"}}>
                <li><h1>Branding <ArrowForwardIosIcon ref={brandBtnRef} id="brand"/></h1></li>
                <h1>03</h1>
            </div>   
            <div ref={brandRef} id="brands" className='container expanded-div' style={{"display":"none"}}>
                <h3>UGG Logo</h3>
                {branding.ugg.map(brand => {
                return(
                  <img className='graphic-img' src={require(`../components/images/branding/${brand.img}`)}/>
                )
              })}
                <h3>BRU Coffee Rebranding</h3>
                {branding.bru.map(brand => {
                return(
                  <img className='graphic-img' src={require(`../components/images/branding/${brand.img}`)}/>
                )
              })}
            </div> */}
        </ul>
        <p style={{"padding":"1em","fontSize":"0.8em"}}>*<a href="https://iconscout.com/icons/figma" target="_blank">Figma Icon</a> by <a href="https://iconscout.com/contributors/icon-54" target="_blank">Icon 54</a></p>
    </div>
  )
}
