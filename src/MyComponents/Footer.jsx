import React from 'react'
import { TiSocialFacebook} from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='w-full bg-[#FCF1E9] py-10'>
        <div className='max-w-[1200px] mx-auto md:flex justify-between space-y-7 md:space-y-0 md:gap-6 py-4 px-8'>
          <div className='space-y-4 md:space-y-14 w-[100%] md:w-[45%] flex flex-col'>
              <h1 className='mb-6 text-3xl sm:text-4xl lg:text-5xl font-[700] w-[100%] md:w-[85%]'>Professional and reliable!</h1>

              <p className='mb-3 md:text-[18px] text-[13px] font-[400]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>

          <div className='flex flex-col md:flex-row gap-16 w-[100%] md:w-[50%]'>
            <div className='space-y-6'>
              <h1 className='text-xl font-semibold'>Company</h1>

              <ul className='flex flex-col space-y-2 text-lg text-[#EC7E28]'>
                  <li><a className='hover:text-gray-500' href="/Home">Home</a></li>
                  <li><a className='hover:text-gray-500' href="/About">About</a></li>
                  <li><a className='hover:text-gray-500' href="/Services">Services</a></li>
                  <li><a className='hover:text-gray-500' href="/Contact">Contact</a></li>
              </ul>
            </div>

            <div className='space-y-6'>
              <h1 className='text-xl font-semibold'>Socials</h1>

              <div className='space-y-6'>
                <p className='mb-3 md:text-[18px] text-[13px] font-[400]'>You can reach out through any of our social handles</p>

                <div className='flex space-x-3'>
                  <div className='rounded-full p-2 cursor-pointer transition-all duration-300 transform hover:scale-105 bg-green-400'><TiSocialFacebook size={20} color='white' /></div>
                  <div className='rounded-full p-2 cursor-pointer transition-all duration-300 transform hover:scale-105 bg-green-400'><RiTwitterXLine size={20} color='white' /></div>
                  <div className='rounded-full p-2 cursor-pointer transition-all duration-300 transform hover:scale-105 bg-green-400'><SlSocialInstagram size={20} color='white' /></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  ) 
}

export default Footer