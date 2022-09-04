import React from 'react'
import Nav from '../components/Navbar/nav'
import {sketches} from '../utils/graphics'

export default function Sketch() {
  console.log(sketches);
  return (
    <div>
      <Nav pahge={"Sketch"}/>
      <div className='container' style={{"display":"flex", "flexWrap":"wrap","gap":"1em"}}>
        <h1>Sketches</h1>
        {sketches.map(sketch => {
          console.log(sketch);
          return (
            <img className='graphic-img' src={require(`../components/images/sketches/${sketch.img}`)}></img>
          )
        })}
      </div>
    </div>
  )
}
