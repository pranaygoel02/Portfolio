import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';


export default function nav({page}) {
  return (
    <>
        <div className='nav-ribbon'></div>
    <nav>
        <div className='container'>
            <h1><Link style={{"color":"black"}} to={"/"}>Pranay Goel</Link></h1>
            <div className='navLinks'>
                {page === "Project"?
                <li className='navbar-link'><Link to="/"> Home</Link></li>
                :
                <li className='navbar-link'><Link to="/project">Projects</Link></li>}
            </div>
        </div>
    </nav>
    </>
  )
}
