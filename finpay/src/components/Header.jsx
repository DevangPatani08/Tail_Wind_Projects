import React, { useState } from 'react';
import logo from '../assets/logoDark.png';
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isColor, setIsColor] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setIsColor(true);
    } else {
      setIsColor(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const navLinks = [
    {label: 'products', href: '/'},
    {label: 'customers', href: '/'},
    {label: 'pricing', href: '/'},
    {label: 'learn', href: '/'},
  ];

  return (
    <header className={`w-full h-auto fixed top-0 left-0 right-0 py-2 px-6 flex flex-col gap-0 z-[999] ${isColor ? "bg-white" : "bg-transparent"} `}>
    {/* <header className='w-full bg-transparent h-auto fixed top-0 left-0 right-0 py-2 px-6 flex flex-col gap-0 z-[999]'> */}
      <nav className='w-full h-14 lg:h-16 flex flex-row gap-1 lg:gap-6  items-center'>
        
        {/* Brand Logo */}
        <div className='w-auto h-full flex flex-row items-center justify-start'>
          <a href="/" className='cursor-pointer'>
            <img src={logo} alt="Finpay" className='w-auto h-11 lg:w-88 lg:h-auto' />
          </a>
        </div>

        {/* Nav Links */}
        <ul className='hidden w-full h-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:gap-4 px-8 py-2'>
          {navLinks.map((navLink, index) => (
            <li key={index} className='cursor-pointer'><a href={navLink.href} className='text-center text-gray-900 hover:text-green-500 capitalize font-semibold text-md px-4 py-2 rounded-lg hover:bg-green-100 transition-colors duration-300 ease-in-out'>{navLink.label}</a></li>
          ))}
        </ul>
        
        {/* button group */}
        <div className='hidden w-full h-full lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-4'>
          
          {/* btn type 1 */}
          <button className='px-6 py-2 bg-white border-1 rounded-lg border-gray-500 text-lg text-gray-900 font-medium hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer' type='button'>Login</button>
          
          {/* btn type 2 */}
          <button className='px-6 py-2 border-1 rounded-lg text-lg font-medium bg-green-500 border-green-500 text-white hover:bg-white hover:border-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer' type='button'>Sign Up</button>

        </div>
        
        {/* Menu button */}
        <div className='lg:hidden w-full h-full flex items-center justify-end'>
          <button type="button" className='w-fit h-fit p-2 bg-white border-1 border-green-500 rounded-md text-2xl text-green-500 hover:text-white hover:bg-green-500 transition-all duration-300 ease-in-out' onClick={() => setMenuIsOpen(!menuIsOpen)}>
            {menuIsOpen ? <HiX />: <HiMenu /> }
          </button>
        </div>
      </nav>
      
      {/* Mobile Nav section */}
      {menuIsOpen && (
        <div className='flex flex-col gap-0 pb-4 lg:hidden'>
          
          {/* Nav Links */}
          <ul className='w-full h-full flex flex-col items-left justify-start gap-6 py-8'>
            {navLinks.map((navLink, index) => (
              <li key={index} className='cursor-pointer px-4 py-2'><a href={navLink.href} className='w-full text-left text-gray-900 capitalize font-semibold text-lg'>{navLink.label}</a></li>
            ))}
          </ul>
        
          {/* button group */}
          <div className='w-full h-full flex flex-col items-center gap-4'>
            
            {/* btn type 1 */}
            <button className='w-full px-6 py-2 bg-white border-1 rounded-lg border-gray-500 text-lg text-gray-900 font-medium hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer' type='button'>Login</button>
            
            {/* btn type 2 */}
            <button className='w-full px-6 py-2 border-1 rounded-lg text-lg font-medium bg-green-500 border-green-500 text-white hover:bg-white hover:border-gray-400 hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer' type='button'>Sign Up</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;