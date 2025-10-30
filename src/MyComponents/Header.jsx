import React, {useState} from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const openNav = () => {
        setToggle(!toggle)
    }

  return (
    <header className='w-full'>
        <div className={`p-5 w-[60%] sm:w-[45%] h-[100vh] bg-[#1D1C1D]/70 backdrop-blur-md transition-all duration-900 overflow-hidden fixed ${toggle ?  'md:hidden -translate-x-0' : '-translate-x-[100%]'}`}>

            <div onClick={openNav} className='w-fit ml-auto'><FaTimes color='white' size={30} /></div>

            <nav className='flex items-center justify-center'>
                <ul className='flex flex-col gap-4 text-lg text-white'>
                    <li><a className='hover:text-gray-500' href="/Home">Home</a></li>
                    <li><a className='hover:text-gray-500' href="/About">About</a></li>
                    <li><a className='hover:text-gray-500' href="/Services">Services</a></li>
                    <li><a className='hover:text-gray-500' href="/Contact">Contact</a></li>
                </ul>
            </nav>
        </div>

        <div className='max-w-[1200px] mx-auto mb-5 flex py-7 px-8 items-center justify-between'>
            <div className=''>
                <nav className='hidden md:flex items-center'>
                    <ul className='flex gap-8 text-lg text-white'>
                        <li><a className='hover:text-gray-500' href="/Home">Home</a></li>
                        <li><a className='hover:text-gray-500' href="/About">About</a></li>
                        <li><a className='hover:text-gray-500' href="/Services">Services</a></li>
                        <li><a className='hover:text-gray-500' href="/Contact">Contact</a></li>
                    </ul>
                </nav>
                
                <div onClick={openNav} className='text-3xl md:hidden text-white'><HiMenuAlt3 color='white' size={30} /></div>
            </div>
            <div className='rounded-full px-4 py-2 text-xl text-white font-bold bg-[#EC7E28]'>+1 (234) 567-8910</div>
        </div>

    </header>
  )
}

export default Header