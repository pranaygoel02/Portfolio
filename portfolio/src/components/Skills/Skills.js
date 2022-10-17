import React from 'react'
import { skills } from '../../utils/skills'
import './Skills.css'
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';


function Skills() {
  return (
    <div className='skill-section'>
        <h1 className='skill-head'>My Skills</h1>
    <div className='skill-list'>
        {skills.map(skill => {
          return(
            <Tooltip TransitionComponent={Zoom} title={skill.title} arrow>
            <div className='skill-div'>
                <img id={skill.title} style={{width:'55%',position:'absolute',top:'50%',left:'50%',transform:'translateX(-50%) translateY(-50%)'}} src={require(`../images/icons/${skill.img}`)}/>
            </div>
            </Tooltip>
          )
        })}
    </div>
    </div>
  )
}

export default Skills