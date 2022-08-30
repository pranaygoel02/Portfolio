import React from 'react'
import Nav from '../components/Navbar/nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs , faReact} from '@fortawesome/free-brands-svg-icons'

export default function WebDev() {
  return (
    <div>
        <Nav page={"WebDev"}/>
        <h1 style={{"borderBottom":"0.01em solid rgba(0, 0, 0, 0.496)","fontSize":"2em","textAlign":"center","letterSpacing":"0.1px","padding":"0.7em 0em 0.5em"}}>Web Development</h1>
        <ul style={{"padding":"1em","display":"flex","alignItems":"center","justifyContent":"center","gap":"2em"}}>
          <li><FontAwesomeIcon icon={faHtml5} color='#da4c2d' size='3x'/></li>
          <li><FontAwesomeIcon icon={faCss3Alt} color='#2d92ec' size='3x'/></li>
          <li><FontAwesomeIcon icon={faJs} color='#e8d55d' size='3x'/></li>
          <li><FontAwesomeIcon icon={faReact} color='#65d2f1' size='3x'/></li>
        </ul>
    </div>
  )
}
