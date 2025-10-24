import React from 'react'
import { TbCircleCheckFilled } from "react-icons/tb";

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
                { item: "Strong knowledge of banking products and services" }
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
    <div className='w-full py-18 h-[1100px] md:h-full lg:h-[670px] overflow-clip'>
        <div className='max-w-[1200px] text-center lg:text-left mx-auto space-y-10 md:space-y-0 lg:flex md:gap-6 lg:gap-14 px-8 justify-between items-center'>
            <div className='lg:w-[30%] space-y-10 bg-red-600'>
                <div>
                    <h1 className='mb-6 text-3xl lg:text-5xl font-[700]'>Flexible Pricing Plans</h1>

                    <p className='mb-3 md:text-[18px] text-[16px] font-[400]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div
                    // to="/SignUp"
                    // onMouseEnter={() => import('./SignUp.jsx')}
                    
                    className="bg-green-400 w-fit h-fit cursor-pointer rounded-full px-8 py-2 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto md:mx-0 mt-3 md:mt-0"
                >
                    Subscribe
                </div>
            </div>

            <div className='md:w-[70%] w-[100%] flex items-center md:items-start'>
                <div className='gap-6 md:flex'>
                    {Plans.map((Plan, idx) => (
                        <div key={idx} className={`${idx == 0 ? 'bg-pink-100 text-black' : 'bg-[#EC7E28] text-white'} flex flex-col items-center md:block rounded-3xl px-5 py-7 space-y-6 text-center md:text-left`}>
                            <p className='mb-3 md:text-[18px] text-[16px] font-[500]'>{Plan.name}</p>

                            <h1 className='font-bold text-6xl'>{Plan.cost}</h1>

                            <p className='mb-3 md:text-[18px] text-[16px] font-[500]'>{Plan.text}</p>

                            <ul className='md:text-[16px] text-[14px] font-[400] space-y-3'>
                                {Plan.benefits.map((benefit, i) => (
                                    <div className='space-y-5'>
                                        <li key={i} className='md:text-[18px] text-[16px] font-[400] flex space-x-4 items-center' data-aos="fade-up">
                                            <div>
                                                {idx == 1 ? <TbCircleCheckFilled size={25} color='white'/> : <TbCircleCheckFilled size={25} color='#EC7E28'/> }
                                            </div>
                                            <span className='flex flex-wrap'>{benefit.item}</span>
                                        </li>
                                        <div className='h-[0.5px] bg-black'></div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscriptions