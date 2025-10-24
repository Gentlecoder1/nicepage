import React from 'react'
import Testing from '../assets/testing-img.png'
import Development from '../assets/development-img.png'
import { motion } from "framer-motion";

const Implement = () => {
    const Steps = [
        {
            title: 'Development and Testing',
            topic: 'Building Future-Ready Applications',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            image: Testing,
            button: 'Our Contact'
        },
        {
            title: 'Launch and Support',
            topic: 'Custom Mobile App Development',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            image: Development,
            button: 'Our Contact'
        }
    ]

    return (
        <div className='w-full overflow-hidden'>
            {Steps.map((step, idx) => (
                <div key={idx} className={`w-full py-18 ${idx == 0 ? 'bg-[#FCF1E9]' : 'bg-indigo-950'}`}>
                    <div className={`max-w-[1200px] mx-auto space-y-10 md:space-y-0 md:gap-6 lg:gap-14 px-8 justify-between items-center ${idx == 0 ? 'text-black  flex flex-col md:flex-row' : 'text-white flex flex-col-reverse md:flex-row-reverse '}`}>
                        <div className='md:w-[50%] space-y-10 text-center lg:text-left'>
                            <div>
                                <h1 className='mb-6 text-xl lg:text-3xl font-[600]'>{step.title}</h1>

                                <h2 className='mb-6 text-3xl lg:text-5xl font-[700]'>{step.topic}</h2>
            
                                <p className='mb-3 md:text-[18px] text-[16px] font-[400]'>{step.text}</p>
                            </div>
                            <div
                                // to="/SignUp"
                                // onMouseEnter={() => import('./SignUp.jsx')}
                                
                                className="bg-blue-400 text-white w-fit h-fit cursor-pointer rounded-full px-8 py-2 transition-all duration-300 transform hover:scale-105 flex mx-auto lg:mx-0 mt-3 md:mt-0"
                            >
                                {step.button}
                            </div>
                        </div>
                
                        {idx == 0 ? 
                            <motion.div
                                initial={{ opacity: 0 , x: '100%' }} 
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 3.4, delay: 0.17, ease: [0.22, 0.9, 0.19, 1] }}
                                className='md:w-[50%] w-[100%] flex overflow-x-clip'>
                                <img src={step.image} alt="" />
                            </motion.div>
                        :
                            <motion.div
                                initial={{ opacity: 0 , x: -320 }} 
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 3.4, delay: 0.17, ease: [0.22, 0.9, 0.19, 1] }}
                                className='md:w-[50%] w-[100%] flex'>
                                <img src={step.image} alt="" />
                            </motion.div>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Implement