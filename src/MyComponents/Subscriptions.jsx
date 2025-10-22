import React from 'react'
import { TbCircleCheckFilled } from "react-icons/tb";

const Subscriptions = () => {
    const Plans = [
        {
            name: 'Standard',
            cost: 'Free',
            text: 'Limited Features',
            benefits: [
                { item: 'Virtual Card' },
                { item: 'Online Transaction' },
                { item: 'Top Rated Support' },
                { item: "Strong knowledge of banking products and services" }
            ]
        },
        
        {
            name: 'Premium',
            cost: '$ 35',
            text: 'All Features',
            benefits: [
                { item: 'Cryptocurrency' },
                { item: 'Travel Insurance' },
                { item: 'Free Pay Worldwide' },
                { item: 'Top Rated Support' }
            ]
        }
    ]

  return (
    <div className='w-full py-18 h-[1100px] md:h-full lg:h-[670px] overflow-clip'>
        <div className='max-w-[1200px] text-center md:text-left mx-auto space-y-10 md:space-y-0 md:flex md:gap-6 lg:gap-14 px-8 justify-between'>
            <div className='max-w-[40%]'>
                <h1 className='mb-6 text-3xl lg:text-5xl font-[700]'>Elexible Pricing Plans</h1>

                <p className='mb-3 md:text-[18px] text-[16px] font-[500]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <div
                    // to="/SignUp"
                    // onMouseEnter={() => import('./SignUp.jsx')}
                    
                    className="bg-green-400 w-fit h-fit text-white rounded-full px-8 py-2 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto md:mx-0 mt-3 md:mt-0"
                >
                    Read More
                </div>
            </div>

            <div className='space-y-4 md:space-y-10 md:w-[70%] w-[100%] flex flex-col items-center md:items-start'>
                <div>
                    <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
                        {Plans.map((Plan, idx) => (
                            <div key={idx} className='flex flex-col items-center md:block rounded-3xl bg-[#EC7E28] p-5 space-y-4 text-center md:text-left'>
                                <p className='mb-3 md:text-[18px] text-[16px] font-[500]'>{Plan.name}</p>

                                <h1 className='font-bold text-7xl'>{Plan.cost}</h1>
    
                                <p className='mb-3 md:text-[18px] text-[16px] font-[500]'>{Plan.text}</p>

                                <ul className='md:text-[16px] text-white text-[14px] font-[400] space-y-3'>
                                    {Plan.benefits.map((benefit, i) => (
                                        <div className='space-y-5'>
                                            <li key={i} className='flex space-x-4 items-center' data-aos="fade-up">
                                                <TbCircleCheckFilled size={20} color='white'/>
                                                <span className='flex flex-wrap'>{benefit.item}</span>
                                            </li>
                                            <hr />
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscriptions