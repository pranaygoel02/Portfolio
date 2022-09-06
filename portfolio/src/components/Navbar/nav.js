import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';


export default function nav({page}) {
  return (
    <>
        <div className='nav-ribbon'></div>
    <nav>
        <div id='nav-container' className='container'>
            <h1><Link style={{"color":"black"}} to={"/"}>Pranay Goel</Link></h1>
            <div className='navLinks' style={{"gap":"1em"}}>
                {page!="Project" && <li className='navbar-link'><Link to="/project">Projects</Link></li>}
                <li className='navbar-link'><Link to="/contact">Get in Touch</Link></li>
            </div>
        </div>
    </nav>
    </>
  )
}
