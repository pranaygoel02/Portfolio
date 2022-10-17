import React from 'react'
import './links.css'

export default function links({links}) {
    // console.log(links);
  return (
    <div className='website-links'>
        <a id='code' className='link' href ={`${links.git}`} target="blank_">CODE</a>
        <a id='demo' className='link' href={`${links.url}`} target="black_">DEMO</a>
    </div>
  )
}
