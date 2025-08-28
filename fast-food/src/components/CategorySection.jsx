import React from 'react'
import { CustomStyle } from '../services/CustomStyle';
import CategoryCard from './CategoryCard';

const CategorySection = (props) => {
  const { categories } = props;
  return (
    <section className='w-full flex flex-col items-center justify-start box-border px-6 md:px-10 py-10'>
      <div className='w-full h-auto max-w-[90rem] pt-24 px-0 lg:px-6 flex flex-col items-center justify-start box-border'>
        <CustomStyle variant='h2' className='w-full text-center mb-8 md:mb-10'>All <span className='text-[var(--color-s)]'>Categories</span></CustomStyle>
        
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {categories.map((c) => (
            <CategoryCard key={c.idCategory} category={c} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection;