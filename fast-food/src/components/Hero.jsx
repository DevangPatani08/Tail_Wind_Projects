import React from 'react';
import { CustomStyle } from "../services/CustomStyle.jsx";
import { TbArrowNarrowRight, TbSalad } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroImage.png';
import sample_1 from '../assets/sample_1.png';
import sample_2 from '../assets/sample_2.png';
import sample_3 from '../assets/sample_3.png';
import veggy_1 from '../assets/veggy_1.png';
import veggy_2 from '../assets/veggy_2.png';
import veggy_3 from '../assets/veggy_3.png';
import veggy_4 from '../assets/veggy_4.png';

const Hero = () => {
  return (
    <section className='w-full bg-[var(--color-bg-b)]'>
        {/* Hero Top */}
        <div className='w-full bg-[var(--color-bg-d)] flex flex-col items-center justify-start box-border px-6 md:px-10'>
          <div className="w-full max-w-[90rem] pt-24 px-0 lg:px-6 flex flex-col items-center justify-start box-border">
            <div className='w-full flex flex-col md:flex-row items-start justify-start box-border gap-12 md:gap-4 py-10 mb-20'>
              <div className="w-full md:w-1/2">
                <CustomStyle variant='display_L' align='center lg:left' className='w-full text-[var(--color-n)] lg:w-4/5 mb-4 lg:mb-6'>
                  Explore our <span className='text-[var(--color-s)]'>Scrumptious</span> Meal Creation
                </CustomStyle>
                <CustomStyle variant='l_l_r' className='w-full mb-8 lg:mb-12' asChild>
                  <ul className='text-[var(--color-n-m)] w-full flex flex-col items-start justify-start gap-3'>
                    <li className='flex items-center gap-4'>
                      <TbSalad className='text-[var(--color-p)] w-6 h-6 lg:w-8 lg:h-8' />
                      <span className='w-full'>Handcrafted with fresh, locally-sourced ingredients.</span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <TbSalad className='text-[var(--color-p)] w-6 h-6 lg:w-8 lg:h-8' />
                      <span className='w-full'>Every dish tells a unique story.</span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <TbSalad className='text-[var(--color-p)] w-6 h-6 lg:w-8 lg:h-8' />
                      <span className='w-full'>Chef-curated flavors delivered to your door in minutes.</span>
                    </li>
                    <li className='flex items-center gap-4'>
                      <TbSalad className='text-[var(--color-p)] w-6 h-6 lg:w-8 lg:h-8' />
                      <span className='w-full'>Your perfect meal is just a click away—order now!</span>
                    </li>
                  </ul>
                </CustomStyle>
                <CustomStyle variant='l_l_m' asChild>
                  <Link to='/menu' onClick={() => { window.scrollTo(0, 0); }} className='w-full md:w-fit px-8 lg:px-10 py-3 bg-[var(--color-p)] text-[var(--color-bg)] rounded-lg flex items-center justify-center gap-2 hover:bg-[var(--color-n)] hover:translate-y-[-2px] transition-all duration-300 ease-linear cursor-pointer uppercase'>
                    <span>Browse Menu</span>
                    <TbArrowNarrowRight className='w-5 h-5 lg:w-6 lg:h-6' />
                  </Link>
                </CustomStyle>
              </div>
            <div className="w-full md:w-1/2"><img src={heroImage} sizes='full' /></div>
          </div>
        </div>
      </div>
      
      {/* Hero Bottom */}
      <div className='w-full bg-transparent -mt-20 lg:-mt-24 flex flex-col items-center justify-center px-6 md:px-10 pb-10 lg:pb-20'>
        <div className="w-full max-w-[90rem] px-0 lg:px-6 flex flex-col md:flex-row items-end justify-center gap-10 lg:gap-12">
          
          {/* Left Area */}
          <div className='w-full md:w-3/5 grid grid-cols-3 items-center justify-center gap-6'>
            <img src={sample_1} alt="sample_1.png" className='col-span-1 h-[20rem] md:h-[24rem] lg:h-[35rem] object-cover rounded-full'/>
            <img src={sample_2} alt="sample_2.png" className='col-span-1 h-[20rem] md:h-[24rem] lg:h-[35rem] object-cover rounded-full'/>
            <img src={sample_3} alt="sample_3.png" className='col-span-1 h-[20rem] md:h-[24rem] lg:h-[35rem] object-cover rounded-full'/>
          </div>
          
          {/* Right Area */}
          <div className='w-full md:w-2/5 flex flex-col items-center md:items-start justify-end box-border gap-2.5 lg:gap-4'>
            <span className='w-1/8 h-2 bg-[var(--color-n-m)] rounded-full'></span>
            <CustomStyle variant='h2' className='w-full text-center md:text-left text-[var(--color-n)]'>
              About <span className='text-[var(--color-s)]'>Us</span>
            </CustomStyle>
            <CustomStyle variant='p_r' className='text-center text-[var(--color-n-m)] md:text-left'>Enjoy chef-crafted meals delivered in 30 mins, made with fresh local ingredients—personalized to your taste, with transparent tracking and rewards for every order!</CustomStyle>
            <CustomStyle variant='l_l_m' asChild>
              <Link to='/about' onClick={() => { window.scrollTo(0, 0); }} className='w-full md:w-fit px-8 lg:px-10 py-3 bg-[var(--color-p)] text-[var(--color-bg)] rounded-lg flex items-center justify-center gap-2 hover:bg-[var(--color-n)] hover:translate-y-[-2px] transition-all duration-300 ease-linear cursor-pointer uppercase'>
                <span>Learn More</span>
                <TbArrowNarrowRight className='w-5 h-5 lg:w-6 lg:h-6' />
              </Link>
            </CustomStyle>
            <div className='w-full h-fit grid grid-cols-4 gap-4 md:gap-6'>
              <img src={veggy_1} alt="" className='col-span-1 h-auto object-cover rounded-full' />
              <img src={veggy_2} alt="" className='col-span-1 h-auto object-cover rounded-full' />
              <img src={veggy_3} alt="" className='col-span-1 h-auto object-cover rounded-full' />
              <img src={veggy_4} alt="" className='col-span-1 h-auto object-cover rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero