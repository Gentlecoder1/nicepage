import { React, useState } from 'react'
import Hero from '../MyComponents/Service-Hero'
import Hero1 from '../assets/Service-hero-img.png'
import Idea from '../assets/4.png'
import Design from '../assets/5.png'
import Launch from '../assets/6.png'
import Testing from '../assets/testing-img.png'
import { GiVibratingSmartphone } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Experience from '../MyComponents/Service-Experience'
import Implement from '../MyComponents/Implement'
import Footer from '../MyComponents/Footer'

const Services = () => {
    const [open, setOpen] = useState(false)
    const toggle = (i) => {
        setOpen(!open === i ? false : true)
    }

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

    const customSteps = [
        {
            title: 'Development and Testing',
            topic: 'Building Future-Ready Applications',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            image: Testing,
            button: 'Our Contact'
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

  return (
    <div className='h-full'>
      <Hero title='Transform Ideas into App' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' image={Hero1}/>

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
      <Implement Steps={customSteps} />

      <div className='w-full py-18'>
        <div className='max-w-[1200px] mx-auto lg:px-8 px-18 md:flex gap-30'>
            <div className='space-y-5'>
                <h1 className='lg:text-[56px] text-[26px] font-bold'>Need Help?</h1>
                <div className='space-y-5'>
                    {helps.map((help) => (
                        <div className='space-y-4'>
                            <div className='rounded-full w-fit bg-[#2CCD52] p-5'>{help.image}</div>

                            <div>
                                <p className='text-[24px] uppercase'>{help.contact}</p>
                                <p className='text-[20px] font-bold'>{help.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='max-w-[60%] space-y-3'>
                <h1 className='text-[30px] font-bold'>FAQs</h1>
                <div className='space-y-4'>
                    {accordion.map((faq, idx) => (
                        <div key={idx} className='border-b-2 border-black w-[600px] space-y-5'>
                            <div key={idx} onClick={toggle} className='flex items-center justify-between cursor-pointer'>
                                <h1 className='text-[18px] font-bold'>{faq.question}</h1>
                                <span className={`transition-all duration-900`}>{open ? <TiArrowSortedDown size={30} /> : <TiArrowSortedUp size={30} />}</span>
                            </div>
                            <p className={`transition-all duration-900 text-[20px] font-semi-bold ${open ? 'block' : 'hidden'}`}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services