import { React, useState } from 'react'
import { GiVibratingSmartphone } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Need = () => {

    // track which accordion index is open (null = none)
    const [openIndex, setOpenIndex] = useState(null)

    const accordion = [
        {
            question: 'What services does your agency offer?',
            answer: 'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'
        },
        {
            question: 'How long does it take to develop an app?',
            answer: 'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'
        },
        {
            question: 'Do you offer Post-launch??',
            answer: 'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'
        }
    ]

    const helps = [
        {
            image: <GiVibratingSmartphone size={40} color='white' />,
            contact: '+1 111 43 44 343',
            text: 'Support hotline'
        },
        {
            image: <SiMinutemailer size={40} color='white' />,
            contact: 'sample@info.com',
            text: 'Support email'
        }
    ]

    return(
        <div className='w-full py-18 bg-white'>
            <div className='max-w-[1200px] mx-auto px-8 md:flex xl:gap-30 gap-20 space-y-10 md:space-y-0'>
                <div className='space-y-5 flex flex-col items-center md:items-start'>
                    <h1 className='lg:text-[56px] text-[36px] font-bold'>Need Help?</h1>
                    <div className='md:space-y-5 space-x-8 md:space-x-0 flex md:block'>
                        {helps.map((help) => (
                            <div className='space-y-4 flex flex-col lg:flex-row space-x-5 items-center md:items-start'>
                                <div className='rounded-full w-fit bg-[#2CCD52] p-5'>{help.image}</div>

                                <div className='text-center md:text-left'>
                                    <p className='text-[18px] md:text-[24px] uppercase'>{help.contact}</p>
                                    <p className='text-[18px] md:text-[20px] font-bold'>{help.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full md:max-w-[60%] space-y-3'>
                    <h1 className='text-[30px] font-bold'>FAQs</h1>
                    <div className='space-y-4'>
                        {accordion.map((faq, idx) => {
                            const isOpen = openIndex === idx
                            return (
                                <div key={idx} className='border-b-2 border-black max-w-[600px] space-y-5'>
                                    <div onClick={() => setOpenIndex(prev => (prev === idx ? null : idx))} className='flex items-center justify-between cursor-pointer'>
                                        <h1 className='text-[18px] font-bold'>{faq.question}</h1>
                                        <span className='transition-transform duration-500'>{isOpen ? <TiArrowSortedDown size={30} /> : <TiArrowSortedUp size={30} />}</span>
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                                        <p className='text-[20px] font-semi-bold py-3'>{faq.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Need