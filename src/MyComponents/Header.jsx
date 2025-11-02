import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const location = useLocation()
    useEffect(() => {
        // scroll immediately to top when pathname changes
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [location.pathname])

    const openNav = () => setToggle(!toggle)
    const closeNav = () => setToggle(false)

  return (
    <header className='w-full'>
        <div className={`p-5 w-[60%] sm:w-[45%] h-[100vh] bg-[#1D1C1D]/70 backdrop-blur-md transition-all duration-900 overflow-hidden fixed z-50 ${toggle ?  'md:hidden -translate-x-0' : '-translate-x-[100%]'}`}>

            <div onClick={closeNav} className='w-fit ml-auto'><FaTimes color='white' size={30} /></div>

                <nav className='flex items-center justify-center' onClick={e => e.stopPropagation()}>
                <ul className='flex flex-col gap-4 text-lg text-white'>
                    <li>
                        <NavLink to="/Home" onClick={closeNav} className={({isActive}) => isActive ? 'text-[#EC7E28]' : 'hover:text-gray-500'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" onClick={closeNav} className={({isActive}) => isActive ? 'text-[#EC7E28]' : 'hover:text-gray-500'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services" onClick={closeNav} className={({isActive}) => isActive ? 'text-[#EC7E28]' : 'hover:text-gray-500'}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" onClick={closeNav} className={({isActive}) => isActive ? 'text-[#EC7E28]' : 'hover:text-gray-500'}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        {/* backdrop: clicking this closes the mobile nav */}
        {toggle && (
            <div
                className='fixed inset-0 bg-black/50 z-40 md:hidden'
                onClick={closeNav}
                aria-hidden='true'
            />
        )}

        <div className='max-w-[1200px] mx-auto mb-5 flex py-7 px-8 items-center justify-between'>
            <div className=''>
                <nav className='hidden md:flex items-center'>
                    <ul className='flex gap-8 text-lg text-white'>
                        <li>
                            <NavLink to="/Home" className={({isActive}) => isActive ? 'text-[#EC7E28]' : 'hover:text-gray-500'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" className={({isActive}) => isActive ? 'text-[#EC7E28]' : 'hover:text-gray-500'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Services" className={({isActive}) => isActive ? 'text-[#EC7E28]' : 'hover:text-gray-500'}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact" className={({isActive}) => isActive ? 'text-[#EC7E28]' : 'hover:text-gray-500'}>Contact</NavLink>
                        </li>
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