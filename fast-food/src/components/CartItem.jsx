import React from 'react'
import { useDispatch } from 'react-redux';
import { CustomStyle } from '../services/CustomStyle';
import { cartActions } from '../store/cartSlice';
import { TbMinus, TbPlus, TbTrash } from 'react-icons/tb';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    }));
  };

  const handleSub = () => {
    (item.quantity > 1) ? (dispatch(cartActions.removeItem(item.id))) : (dispatch(cartActions.removeItemCompletely(item.id)));
  };

  const handleRemoveItem = () => {
    dispatch(cartActions.removeItemCompletely(item.id));
  };
  
  return (
    <div className='w-full h-fit flex flex-col lg:flex-row items-center p-6 bg-[var(--color-bg-b)] rounded-lg shadow-sm gap-8 lg:gap-4 cursor-pointer'>
      <div className='w-full lg:w-2/4 h-fit flex flex-col md:flex-row gap-2'>
        <img src={item.image} alt={item.name} className='rounded-md w-full md:w-40 aspect-square object-cover border-1 border-[var(--color-bd)]' />
        <div className=' w-full flex flex-col gap-1'>
          <CustomStyle variant='h5' className='w-auto text-center md:text-left text-[var(--color-n)] line-clamp-1'>{item.name}</CustomStyle>
          <CustomStyle variant='l_l_m' className='w-auto text-center md:text-left text-[var(--color-n-m)]'>Price: <strong>${item.price.toFixed(2)}</strong> each</CustomStyle>
        </div>
      </div>
      <div className='w-full lg:w-1/4 h-fit flex gap-0 items-center justify-center'>
        <button type='button' className='p-2 flex items-center justify-center text-[var(--color-n-m)] rounded-md border-1 border-[var(--color-bg-d)] bg-[var(--color-bg-d)] hover:border-[var(--color-p)] hover:bg-[var(--color-p)] hover:text-[var(--color-bg-b)] transition-all duration-300 ease-in-out  cursor-pointer' onClick={handleSub}>
          <TbMinus size={24}/>
        </button>
        <CustomStyle variant='p_L_m' className='w-full text-center text-[var(--color-n-m)] flex items-center justify-center'>
          <span className='w-full h-full'>{item.quantity}</span>
        </CustomStyle>
        <button type='button' className='p-2 flex items-center justify-center text-[var(--color-bg-b)] rounded-md border-1 border-[var(--color-s)] bg-[var(--color-s)] hover:border-[var(--color-p)] hover:bg-[var(--color-p)] transition-all duration-300 ease-in-out  cursor-pointer'  onClick={handleAdd}>
          <TbPlus size={24}/>
        </button>
      </div>
      <div className='w-full lg:w-1/4 h-fit flex items-center justify-center'>
        <CustomStyle variant='l_l_m' asChild>
          <button type='button' onClick={() => { window.scrollTo(0, 0); handleRemoveItem(); }} className='w-full px-4 py-2 rounded-md text-[var(--color-n-m)] bg-[var(--color-bg-d)] hover:text-[var(--color-bg-b)] hover:bg-[var(--color-n)] flex items-center justify-center gap-2 transition-all duration-300 ease-linear cursor-pointer capitalize'>
                  <TbTrash className='w-4 h-4 lg:w-6 lg:h-6' />
                  <span>Remove</span>
                </button>
              </CustomStyle>
      </div>
    </div>
  );
};

export default CartItem;