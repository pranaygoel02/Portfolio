import React, {useRef, useEffect} from 'react'
import Nav from '../components/Navbar/nav'
import Typewriter from 'typewriter-effect'
import Lottie from 'lottie-web'

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
  

  return (
    <div>
        <Nav page={"WebDev"}/>
        <h1 style={{"borderBottom":"0.01em solid rgba(0, 0, 0, 0.496)","fontSize":"2em","textAlign":"center","letterSpacing":"0.1px","padding":"0.7em 0em 0.5em"}}>Web Development</h1>
        
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
          </div>
        </div>
    </div>
  )
}
