import React from 'react'
import './tools.css'

export default function Tools({tool}) {
  return (
    <ul className='toolbar'>
        {tool.map(t => {
            return (
                <li className='lang'>{t}</li>
            )
        })}
    </ul>
  )
}
