import React from 'react';
import icon_1 from '../assets/icon_1.png'
import icon_2 from '../assets/icon_2.png'
import icon_3 from '../assets/icon_3.png'

const Feature = () => {
  const features = [
    {icon: icon_1, title: 'Free transfers', text: 'Create a financial experienceay and automate repeat purchases by scheduling recurring payments.'},
    {icon: icon_2, title: 'Multiple account', text: 'Run your operations with cash form your account and generate yield on funds stored in your account.'},
    {icon: icon_3, title: 'Unmatched security', text: 'Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.'},
  ];

  return (
    <section className='w-full -mt-48 px-6 md:px-10'>
      <div className='w-full max-w-7xl p-8 md:p-24 lg:p-28 bg-white rounded-2xl shadow-lg mx-auto'>
        <p className='uppercase text-green-500 font-medium mb-3 text-center lg:text-left'>Future Payment</p>
        <div className='w-full h-auto flex flex-col lg:flex-row items-start gap-4 lg:gap-24 mb-16'>
          <h2 className='w-full lg:w/4/7 text-center lg:text-left text-3xl lg:text-5xl font-bold text-gray-900'>Experience that grows with your scale.</h2>
          <p className='w-full text-center lg:text-left lg:w-3/7 text-gray-900/75'>Design a financial operating system that works for your business and streamlined cashflow management</p>
        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {features.map((feature, i) => (
            <div key={i} className="grid-span-1 h-auto flex flex-col items-center lg:items-start justify-start px-6">
              <img src={feature.icon} alt="" className='size-16 mb-6' />
              <h3 className='text-center lg:text-left text-xl md:text-2xl text-gray-900 mb-3'>{feature.title}</h3>
              <p className='text-center lg:text-left text-gray-900/75'>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature