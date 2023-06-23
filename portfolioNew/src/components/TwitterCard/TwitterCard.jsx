import React from 'react'
import Me from '../../../assets/images/me.jpg'
import {BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/themeContext'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

function TwitterCard({tweet, delay}) {
  const [ref, inView] = useInView(
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }
  )
  const {theme} = useTheme()
  
  const animate = inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -250 };

  return (
    <motion.div
    ref={ref}
    initial={{opacity: 0, x: -250}}
    transition={{duration: 0.5 }}
    animate={animate}
    className={`${theme ? 'bg-gradient-to-br from-blue-400 to-blue-600 hover:shadow-[10px_10px_0_rgb(250,165,30)] hover:-translate-x-2 hover:-translate-y-2 ' : 'bg-white/70'} bg-white/70 p-4 rounded-xl w-full space-y-2 shadow-lg transition-all`}>
        <div className='flex items-start justify-between w-full'>
            <div className='flex items-center justify-start gap-4 w-full'>
            <img className='w-16 rounded-full object-cover' src={Me} />
            <div className='text-lg'>
                <p className={`${theme ? 'text-white' : 'text-black'}`}>Pranay Goel</p>
                <Link to={'https://twitter.com/pranay_goel__'} target='_blank' className={`${theme ? 'text-gray-300' : 'text-gray-500' } text-base`}>@pranay_goel__</Link>
            </div>
        </div> 
            <Link to={'https://twitter.com/pranay_goel__'} target='_blank'><BsTwitter className={`${theme ? 'text-white' : 'text-blue-400'} text-[2rem]`}/></Link>
        </div>
        <p className={`p-4 text-base ${theme ? 'text-white/70' : 'text-black'} md:text-lg`}>{tweet}</p>
    </motion.div>
  )
}

export default TwitterCard