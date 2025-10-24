import React from 'react'

const CTA = () => {
  return (
    <div className='w-full py-18 bg-indigo-950'>
        <div className='max-w-[1200px] mx-auto flex px-8 justify-center items-center'>
            <div data-aos="zoom-in-up" className='space-y-10 text-white text-center'>
                <div>
                    <h1 className='mb-6 text-3xl lg:text-5xl font-[700]'>Get started today. <br />Get more for your money.</h1>

                    <p className='mb-3 md:text-[18px] text-[16px] font-[400]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd <br /> gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div
                    // to="/SignUp"
                    // onMouseEnter={() => import('./SignUp.jsx')}
                    
                    className="bg-[#EC7E28] w-fit h-fit cursor-pointer rounded-full px-8 py-2 transition-all duration-300 transform hover:scale-105 flex mx-auto mt-3 md:mt-0"
                >
                    Get Started
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA