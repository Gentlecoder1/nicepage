import React from 'react'
import Binance from '../assets/1.svg'
import Evga from '../assets/evga.svg'
import Crolla from '../assets/crolla.svg'
import Sony from '../assets/sony-logo.svg'
import Tesla from '../assets/tesla-9.svg'

const Partners = () => {

    const Partners = [
        {
            image: Binance
        },
        {
            image: Evga
        },
        {
            image: Crolla
        },
        {
            image: Tesla
        },
        {
            image: Sony
        }
    ]

  return (
    <div className='w-full'>
        <div className='max-w-[1200px] text-center mx-auto md:flex flex-col py-16 px-8 items-center space-y-10'>
            <h1 className='text-black text-xl font-bold'>Trusted Development Partners for Long-Term Success and Innovative Digital Solutions</h1>

            <div className='grid grid-cols-1 md:grid-cols-5 gap-8 mx-auto h-fit bg-red-600'>
                {Partners.map((Partner) => (
                    <div className='mx-auto w-30 lg:full'><img src={Partner.image} alt="Binance" className='w-full h-full' /></div>    
                ))}  
            </div>
        </div>
    </div>
  )
}

export default Partners