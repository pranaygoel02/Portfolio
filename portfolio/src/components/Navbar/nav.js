import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';


export default function nav({page}) {
  return (
    <>
        <div className='nav-ribbon'></div>
    <nav>
        <div className='container'>
            <h1>Pranay Goel</h1>
            <div className='navLinks'>
                {page === "Project"?
                <li><Link to="/"> Home</Link></li>
                :
                <li><Link to="/project">Projects</Link></li>}
            </div>
        </div>
    </nav>
    </>
  )
}
