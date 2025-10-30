import React from 'react'
import CountUp from 'react-countup';

const Analytics = () => {
    const Digitals = [
        {
            title: <CountUp end={15} />,
            text: 'Reduced carbon footprint in 2025'
        },
        {
            title: <CountUp end={22} />,
            text: 'Years of industry expertise'
        },
        {
            title: <CountUp end={28} />,
            text: 'Supported countries worldwide'
        },
        {
            title: <CountUp end={98} />,
            text: 'Customer satisfaction rate'
        }
    ]


  return (
    <div className='w-full py-18 bg-[#FCF1E9]'>
        <div className='max-w-[1200px] text-center md:text-left mx-auto space-y-10 md:space-y-0 md:flex flex-row-reverse md:gap-6 lg:gap-14 px-8 justify-between'>
            <div className='space-y-4 md:space-y-10 w-[100%] flex flex-col items-center md:items-start'>
                <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
                    <div className='md:max-w-[50%] space-y-3'>
                        <p className='mb-3 md:text-[20px] text-[16px] font-[500]'>Analytics</p>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-[700]'>Who we are</h1>
                    </div>

                    <p className='md:max-w-[50%] mb-3 md:text-[18px] text-[16px] font-[400]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>

                <div>
                    <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                        {Digitals.map((Digital, idx) => (
                            <div key={idx}
                                className='h-full flex flex-col items-center md:block rounded-3xl bg-white p-7 space-y-4 text-center'>
                                <h1 className="font-semibold text-[50px]">
                                    {Digital.title}
                                    { idx === 0 ? '%' : idx === 3 ? ' %' : '' }
                                </h1>
                                    
                                <p className='mb-3 md:text-[18px] text-[16px] font-bold'>{Digital.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics