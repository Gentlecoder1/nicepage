import React from 'react'
import Header from '../MyComponents/Header'
import Need from '../MyComponents/Need'
import scroll from '../assets/seamless.webp'
import Footer from '../MyComponents/Footer'
import { motion } from "framer-motion";

const Contact = () => {

    const Seconds = [
        {
            title: 'Contact Sales',
            text: 'Sample text. Click to select the Text Element.',
            action: 'Request a demo'
        },
        {
            title: 'Get help from Support',
            text: 'Sample text. Click to select the Text Element.',
            action: 'Ask the team'
        },
        {
            title: 'Make a media inquiry',
            text: 'Sample text. Click to select the Text Element.',
            action: 'Email us'
        }
    ]

  return (
    <div className='h-full'>
      <div className='w-full bg-indigo-950'>
        <Header />

        <div className=' max-w-[1200px] text-center md:text-left mx-auto py-4 px-8 '>
            
            <div className='text-white w-[100%] lg:mb-10 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-4 md:gap-14'>
                <div>
                    <h1 className='font-bold text-xl'>Contact Us</h1>
                    <motion.div
                        initial={{ opacity: 0 , x: -320 }} 
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3.4, delay: 0.17, ease: [0.22, 0.9, 0.19, 1] }}>
                        <h1 className='mb-6 text-5xl lg:text-7xl font-[700]'>Have a <br /> question? <br />Let's chat.</h1>
                    </motion.div>
                </div>
                
                <p className='max-w-[60%] mb-3 md:text-[18px] text-[16px] font-[400]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            </div>

            <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {Seconds.map((sec, idx) => (
                    <div className='lg:space-y-5 space-y-3 text-center bg-[#FCF1E9] lg:p-7 p-5 rounded-4xl'>
                        <div className='lg:space-y-7 space-y-3'>
                            <h1 className='lg:text-[20px] text-[18px] font-bold'>{sec.title}</h1>
                            <p className='md:text-[18px] text-[16px] font-[400]'>{sec.text}</p>
                            <a href="#" className='text-orange-400 border-b-2 py-[1px] border-orange-400 hover:border-black'>{sec.action}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <Need />
      <div className='w-full md:h-[400px] h-[300px] overflow-clip'>
          <img src={scroll} className='h-[100%] w-full fixed top-0 -z-50' alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default Contact