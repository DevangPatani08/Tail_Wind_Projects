import React from 'react';
import errorImg from '../assets/404_error.png';
import { CustomStyle } from '../services/CustomStyle';
import { TbArrowNarrowRight } from 'react-icons/tb';

const Page404 = () => {
  return (
    <div className='w-full px-7 md:px-10 py-4 flex items-center justify-center box-border max-h-screen mt-24'>
      <div className='w-full max-w-[90rem] flex flex-col items-center justify-center gap-2 h-full'>
        <img src={errorImg} alt="" className='h-auto w-full md:w-[90%] lg:w-[36%]' />
        <div class="w-full text-center">
          <CustomStyle variant='display_L' align='center' className='w-full text-[var(--color-n)]'>
            Page not found
          </CustomStyle>
          <CustomStyle variant='l_l_m' align='center' className='w-full mt-6 text-[var(--color-n-m)]'>
            Sorry, we couldn’t find the page you’re looking for.
          </CustomStyle>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <CustomStyle variant='l_l_m'>
              <a href="/" onClick={() => { window.scrollTo(0, 0); }} className="rounded-lg bg-[var(--color-p)] px-6 py-2.5 lg:py-3 text-white shadow-xs hover:bg-[var(--color-n)] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-n)] transition-all duration-300 flex flex-row items-center gap-2 justify-center">
                Go back home
              </a>
            </CustomStyle>
            <CustomStyle variant='p_m' asChild>
              <a href="/contact" onClick={() => { window.scrollTo(0, 0); }} className="px-6 py-2.5 lg:py-3 text-[var(--color-n)] hover:text-[var(--color-p)] transition-all duration-300 flex flex-row items-center gap-2 justify-center">
                <span>Contact support</span>
                <TbArrowNarrowRight className='w-5 h-5 lg:w-6 lg:h-6' />
              </a>
            </CustomStyle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;