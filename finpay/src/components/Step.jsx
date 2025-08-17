import React from 'react'

const Step = () => {
  const steps = [
    { id: '1', title: 'Open your account', text: 'Sign up to finpay and set your account from the dashboard.'},
    { id: '2', title: 'Transfer your money', text: 'Move money from another account and start to earning up.'},
    { id: '3', title: 'Watch your balance grow', text: 'Accessed instantly and remain insulated from market volatility.'},
  ];

  return (
    <section className='w-full py-24 lg:py-40 bg-green-900 text-white'>
      <div className='w-full max-w-7xl px-6 md:px-10 flex flex-col items-center mx-auto gap-6 lg:gap-16'>
        <div className='w-full'>
          <p className='w-full uppercase text-green-500 font-medium mb-3 text-center lg:text-left'>Step</p>
          <h2 className='w-full lg:w-5/7 text-center lg:text-left text-3xl lg:text-5xl font-bold'>Maximize your returns with a Reserve account that generates.</h2>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (

            <div key={i} className='grid-span-1 p-8 bg-green-800 shadow-lg rounded-xl'>
              <h3 className='text-center lg:text-left text-8xl font-extrabold mb-2'><span className='text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-gray-100/0 to-70%'>{step.id}</span></h3>
              <h3 className='text-xl lg:text-2xl text-center lg:text-left font-bold mb-2'>{step.title}</h3>
              <p className=' w-full text-center lg:text-left text-md text-white/75 font-medium'>{step.text}</p>
            </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Step