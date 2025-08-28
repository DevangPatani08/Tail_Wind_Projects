import React, { useEffect, useRef, useState } from 'react'
import { CustomStyle } from '../services/CustomStyle';
import { Link, useLocation } from 'react-router-dom';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { fetchCategories, fetchMealsByCategory } from '../services/api';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const navRef = useRef(null);
  const contentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();

      const misCategory = data.filter(c => c.strCategory !== 'Miscellaneous');

      const otherCategories = data.filter(c => c.strCategory !== 'Miscellaneous').sort((a, b) => a.strCategory.localeCompare(b.strCategory));

      const sortedCategories = [...otherCategories];

      if (misCategory) {
        sortedCategories.push(misCategory);
      }

      setCategories(sortedCategories);
      const params = new URLSearchParams(location.search);
      const urlCategory = params.get('category');
      
      if (urlCategory && sortedCategories.some(c => c.strCategory === urlCategory)) {
        setActiveCategory(urlCategory);
      } else if (sortedCategories.length > 0) {
        setActiveCategory(sortedCategories[0].strCategory);
      }
    };

    loadCategories();
  }, [location.search]);

  useEffect(() => {
    const loadMeals = async () => {
      if (activeCategory) {
        const data = await fetchMealsByCategory(activeCategory);
        setMeals(data);
      }
    };
    loadMeals();
  }, [activeCategory]);


  return (
    <section className='w-full flex flex-col items-center justify-start box-border px-6 md:px-10'>
      <div className='w-full max-w-[90rem] pt-24 flex flex-col items-center justify-start box-border'>
        <div className='w-full flex items-center justify-start box-border mb-4'>
          <CustomStyle variant='l_c_m' asChild>
            <Link to='/' onClick={() => { window.scrollTo(0, 0); }} className='w-fit px-8 lg:px-10 py-3 text-[var(--color-n-m)] hover:text-[var(--color-p)] flex items-center justify-center gap-2 transition-all duration-300 ease-linear cursor-pointer capitalize'>
              <TbArrowNarrowLeft className='w-5 h-5 lg:w-6 lg:h-6' />
              <span>Back to home</span>
            </Link>
          </CustomStyle>
        </div>

        <div className='w-full flex flex-col items-center justify-start box-border mb-10'>
          <CustomStyle variant='h2' className='w-full text-[var(--color-n)] text-center mb-2'>Our <span className='text-[var(--color-s)]'>Recipes</span></CustomStyle>
          <CustomStyle variant='p_m' className='w-full text-center text-[var(--color-n-m)]'>Find your next favorite meal from our diverse recipe collection</CustomStyle>
        </div>

        {/* Categories Navigation */}
        <div ref={navRef} className='w-full flex flex-wrap items-center justify-center gap-2 mb-8 lg:mb-12'>
          {categories.map((c) => (
            <CustomStyle key={`recipe${c.strCategory}`} variant='p_m' className='text-center w-fit text-[var(--color-n)]'>
              <button
                type='button'
                onClick={() => setActiveCategory(c.strCategory)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeCategory === c.strCategory ? 'bg-[var(--color-p)] text-[var(--color-bg-b)] shadow-md' : 'bg-transparent text-[var(--color-n)] hover:bg-[var(--color-s)]'}`}
              >
                {c.strCategory}
              </button>
            </CustomStyle>
          ))}
        </div>

        <div className='w-full flex items-center justify-between mb-6'>
          <CustomStyle variant='h3' className='text-left w-full text-[var(--color-n)]'>{activeCategory}</CustomStyle>
          <CustomStyle variant='l_c_b' className='w-full text-right text-[var(--color-n-m)]'>{meals.length} items</CustomStyle>
        </div>
        <ul ref={contentRef} className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start justify-start w-full'>
          {meals.map(meal => (
            <li key={meal.idMeal} className='food-card'>
              <RecipeCard meal={meal}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Recipes