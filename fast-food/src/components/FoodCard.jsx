import { useDispatch, useSelector } from 'react-redux';
import { CustomStyle } from '../services/CustomStyle';
import { cartActions } from '../store/cartSlice';
import { TbMinus, TbPlus } from 'react-icons/tb';


const FoodCard = ({ meal }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(s => (s.cart.items.find(i => i.id === meal.idMeal)));
  const quantity = cartItem ? cartItem.quantity : 0;

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: meal.idMeal,
      name: meal.strMeal,
      price: 9.99,
      image: meal.strMealThumb,
      category: meal.strCategory
    }));
  };

  const incrementQuantity = () => {
    dispatch(cartActions.addItem({ id: meal.idMeal }));
  };

  const decrementQuantity = () => {
    dispatch(cartActions.removeItem(meal.idMeal));
  };

  return (
    <div className='col-span-1 h-100 overflow-hidden bg-[var(--color-bg-b)] rounded-lg flex flex-col group hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out'>
      <div className="relative overflow-hidden h-3/5 w-full">
        <img src={meal.strMealThumb} alt={meal.strMeal} className='absolute w-full h-full group-hover:scale-[1.15] transition-all duration-[0.4s] ease-linear' />
      </div>
      <div className='w-full h-2/5 p-6 flex flex-col items-start justify-between'>
        <CustomStyle variant='h6' className='text-left text-[var(--color-n)] mb-2'>
          <span className='line-clamp-1'>{meal.strMeal}</span>
        </CustomStyle>
        <div className='w-full flex gap-6 items-center justify-between'>
          <CustomStyle variant='h4' className='text-left text-red-500'>$9.99</CustomStyle>
          {quantity === 0 ? (
            <div className='w-full h-fit flex gap-0 items-center justify-end'>
              <button type="button" className='p-2 flex items-center justify-center text-[var(--color-bg-b)] rounded-md border-1 border-[var(--color-s)] bg-[var(--color-s)] hover:border-[var(--color-p)] hover:bg-[var(--color-p)] transition-all duration-300 ease-in-out  cursor-pointer' onClick={addToCart}>
                <TbPlus size={24} />
              </button>
            </div>
          ) : (
            <div className='w-full h-full flex gap-0 items-center justify-end'>
              <button type="button" className='p-2 flex items-center justify-center text-[var(--color-n-m)] rounded-md border-1 border-[var(--color-n-m)] bg-[var(--color-bg-b)] hover:border-[var(--color-p)] hover:bg-[var(--color-p)] hover:text-[var(--color-bg-b)] transition-all duration-300 ease-in-out  cursor-pointer' onClick={decrementQuantity}>
                <TbMinus size={24} />
              </button>
              <CustomStyle variant='p_L_m' className='w-full text-center text-[var(--color-n-m)] flex items-center justify-center'>
                <span className='w-full h-full'>
                  {quantity}
                </span>
              </CustomStyle>
              <button type="button" className='p-2 flex items-center justify-center text-[var(--color-bg-b)] rounded-md border-1 border-[var(--color-s)] bg-[var(--color-s)] hover:border-[var(--color-p)] hover:bg-[var(--color-p)] transition-all duration-300 ease-in-out  cursor-pointer' onClick={incrementQuantity}>
                <TbPlus size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;