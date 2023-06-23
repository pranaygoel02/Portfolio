import React from 'react'
import Marquee from 'react-fast-marquee'
import { icons } from '../../pages/Home/HomeLogic'

function SkillMarquee() {
  return (
    <Marquee
    autoFill={true}
    play={true}
    className="w-full flex items-center justify-center gap-8 md:gap-16 py-8 md:py-16"
  >
    {icons?.map((icon) => (
      <div
        key={icon}
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-8"
      >
        <img className="object-contain" src={icon} />
      </div>
    ))}
  </Marquee>
  )
}

export default SkillMarquee