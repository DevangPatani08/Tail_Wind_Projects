import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const CTA = () => {
  return (
    <section className='w-full px-6 md:px-10 pt-12 -mb-35'>
      <div className='w-full max-w-7xl h-[auto] lg:h-[40vh] px-8 py-7 md:px-16 md:py-14 flex flex-col lg:flex-row items-center mx-auto gap-12 bg-green-900 text-white rounded-2xl'>
        <div className='w-full text-center lg:text-left'>
          <p className='w-full uppercase text-green-500 font-medium mb-3'>Try it now</p>
          <h2 className='w-full text-3xl lg:text-5xl mb-5'>Ready to level up your payment process?</h2>
          <p className='w-full md:w-4/5 text-white/75 text-md mx-auto lg:mx-0'>Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
        </div>
        <div className='w-full h-full flex flex-col lg:flex-row items-center justify-end gap-4 lg:gap-8'>
          <button type='button' className='w-full lg:w-max lg:px-6 py-3 bg-green-500 border-1 border-green-500 rounded-xl flex flex-row items-center justify-center hover:bg-transparent hover:border-1 hover:border-green-100 transition-all duration-300 ease-in-out'>
            <span className='text-lg font-bold'>Get Started Now</span>
          </button>
          <button type='button' className='w-full lg:w-max lg:px-6 py-3 border border-green-100 rounded-xl flex flex-row gap-4 items-center justify-center hover:bg-green-500 hover:border-1 hover:border-green-500 transition-all duration-300 ease-in-out'>
            <span className='text-lg font-bold'>Learn More</span>
            <MdOutlineArrowOutward className='size-6' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA