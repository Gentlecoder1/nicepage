import React from 'react'
import { TbCircleCheckFilled } from "react-icons/tb";
import { motion } from "framer-motion"

const Subscriptions = () => {
    const Plans = [
        {
            name: 'Standard',
            cost: 'Free',
            text: 'LIMITED FEATURES',
            benefits: [
                { item: 'Virtual Card' },
                { item: 'Online Transactions' },
                { item: 'Top Rated Support' },
                { item: "Online Banking" }
            ]
        },
        
        {
            name: 'Premium',
            cost: '$ 35',
            text: 'ALL FEATURES',
            benefits: [
                { item: 'Cryptocurrency' },
                { item: 'Travel Insurance' },
                { item: 'Free Pay Worldwide' },
                { item: 'Top Rated Support' }
            ]
        }
    ]

  return (
    <div className='w-full py-18'>
        <div className='max-w-[1200px] mx-auto space-y-10 lg:space-y-0 lg:flex md:gap-6 lg:gap-14 px-8 justify-between items-center'>
            <div className='lg:w-[30%] space-y-10 text-center lg:text-left'>
                <div>
                    <h1 className='mb-6 text-3xl lg:text-5xl font-[700]'>Flexible Pricing Plans</h1>

                    <p className='mb-3 md:text-[18px] text-[16px] font-[400]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div
                    // to="/SignUp"
                    // onMouseEnter={() => import('./SignUp.jsx')}
                    
                    className="bg-blue-400 text-white w-fit h-fit cursor-pointer rounded-full px-8 py-2 transition-all duration-300 transform hover:scale-105 flex mx-auto lg:mx-0 mt-3 md:mt-0"
                >
                    Subscribe
                </div>
            </div>

            <div className='lg:w-[70%] w-[100%] flex'>
                <div className='space-y-6 md:space-y-0 mx-auto md:gap-6 md:flex w-full'>
                    {Plans.map((Plan, idx) => (
                        <div className='md:w-[100%] w-[70%] flex flex-col mx-auto' style={{ perspective: 1200 }}>
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
                                className={`${idx == 0 ? 'bg-[#FCF1E9] text-black' : 'bg-[#EC7E28] text-white'} rounded-3xl px-5 py-7 space-y-6 w-full`}>
                                <p className='mb-3 md:text-[18px] text-[16px] font-[500]'>{Plan.name}</p>

                                <h1 className='font-bold text-3xl lg:text-6xl'>{Plan.cost}</h1>

                                <p className='mb-3 text-[18px] font-[500]'>{Plan.text}</p>

                                <ul className='md:text-[16px] text-[14px] font-[400] space-y-3'>
                                    {Plan.benefits.map((benefit, i) => (
                                        <div className='space-y-5'>
                                            <li key={i} className='md:text-[18px] text-[16px] font-[400] flex space-x-4 items-center'>
                                                <div>
                                                    {idx == 1 ? <TbCircleCheckFilled size={25} color='white'/> : <TbCircleCheckFilled size={25} color='#EC7E28'/> }
                                                </div>
                                                <span className='flex'>{benefit.item}</span>
                                            </li>
                                            <div className='h-[0.5px] bg-black w-full'></div>
                                        </div>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscriptions