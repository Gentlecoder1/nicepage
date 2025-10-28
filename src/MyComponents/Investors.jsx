import React from 'react'
import investor1 from '../assets/investor1.png'
import investor2 from '../assets/investor2.png'
import investor3 from '../assets/investor3.png'
import investor4 from '../assets/investor4.png'
import investor5 from '../assets/investor5.png'
import investor6 from '../assets/investor6.png'

const Investors = () => {
  const companys = [
          {image: investor1},
          {image: investor2},
          {image: investor3},
          {image: investor4},
          {image: investor5},
          {image: investor6}
      ]
  
  
    return (
      <div className='w-full py-18 bg-[#FCF1E9]'>
          <div className='max-w-[1200px] text-center mx-auto px-8'>
              <div className='space-y-4 md:space-y-10 flex flex-col items-center'>
                <div className='flex mx-auto mb-10 items-center'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-[700]'>Our Investors</h1>
                </div>
  
                <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto bg-red-700'>
                    {companys.map((company, idx) => (
                    <div className='rounded-4xl flex justify-center bg-white p-14 lg:w-[350px] w-full'>
                        <div key={idx}
                        className='w-20 h-20'>
                            <img src={company.image} className='h-full w-full' alt="" />
                        </div>
                    </div>
                    ))}
                </div>
              </div>
          </div>
      </div>
    )
}

export default Investors