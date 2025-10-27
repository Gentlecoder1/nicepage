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
            <div className='space-y-4 md:space-y-10 w-[100%] flex flex-col items-center md:items-start'>
                <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
                    <h1 className='md:max-w-[50%] text-3xl md:text-4xl lg:text-5xl font-[700]'>Seamless Digital Experience Design</h1>

                    <p className='md:max-w-[50%] bg-red-500 mb-3 md:text-[18px] text-[16px] font-[500]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>

                <div>
                    <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        {Digitals.map((Digital, idx) => (
                            <div style={{ perspective: 1200 }}>
                                <motion.div key={idx}
                                    whileInView={{ rotateX: [0, -50, 0, 90, 0, -60, 0, 60, 0, -20, 0, 20, 0] }}
                                    viewport={{ once: false }}
                                    transition={{ 
                                        duration: 3.2,
                                        times: [0, 0.06, 0.12, 0.24, 0.36, 0.50, 0.62, 0.74, 0.82, 0.88, 0.94, 0.98, 1],
                                        ease: "easeOut"
                                    }}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        WebkitTransformStyle: 'preserve-3d',
                                        willChange: 'transform'
                                    }}
                                    className='h-full flex flex-col items-center md:block rounded-3xl bg-gray-200 p-5 space-y-4 text-center md:text-left'>
                                    <div className='w-10 h-10'style={{
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}>
                                        <img src={Digital.image} alt={Digital.name} className='' />
                                    </div>
                                    <h1 className='font-bold text-xl' style={{
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}>{Digital.title}</h1>
        
                                    <p className='mb-3 md:text-[18px] text-[16px] font-[500]' style={{
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}>{Digital.text}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience