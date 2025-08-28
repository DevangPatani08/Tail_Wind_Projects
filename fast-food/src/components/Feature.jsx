import React from 'react'
import { CustomStyle } from '../services/CustomStyle';
import food_1 from '../assets/food_1.png';
import food_2 from '../assets/food_2.png';
import food_3 from '../assets/food_3.png';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <section className='w-full flex flex-col items-center justify-start box-border px-6 md:px-10'>
      <div className="w-full max-w-[90rem] py-10 md:py-20 px-0 lg:px-6 flex flex-col items-center justify-start box-border gap-6 lg:gap-10">
        <CustomStyle variant='h2' className='w-4/5 md:w-2/5 lg:w-2/7 text-center mb-6 lg:mb-10 text-[var(--color-n)]'>
          Order delivered in just <span className='text-[var(--color-s)]'>30 minutes</span>
        </CustomStyle>

        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
          <div className="col-span-1 rounded-lg bg-[var(--color-bg-b)] text-center text-[var(--color-n)] p-6 md:p-8 hover:bg-[var(--color-s)] shadow-md hover:translate-y-[-8px] transition-all duration-300 ease-linear flex flex-col items-center justify-start group cursor-pointer">
            <img src={food_1} alt="" className='w-1/4 md:w-1/5 lg:w-1/3 h-auto mb-6' />
            <CustomStyle variant='h3' className='mb-2 group-hover:text-[var(--color-bg-b)]'>Order Your Food</CustomStyle>
            <CustomStyle className='text-[var(--color-n-m)] group-hover:text-[var(--color-bg)]'>Our website is User-friendly you can just order just clicking on 3 simple steps and you will receive.</CustomStyle>
          </div>
          <div className="col-span-1 rounded-lg bg-[var(--color-bg-b)] text-center text-[var(--color-n)] p-6 md:p-8 hover:bg-[var(--color-s)] shadow-md hover:translate-y-[-8px] transition-all duration-300 ease-linear flex flex-col items-center justify-start group cursor-pointer">
            <img src={food_2} alt="" className='w-1/4 md:w-1/5 lg:w-1/3 h-auto mb-6' />
            <CustomStyle variant='h3' className='mb-2 group-hover:text-[var(--color-bg-b)]'>Delivery & Pickup</CustomStyle>
            <CustomStyle className='text-[var(--color-n-m)] group-hover:text-[var(--color-bg)]'>Our website is User-friendly you can just order just clicking on 3 simple steps and you will receive.</CustomStyle>
          </div>
          <div className="col-span-1 rounded-lg bg-[var(--color-bg-b)] text-center text-[var(--color-n)] p-6 md:p-8 hover:bg-[var(--color-s)] shadow-md hover:translate-y-[-8px] transition-all duration-300 ease-linear flex flex-col items-center justify-start group cursor-pointer">
            <img src={food_3} alt="" className='w-1/4 md:w-1/5 lg:w-1/3 h-auto mb-6' />
            <CustomStyle variant='h3' className='mb-2 group-hover:text-[var(--color-bg-b)]'>Delicious Recipe</CustomStyle>
            <CustomStyle className='text-[var(--color-n-m)] group-hover:text-[var(--color-bg)]'>Our website is User-friendly you can just order just clicking on 3 simple steps and you will receive.</CustomStyle>
          </div>
        </div>

        <CustomStyle variant='l_l_m' asChild>
          <Link to='/menu' onClick={() => { window.scrollTo(0, 0); }}>
            <button type="button" className='w-full md:w-fit px-8 lg:px-10 py-3 bg-[var(--color-p)] text-[var(--color-bg)] rounded-lg hover:bg-[var(--color-n)] hover:translate-y-[-2px] transition-all duration-300 ease-linear cursor-pointer uppercase'>
              Order Now
            </button>
          </Link>
        </CustomStyle>
      </div>
    </section>
  )
}

export default Feature