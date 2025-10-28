import React from 'react'
import person1 from '../assets/about-person1.jpg'
import person2 from '../assets/about-person2.jpg'
import person3 from '../assets/about-person3.jpg'

const Team = () => {
  const experts = [
        {
            image: person1,
            name: 'MICHAEL THOMPSON',
            text: 'CEO at TechVision'
        },
        {
            image: person2,
            name: 'SARAH MITCHELL',
            text: 'Product Manager at InnovateX'
        },
        {
            image: person3,
            name: 'JAMMA RICHARDSON',
            text: 'CTO at DigitalFlow'
        }
    ]


  return (
    <div className='w-full py-18'>
        <div className='max-w-[1200px] text-center md:text-left mx-auto space-y-10 md:space-y-0 md:flex flex-row-reverse md:gap-6 lg:gap-14 px-8 justify-between'>
            <div className='space-y-4 md:space-y-10 w-[100%] flex flex-col items-center md:items-start'>
                <div className='flex mx-auto items-center'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-[700]'>Meet Our Expert Team</h1>
                </div>

                <div>
                    <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        {experts.map((expert, idx) => (
                            <div key={idx}
                                className='h-full flex flex-col items-center md:block space-y-4 text-center'>
                                <div className='rounded-3xl h-[300px] w-full'>
                                    <img src={expert.image} className='rounded-3xl h-full w-full' alt="" />
                                </div>
    
                                <p className='mb-3 md:text-[20px] text-[18px]'>{expert.name}</p>
                                <p className='mb-3 md:text-[18px] text-[16px] font-bold'>{expert.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team