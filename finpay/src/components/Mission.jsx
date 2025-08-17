import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import bg_2 from '../assets/bg_2.png';

const Mission = () => {
  const stats = [
    {title: '24%', label: 'Revenue business'},
    {title: '180K', label: 'In annual revenue'},
    {title: '10+', label: 'Months of runway'},
  ];

  const plans = [
    {title: 'Plus', cost: '£2.99/month', icon: <MdOutlineArrowOutward className='size-6' />},
    {title: 'Premium', cost: '£6.99/month', icon: <MdOutlineArrowOutward className='size-6' />}
  ]

  return (
    <section className='w-full py-24 lg:py-40'>
      <div className='w-full max-w-7xl px-6 md:px-10 flex flex-col items-center mx-auto gap-12 lg:gap-24'>
        <div className='w-full flex flex-col gap-0'>
          <p className='w-full uppercase text-green-500 font-medium mb-3 text-center'>Our Mission</p>
          <h2 className='w-full lg:w-3/7 mx-auto text-center text-3xl lg:text-5xl font-bold text-gray-900 mb-5'>We've helped innovative companies</h2>
          <p className='w-full md:w-1/2 lg:w-1/3 text-gray-900/75 text-center text-md md:text-lg mx-auto'>Hundreds of all sizes and across all industries have made a big improvements with us.</p>
        </div>
        <div className='w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-24 gap-6'>
          {stats.map((item, i) => (
            <div key={i} className='grid-span-1 flex flex-col gap-3 mx-auto'>
              <h3 className='text-center text-blue-900 font-bold text-4xl lg:text-5xl'>{item.title}</h3>
              <p className='text-center text-gray-900/75'>{item.label}</p>
            </div>
          ))}
        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 px-4 gap-12'>
          <div className='grid-span-1 h-56 md:h-72 p-10 bg-green-100 text-blue-900 rounded-xl flex flex-col items-start justify-between font-bold hover:shadow-xl hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out'>
            <h2 className='w-full text-left text-4xl lg:text-5xl'>{plans[0].title}</h2>
            <div className='w-full flex flex-row items-center justify-between'>
              <p className='text-left text-xl'>{plans[0].cost}</p>
              {plans[0].icon}
            </div>
          </div>
          <div className='grid-span-1 h-56 md:h-72 p-10 rounded-xl flex flex-col items-start justify-between font-bold text-white bg-no-repeat bg-cover bg-center hover:shadow-xl transition-all duration-300 ease-in-out' style={{backgroundImage: `url(${bg_2})`}}>
            <h2 className='w-full text-left text-4xl lg:text-5xl '>{plans[1].title}</h2>
            <div className='w-full flex flex-row items-center justify-between'>
              <p className='text-left text-xl'>{plans[1].cost}</p>
              {plans[1].icon}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission