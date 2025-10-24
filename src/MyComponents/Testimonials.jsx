import React from 'react'
import { motion } from "framer-motion";


const Testimonials = () => {
    const Reviews = [
        {
            title: 'Outstanding Experience!',
            text: 'The team delivered a high-quality app on time and exceeded our expectations. Communication was seamless, and they truly understood our vision.',
            name: 'Micheal Thompson'
        },
        {
            title: 'Professional and Reliable!',
            text: 'We needed a complex app, and they handled every challenge efficiently. Their expertise in development and UX design is top-notch.',
            name: 'Sarah Mitchell'
        },
        {
            title: 'Great Support and Innovation!',
            text: 'The agency not only built a fantastic app but also provided valuable insights to improve functionality. Highly recommended!',
            name: 'James Richard'
        },
    ]

  return (
    <div className='w-full bg-[#FCF1E9] py-10'>
        <motion.div 
            initial={{ opacity: 0 , y: 420 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 3.4, delay: 0.17, ease: [0.22, 0.9, 0.19, 1] }}
            className='max-w-[1200px] text-center md:text-left mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-7 md:space-y-0 md:gap-6 py-4 px-8 items-center'>
            {Reviews.map((Review, idx) => (
                <div key={idx} className='flex flex-col items-center md:block rounded-3xl bg-white p-7 space-y-20 text-center md:text-left h-full'>
                    <div className='space-y-4'>
                        <h1 className='text-4xl'>"{Review.title}</h1>

                        <p className='mb-3 md:text-[20px] text-[16px] font-[400]'>{Review.text}"</p>
                    </div>

                    <p className='text-xl font-bold'>{Review.name}</p>
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default Testimonials