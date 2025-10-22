import React from 'react'
import encrypt from '../assets/encrypt.png'
import key from '../assets/key.png'
import Seamless from '../assets/seamless-img.png'
import { motion } from "framer-motion";

const Experience = () => {
    const Digitals = [
        {
            image: encrypt,
            name: 'Encrypt',
            title: 'Data Encryption',
            text: 'Protect user data with strong encryption methods to prevent unauthorized access.'
        },
        
        {
            image: key,
            name: 'Key',
            title: 'Secure Authentication',
            text: 'Implement multi-factor authentication (MFA) and strong password policies to enhance security.'
        }
    ]

  return (
    <div className='w-full py-18 h-[1100px] md:h-full lg:h-[670px] overflow-clip'>
        <div className='max-w-[1200px] text-center md:text-left mx-auto space-y-10 md:space-y-0 md:flex flex-row-reverse md:gap-6 lg:gap-14 px-8 justify-between'>
            <div className='space-y-4 md:space-y-10 md:w-[70%] w-[100%] flex flex-col items-center md:items-start'>
                <div className='max-w-[80%]'>
                    <h1 className='mb-6 text-3xl lg:text-5xl font-[700]'>Seamless Digital Experience Design</h1>

                    <p className='mb-3 md:text-[18px] text-[16px] font-[500]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>

                <div>
                    <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
                        {Digitals.map((Digital, idx) => (
                            <div key={idx} className='flex flex-col items-center md:block rounded-3xl bg-gray-200 p-5 space-y-4 text-center md:text-left'>
                                <div className='w-10 h-10'>
                                    <img src={Digital.image} alt={Digital.name} className='' />
                                </div>
                                <h1 className='font-bold text-xl'>{Digital.title}</h1>
    
                                <p className='mb-3 md:text-[18px] text-[16px] font-[500]'>{Digital.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 , y: 320 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 3.4, delay: 0.17, ease: [0.22, 0.9, 0.19, 1] }}
                className='md:w-[45%] w-[75%] h-full mx-auto'
            >
                <img src={Seamless} className='w-full h-full' alt="Seamless" />
            </motion.div>
        </div>
    </div>
  )
}

export default Experience