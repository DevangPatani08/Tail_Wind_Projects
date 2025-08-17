import React from 'react';
import withdrawImg from '../assets/withDraw.png';
import chartImg from '../assets/chartImage.png';

const Why = () => {
  return (
    <section className='w-full py-24'>
      <div className='w-full max-w-7xl px-6 md:px-10 flex flex-col items-center mx-auto'>
        <div className='w-full flex flex-col gap-0'>
          <p className='w-full uppercase text-green-500 font-medium mb-3 text-center'>Why us</p>
          <h2 className='w-full text-center text-3xl lg:text-5xl font-bold text-gray-900 mb-16'>Why they prefer Finpay</h2>
        </div>
        <div className='w-full flex flex-col gap-12'>
          <div className='w-full flex flex-col lg:flex-row gap-12'>
            <div className='w-full lg:w-1/2 bg-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out'>
              <h3 className='w-full text-center lg:text-left text-8xl font-bold text-green-500 mb-10'>3K+</h3>
              <h6 className='w-full lg:w-4/5 text-center lg:text-left text-2xl lg:text-3xl text-gray-900'>Businesses already running on Finpay</h6>
            </div>
            <div className='w-full lg:w-1/2 bg-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out'>
              <h6 className='w-full lg:w-4/5 text-center lg:text-left text-2xl lg:text-3xl text-gray-900 mb-6'>Instant Withdraw your funds at any time</h6>
              <img src={withdrawImg} alt="Withdraw Image" className='w-full lg:w-4/5 h-auto mx-auto'/>
            </div>
          </div>
          <div className='w-full bg-green-100 rounded-2xl px-8 pt-8 lg:px-12 lg:pt-12 flex flex-col lg:flex-row gap-10 lg:gap-20 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out'>
            <div className='w-full lg:w-2/5'>
              <h6 className='text-center lg:text-left text-2xl lg:text-3xl text-gray-900 mb-6'>No asset volatility</h6>
              <p className='text-center lg:text-left text-gray-900/75'>Generate returns on your cash reserves without making any investments.</p>
            </div>
            <img src={chartImg} alt="Chart Image" className='w-full lg:w-3/5 -mb-12 md:-mb-8 lg:-mb-8 shadow-lg' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why