import React from 'react'
import PDF from '../../../assets/resume2.pdf'

function Resume() {
  return (
    <embed
    src={PDF + '#toolbar=0'}
    type="application/pdf"
    height={800}
    width={500}
    className='w-full h-screen'
  />
  )
}

export default Resume