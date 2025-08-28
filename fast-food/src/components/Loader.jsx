import React from 'react'

const Loader = () => {
  return (
    <section className='w-full flex flex-col items-center justify-start box-border px-6 md:px-10'>
      <div className="w-full max-w-[90rem] pt-24 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading recipe...</div>
      </div>
    </section>
  );
};

export default Loader;