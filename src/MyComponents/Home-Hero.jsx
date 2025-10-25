import React, {useState} from 'react'
import Header from './Header'
import Hero1 from '../assets/Hero1.png'
import HeroPerson from '../assets/hero-person.jpg'
import { MdStar } from "react-icons/md";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

// data-aos-delay="200" 
const Hero = () => {

  return (
    <div className='w-full bg-indigo-950'>
        <Header />

        <div className='max-w-[1200px] text-center md:text-left mx-auto md:flex py-4 px-8 items-center space-y-7 md:space-y-0 justify-between'>
            
            <div className='space-y-4 md:space-y-14 w-[100%] md:w-[45%] lg:mb-20 flex flex-col items-center md:block'>
                <div className='text-white'>
                    <motion.div
                        initial={{ opacity: 0 , x: -320 }} 
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3.4, delay: 0.17, ease: [0.22, 0.9, 0.19, 1] }}>
                        <h1 className='mb-6 text-4xl sm:text-5xl lg:text-7xl font-[700]'>Powerful Apps for Growth</h1>
                    </motion.div>

                    <p className='mb-3 md:text-[18px] text-[13px] font-[400]'>At vero eos et accusam et justo do dolores et ea rebum stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                </div>
                <div
                    // to="/SignUp"
                    // onMouseEnter={() => import('./SignUp.jsx')}
                    
                    className="bg-[#EC7E28] w-fit h-fit text-white rounded-full px-8 py-2 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto md:mx-0 mt-3 md:mt-0"
                >
                    Get Started
                </div>
            </div>
            
            <div className='md:flex md:w-[54%] lg:w-[50%] w-[100%] md:gap-5 lg:gap-16 space-y-5 md:space-y-0'>
                <motion.div
                    initial={{ opacity: 0 , y: 320 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3.4, delay: 0.17, ease: [0.22, 0.9, 0.19, 1] }}
                    className='w-[130px] h-[250px] md:w-[320px] md:h-[400px] lg:w-full lg:h-full mx-auto'
                >
                    <img src={Hero1} className='w-full h-full' alt="hero" />
                </motion.div>

                <div className='space-y-14'>
                    <div className='text-white space-y-4'>
                        <p className='mb-3 md:text-[18px] text-[16px] font-[400]'>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

                        <img src={HeroPerson} alt="" className='rounded-full w-14 h-14 mx-auto md:ml-0' />

                        <div className='font-bold text-xl flex space-x-2 justify-center md:justify-normal'>
                            <span className='text-green-500 flex items-center'><MdStar /><p>4.9</p></span> 
                            <p>Positive reviews</p>
                        </div>
                    </div>

                    <div className='rounded-3xl bg-green-500 p-5 space-y-10 text-center'>
                        <div className='space-y-4 text-white'>
                            <h1 className='text-2xl md:text-4xl lg:text-5xl font-[900]'><CountUp end={800} />k+</h1>
                            <p className='font-bold text-xl'>App Downloaded</p>
                        </div>
                        <div className='space-y-4 text-white'>
                            <h1 className='text-2xl md:text-4xl lg:text-5xl font-[900]'><CountUp end={70} />k+</h1>
                            <p className='font-bold text-xl'>Total Active Users</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero