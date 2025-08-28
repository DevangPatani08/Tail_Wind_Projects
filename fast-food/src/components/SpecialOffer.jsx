import React from 'react'
import OfferStar from './OfferStar';
import specialImage from '../assets/specialImage.png';
import { TbArrowNarrowRight, TbPlus } from 'react-icons/tb';
import { CustomStyle } from '../services/CustomStyle';
import { Link } from 'react-router-dom';

const SpecialOffer = (props) => {
  const { mealImage, altImage } = props;

  return (
    <section className='w-full flex flex-col items-center justify-start box-border px-6 md:px-10'>
      <div className="w-full max-w-[90rem] py-10 md:py-20 px-0 lg:px-6 flex flex-col md:flex-row items-center justify-start box-border gap-12 lg:gap-24">
        {/* Left Area */}
        <div className='w-full md:w-1/2 relative'>
          <div className='absolute top-0 left-0 z-10'>
            <OfferStar className='w-36 md:w-38 lg:w-44 xl:w-56 aspect-square' discountPercentage={30} discountText="OFF" gradientFrom="from-[var(--color-p)]" gradientTo="to-[var(--color-p)]" textColor="text-white" borderColor="border-[var(--color-p)]" />
          </div>
          <div className="w-full aspect-square p-6 z-0 bg-[var(--color-p)]/25 rounded-t-full rounded-br-full">
            <img src={mealImage} alt={specialImage || altImage} className='w-full aspect-square object-cover h-auto rounded-full' />
            <div className='bg-[var(--color-p)] w-fit aspect-square p-2 rounded-full absolute bottom-4 left-4 flex items-center justify-center text-[var(--color-bg-b)]'>
              <TbPlus size={32} />
            </div>
          </div>
        </div>

        {/* Right Area */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start justify-center box-border'>
          <CustomStyle variant='h2' className='w-4/5 md:w-full xl:w-3/5 text-center md:text-left text-[var(--color-n)] mb-4'>Our <span className='text-[var(--color-s)]'>Special offer</span> going on this week</CustomStyle>
          <CustomStyle variant='p_r' className='w-full md:w-4/5 text-center md:text-left text-[var(--color-n-m)] mb-6 md:mb-10'>A good food website design don’t need to be ornamental. It can be simple and straightforward in order to let the food photography shine, try our new tasty food with nice offers.</CustomStyle>
          <CustomStyle variant='l_l_m' asChild>
            <Link to='/menu' onClick={() => { window.scrollTo(0, 0); }} className='w-full md:w-fit px-8 lg:px-10 py-3 bg-[var(--color-p)] text-[var(--color-bg)] rounded-lg flex items-center justify-center gap-2 hover:bg-[var(--color-n)] hover:translate-y-[-2px] transition-all duration-300 ease-linear cursor-pointer uppercase'>
              <span>View Menu</span>
              <TbArrowNarrowRight className='w-5 h-5 lg:w-6 lg:h-6' />
            </Link>
          </CustomStyle>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;