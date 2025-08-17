import React from 'react';
import bgImage from '../assets/bg_1.png';
import { MdOutlineArrowOutward } from "react-icons/md";
import klarnaLogo from '../assets/Klarna.png';
import coinbaseLogo from '../assets/coinbase.png';
import instacartLogo from '../assets/instacart.png';
import heroImage from '../assets/heroImage.png'
const Hero = () => {
  return (
    <section className='h-[180vh] lg:h-[120vh] py-32 w-full px-6 md:px-10 flex justify-center items-start bg-no-repeat bg-cover bg-right-bottom' style={{backgroundImage: `url(${bgImage})`}}>
      <div className='w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-10 items-center'>
        <div className="w-full">
          <h1 className='w-full text-5xl lg:text-6xl font-medium mb-10 lg:mb-18 text-center lg:text-left'>
            <span className='font-bold'>Get paid early</span><br /> save automatically all your pay.
          </h1>
          <p className='text-gray-900/75 text-lg w-full lg:w-4/5'>Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
          <div className='flex flex-col md:flex-row w-full lg:w-4/5 gap-1 items-center bg-white p-1 rounded-lg border border-gray-500 my-14'>
            <input type="email" placeholder='Your business email' className='focus:outline-none bg-transparent px-4 py-2 w-full' />
            <button type="button" className='w-auto flex flex-row gap-2 items-center px-4 py-2 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-900 transition-colors duration-300 ease-in-out'>
              <span className='w-max'>Get Started</span>
              <MdOutlineArrowOutward className='size-6' />
            </button>
          </div>
          <div className='w-full lg:w-4/5 flex items-center justify-between'>
              <img src={klarnaLogo} className='w-auto h-10' alt="Klarna. Logo" />
              <img src={coinbaseLogo} className='w-auto h-10' alt="coinbase Logo" />
              <img src={instacartLogo} className='w-auto h-10' alt="instacart Logo" />
            </div>
        </div>
        <div className="w-full">
          <img src={heroImage} className='w-full h-auto' alt="instacart Logo" />
        </div>
      </div>
    </section>
  )
}

export default Hero