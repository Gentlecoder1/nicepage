import React from 'react'
import Hero from '../MyComponents/Service-Hero'
import Idea from '../assets/about-person1.jpg'
import Design from '../assets/about-person2.jpg'
import Launch from '../assets/about-person3.jpg'
import Experience from '../MyComponents/Experience'
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
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {Seconds.map((sec, idx) => (
                <div className='space-y-5 flex flex-col text-center bg-white p-7 rounded-4xl'>
                    <div className='space-y-4'>
                        <h1 className='text-[26px] font-bold'>{sec.title}</h1>
                        <p className='md:text-[20px] text-[16px] font-[400]'>{sec.text}</p>
                    </div>
                    <div className='h-[300px] w-full'><img className='h-full w-full' src={sec.image} alt="" /></div>
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