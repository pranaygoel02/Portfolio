import React from 'react'
import { useTheme } from '../../context/themeContext'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Heading({title, classes }) {
  const {theme} = useTheme()
  
  const [ref, inView] = useInView(
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }
  )

  const animate = inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -250 };

  return (
    <motion.h2
    ref={ref}
    animate={animate}
    transition={{duration: 0.5}}
    className={`text-3xl md:text-4xl font-bold w-full border-b ${theme ? 'border-neutral-800' : 'border-black'} py-4 ${classes}`}>{title}</motion.h2>
  )
}

export default Heading