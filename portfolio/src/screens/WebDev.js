import React, {useRef, useEffect} from 'react'
import Nav from '../components/Navbar/nav'
import Typewriter from 'typewriter-effect'
import Lottie from 'lottie-web'
import Websites from '../components/websites/websites'
import {websites,components} from '../../src/utils/dev_projects'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs , faReact} from '@fortawesome/free-brands-svg-icons'

export default function WebDev() {
  const webLottieRef = useRef(null);
  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: webLottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../components/images/lottie/webdev.json')
    })
    return () => instance.destroy();
  }, [])

// useEffect(()=>{
//   window.scrollTo({
//     top:0,
//     left: 0,
//     behavior:'smooth'
//   })
// },[])

  return (
    <div>
        <Nav page={"WebDev"}/>
        <h1 className='sticky' style={{"borderBottom":"0.01em solid rgba(0, 0, 0, 0.496)","fontSize":"2em","textAlign":"center","letterSpacing":"0.1px","padding":"0.7em 0em 0.5em"}}>Web Development</h1>
        
        <div id='webdev-flex-row' className='flex-row'>
        <ul className='webdev-tools'>
          <li id='web-lottie' className='tool' ref={webLottieRef}></li>
          <li id='html' className='tool  animate-web-tool  '><FontAwesomeIcon icon={faHtml5} color='#da4c2d' size='4x'/></li>
          <li id='css' className='tool   animate-web-tool'><FontAwesomeIcon icon={faCss3Alt} color='#2d92ec' size='4x'/></li>
          <li id='js' className='tool    animate-web-tool'><FontAwesomeIcon icon={faJs} color='#e8d55d' size='4x'/></li>
          <li id='react' className='tool animate-web-tool  '><FontAwesomeIcon icon={faReact} color='#65d2f1' size='4x'/></li>
        </ul>
          <div id='webdev-about' className='about-me'>
            <p id='quote'>I code and design unique <Typewriter options={{strings: ["Web Pages!"], autoStart: true, loop: true}}/></p>
            <p>I am an aspiring Web Developer. At present I am testing hands on Front-End and Back-End Web Development.</p>
            <a id='webdev-work' style={{"width":"30%","fontSize":"0.8em","fontWeight":"500","padding":"1em 1em","marginTop":"1em"}} className='link' href="#websites">MY WORK</a>
          </div>
        </div>
        <h1 id='graphic-sub-header' className='graphic-header' style={{"margin":"1em auto","border":"1px solid rgba(0, 0, 0, 0.496)","borderLeft":"0px","borderRight":"0px","fontSize":"1.25em","textAlign":"left","letterSpacing":"0.1px","padding":"0.7em 0.5em"}}>My Work</h1>
        <h1 id='websites' className='graphic-header'>Websites</h1>
        <Websites projects={websites}/>
        <h1 className='graphic-header'>Componets</h1>
        <Websites projects={components}/>
    </div>
  )
}
