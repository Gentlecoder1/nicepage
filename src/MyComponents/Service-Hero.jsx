import React, {useState} from 'react'
import Header from './Header'
import Hero1 from '../assets/Service-hero-img.png'
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <div className='w-full bg-indigo-950'>
        <Header />

        <div className='max-w-[1200px] text-center md:text-left mx-auto md:flex py-4 px-8 items-center space-y-7 md:space-y-0 justify-between'>
            
            <div className='w-[100%] md:w-[45%] lg:mb-20 flex flex-col items-center md:block'>
                <div className='space-y-2 md:space-y-4 text-white'>
                    <h1 className='font-bold text-xl'>Our Services</h1>
                    <motion.div
                        initial={{ opacity: 0 , x: -320 }} 
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3.4, delay: 0.17, ease: [0.22, 0.9, 0.19, 1] }}>
                        <h1 className='mb-6 text-4xl sm:text-5xl lg:text-7xl font-[700]'>Transform Ideas into App</h1>
                    </motion.div>

                    <p className='mb-3 md:text-[18px] text-[13px] font-[400]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
            </div>
            
            <div className='md:flex md:w-[54%] lg:w-[50%] w-[100%]'>
                <motion.div
                    initial={{ opacity: 0 , x: "100%" }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 3.4, delay: 0.17, ease: [0.22, 0.9, 0.19, 1] }}
                    className=' mx-auto'
                >
                    <img src={Hero1} className='w-full h-full' alt="hero" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero