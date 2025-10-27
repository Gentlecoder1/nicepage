import React from 'react'
import Hero from '../MyComponents/Service-Hero'
import Idea from '../assets/4.png'
import Design from '../assets/5.png'
import Launch from '../assets/6.png'
import Experience from '../MyComponents/Service-Experience'
import Implement from '../MyComponents/Implement'
import Footer from '../MyComponents/Footer'

const Services = () => {
    const Seconds = [
        {
            title: 'Idea and Planning',
            text: 'Sample text. Click to select the Text Element.',
            image: Idea
        },
        {
            title: 'Design and Prototyping',
            text: 'Sample text. Click to select the Text Element.',
            image: Design
        },
        {
            title: 'Launch and Support',
            text: 'Sample text. Click to select the Text Element.',
            image: Launch
        }
    ]
  return (
    <div className='h-full'>
      <Hero />

      <div className='w-full py-18 bg-[#FCF1E9]'>
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:px-8 px-18'>
            {Seconds.map((sec, idx) => (
                <div className={`${idx == 1 ? 'flex flex-col-reverse' : 'flex flex-col'} h-[72%] overflow-hidden lg:space-y-5 space-y-3 text-center bg-white lg:p-7 p-5 rounded-4xl`}>
                    <div className='lg:space-y-4 space-y-3'>
                        <h1 className='lg:text-[26px] text-[20px] font-bold'>{sec.title}</h1>
                        <p className='md:text-[20px] text-[16px] font-[400]'>{sec.text}</p>
                    </div>
                    <div className='lg:w-[90%] w-[80%] mx-auto'><img className='h-full w-full' src={sec.image} alt="" /></div>
                </div>
            ))}
        </div>
      </div>

      <Experience />
      <Implement />
      <Footer />
    </div>
  )
}

export default Services