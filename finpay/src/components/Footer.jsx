import React from 'react';
import logo from '../assets/logoDark.png';
import { footerLinks } from '../data';
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const designerLink = 'https://dribbble.com/dipauix';
  const coderLink = 'https://www.behance.net/devangmrugeshpatani';
  return (
    <footer className='w-full min-h-[150vh] md:min-h-[100vh] lg:min-h-[75vh] px-4 md:px-12 pt-6 flex flex-col gap-4 items-center justify-end bg-green-100'>
      <div className='max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 lg:gap-24 px-0 py-4 md:py-8'>
        <a href='/' className='w-full lg:w-1/5 flex justify-center lg:justify-start items-start'>
          <img src={logo} alt="Finpay" className='w-2/7 lg:w-5/7 h-auto' />
        </a>

        <div className='w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-24'>
          {Object.entries(footerLinks).map(([category, links], i) => (
            <div key={i} className='grid-span-1 text-center lg:text-left'>
              <h3 className='text-xl md:text-2xl font-semibold mb-4 text-gray-900 capitalize'>{category}</h3>
              <ul className='flex flex-col gap-2'>{links.map((link, j) => (
                <a key={j} href={link.href} className='w-full py-2 transition-colors duration-300 ease-in-out text-md md:text-lg text-gray-900 hover:text-green-500 hover:font-medium capitalize'>{link.label}</a>
              ))}</ul>
            </div> 
          ))}
        </div>
        
        <div className='w-full lg:w-1/5 flex flex-col justify-start items-center lg:items-end'>
          <h3 className='text-xl md:text-2xl font-semibold mb-4 text-gray-900 capitalize'>Follow us on</h3>
          <div className='w-full flex gap-4 lg:gap-3 items-center justify-center lg:justify-end'>
            <a href="/" className='text-blue-900 rounded-full p-3 hover:bg-green-100 hover:text-green-500 transition-all duration-300 ease-in-out'><FaTwitter className='size-6'/></a>
            <a href="/" className='text-blue-900 rounded-full p-3 hover:bg-green-100 hover:text-green-500 transition-all duration-300 ease-in-out'><FaLinkedin className='size-6'/></a>
            <a href="/" className='text-blue-900 rounded-full p-3 hover:bg-green-100 hover:text-green-500 transition-all duration-300 ease-in-out'><FaFacebook className='size-6'/></a>
          </div>
        </div>
      </div>
      <div className='max-w-7xl w-full py-8 border-t-1 border-gray-500 text-md font-medium flex flex-col lg:flex-row justify-between text-gray-900 gap-2 lg:gap-0'>
        <p className='text-center lg:text-left'>&copy; Finpay {new Date().getFullYear()}. All Rights Reserved.</p>
        <p className='text-center lg:text-right'>designed by <a href={designerLink} className='text-green-500' target='blank'>Dipa UI/UX</a> and developed by <a href={coderLink} className='text-green-500' target='blank'>Devang Patani</a>.</p>
      </div>
    </footer>
  )
}

export default Footer;
