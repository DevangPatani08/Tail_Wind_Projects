import { CustomStyle } from '../services/CustomStyle';
import { TbChefHat } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const RecipeCard = ({ meal }) => {
  return (
    <div className='p-6 col-span-1 h-120 overflow-hidden bg-[var(--color-bg-b)] rounded-lg flex flex-col group hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out'>
      <div className='w-full h-fit pb-4'>
        <CustomStyle variant='h6' className='w-full text-left text-[var(--color-n)] line-clamp-1'>
          {meal.strMeal}
        </CustomStyle>
      </div>
      <div className='w-full h-full rounded-lg relative overflow-hidden mb-4'>
        <img src={meal.strMealThumb} alt={meal.strMeal} className='absolute w-full h-full group-hover:scale-[1.15] transition-all duration-[0.4s] ease-linear' />
      </div>
      <CustomStyle variant='l_l_m'>
        <Link to={`/food/${meal.idMeal}`} onClick={() => { window.scrollTo(0, 0); }} className='w-full pl-6 pr-2 py-2 bg-[var(--color-p)] text-[var(--color-bg-b)] rounded-full flex items-center justify-between uppercase hover:bg-[var(--color-n)] transition-all duration-300 ease-in-out'>
          <span>View Recipe</span>
          <span className='p-2 bg-[var(--color-bg-b)] rounded-full text-[var(--color-p)]'><TbChefHat size={24} /></span>
        </Link>
      </CustomStyle>
    </div>
  );
};

export default RecipeCard;