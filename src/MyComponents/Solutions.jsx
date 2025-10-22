import React from 'react'
import { TbCircleCheckFilled } from "react-icons/tb";

const Solutions = () => {
    const Goals = [
        {
            title: 'Idea and Planning',
            text: 'Sample text. Click to select the Text Element.'
        },
        {
            title: 'Design and Prototyping',
            text: 'Sample text. Click to select the Text Element.'
        },
        {
            title: 'Development and Testing',
            text: 'Sample text. Click to select the Text Element.'
        },
        {
            title: 'Launch and Support',
            text: 'Sample text. Click to select the Text Element.'
        }
    ]

  return (
    <div className='w-full bg-pink-100 py-10'>
        <div className='max-w-[1200px] text-center md:text-left mx-auto space-y-7 md:space-y-0 md:flex md:gap-6 lg:gap-20 py-4 px-8 items-center justify-between'>

            <div className='space-y-4 md:space-y-14 w-[100%] md:w-[50%] lg:mb-20 flex flex-col items-center md:block'>
                <div className=''>
                    <h1 className='mb-6 text-4xl lg:text-5xl font-[700]'>Innovative App Development Solutions</h1>

                    <p className='mb-3 md:text-[18px] text-[16px] font-[400]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
                <div
                    // to="/SignUp"
                    // onMouseEnter={() => import('./SignUp.jsx')}
                    
                    className="bg-green-400 w-fit h-fit text-white rounded-full px-8 py-2 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto md:mx-0 mt-3 md:mt-0"
                >
                    Read More
                </div>
            </div>
            
            <div className='md:flex md:w-[50%] w-[100%]'>
                <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
                    {Goals.map((Goal, idx) => (
                        <div key={idx} className='flex flex-col items-center md:block rounded-3xl bg-white p-5 space-y-4 text-center md:text-left'>
                            <TbCircleCheckFilled size={60} color='#EC7E28'/>
                            <h1 className='font-bold text-xl'>{Goal.title}</h1>

                            <p className='mb-3 md:text-[18px] text-[16px] font-[400]'>{Goal.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions