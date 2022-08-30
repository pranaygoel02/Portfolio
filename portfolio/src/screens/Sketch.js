import React from 'react'
import Nav from '../components/Navbar/nav'

import man from '../components/images/sketches/man.jpg'
import kid from '../components/images/sketches/kid.jpg'
import lock from '../components/images/sketches/lock.jpg'
import amit from '../components/images/sketches/amit.jpg'
import dr from '../components/images/sketches/dr.jpg'
import shiv from '../components/images/sketches/shiv.jpg'
import covid from '../components/images/sketches/covid.jpg'
import tree from '../components/images/sketches/tree.jpg'
import zuko from '../components/images/sketches/zuko.jpg'

export default function Sketch() {
  return (
    <div>
      <Nav pahge={"Sketch"}/>
      <div className='container' style={{"display":"flex", "flexWrap":"wrap","gap":"1em"}}>
        <h1>Sketches</h1>
        <img className='sketch-img' src={man}></img>
        <img className='sketch-img' src={amit}></img>
        <img className='sketch-img' src={kid}></img>
        <img className='sketch-img' src={dr}></img>
        <img className='sketch-img' src={lock}></img>
        <img className='sketch-img' src={shiv}></img>
        <img className='sketch-img' src={covid}></img>
        <img className='sketch-img' src={tree}></img>
        <img className='sketch-img' src={zuko}></img>
      </div>
    </div>
  )
}
