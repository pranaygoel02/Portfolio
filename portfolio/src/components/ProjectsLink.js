import React from 'react'
import { Link } from 'react-router-dom'
import LaunchIcon from '@mui/icons-material/Launch';

function ProjectsLink() {
  return (
    <Link to="/project">
    <div className='project-link'>
        <div className='link-texts'>
            <h2>My Projects</h2>
            <h2><LaunchIcon fontSize='large'/></h2>
        </div>
    </div>
    </Link>
  )
}

export default ProjectsLink