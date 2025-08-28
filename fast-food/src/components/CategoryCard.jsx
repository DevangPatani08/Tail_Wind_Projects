import React from 'react';
import { CustomStyle } from '../services/CustomStyle';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
  const c = props.category;

  return (
    <Link to={`/menu?category=${c.strCategory}`} className='col-span-1 h-[11.25rem] rounded-lg shadow-sm overflow-hidden border-0 category-card' onClick={() => { window.scrollTo(0, 0); }}>
      <div className='category-image-container'>
        <img src={c.strCategoryThumb} alt={c.strCategory} className='w-full h-full object-cover category-image' />
        <div className='category-overlay flex items-center justify-center'>
          <CustomStyle variant='p_L_b' className='text-[var(--color-s)] uppercase'>{c.strCategory}</CustomStyle>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;