import React from 'react'
import connect_bg from '../assets/connect_bg.jpg';
import { CustomStyle } from '../services/CustomStyle';
import { Link } from 'react-router-dom';
import { TbArrowNarrowRight } from 'react-icons/tb';

const ConnectSection = () => {
  return (
    <section className='w-full flex flex-col items-center justify-start box-border px-6 md:px-10'>
      <div className='w-full h-fit max-w-[90rem] py-10 md:py-20 px-0 lg:px-6 flex flex-col items-center justify-start box-border gap-12 lg:gap-24'>
        <div className='w-full h-[20rem] rounded-3xl shadow-md relative bg-[var(--color-bg-b)] overflow-hidden'>
          <img src={connect_bg} className='w-full h-full object-cover scale-[1.3]' />
          <div className='absolute inset-0 bg-[var(--color-n)]/60 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 p-10'>
            <div className='flex flex-col gap-2'>
              <CustomStyle variant='h1' className='text-left text-[var(--color-bg-b)]'>Something On Your Mind?</CustomStyle>
              <CustomStyle variant='p_L_m' className='text-left text-[var(--color-bg-b)]'>Connect with our support crew right away!</CustomStyle>
            </div>
            <Link to='/contact' onClick={() => { window.scrollTo(0, 0); }} className='w-fit h-fit px-8 py-4 bg-[var(--color-p)] text-left text-[var(--color-bg-b)] uppercase rounded-lg flex gap-2 items-center justify-center hover:bg-[var(--color-s)] transition-colors duration-300 ease-in-out cursor-pointer'>
              <CustomStyle variant='p_L_m'>Get in touch</CustomStyle>
              <TbArrowNarrowRight size={32} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection