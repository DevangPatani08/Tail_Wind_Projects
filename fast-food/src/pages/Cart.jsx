import React from 'react'
import { CustomStyle } from '../services/CustomStyle';
import { TbArrowNarrowLeft, TbArrowNarrowRight, TbClearAll, TbShoppingBag } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import emptyImage from '../assets/No orders.png';
import CartItem from '../components/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(s => s.cart.totalQuantity);
  const totalAmount = useSelector(s => s.cart.totalAmount);
  const cartItems = useSelector(s => s.cart.items);

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
    window.scrollTo(0, 0);
  };

  if (cartItems.length === 0) return (
    <section className='w-full h-[100vh] flex flex-col items-center justify-center box-border px-6 md:px-10'>
      <div className='w-full max-w-[90rem] h-fit py-24 flex flex-col items-center justify-center box-border'>
        <img src={emptyImage} alt="Cart Is Empty" className='w-full md:w-1/2 lg:w-1/3 mb-6' />
        <CustomStyle variant='h2' className='w-full text-center mb-4 text-[var(--color-n)] capitalize'>Your cart is empty</CustomStyle>
        <CustomStyle variant='l_l_m' asChild>
          <Link to='/menu' onClick={() => { window.scrollTo(0,0); }} className='w-fit px-6 py-2 rounded-md text-[var(--color-bg-b)] bg-[var(--color-p)] hover:bg-[var(--color-n)] flex items-center justify-center gap-2 transition-all duration-300 ease-linear cursor-pointer capitalize'>
            <TbArrowNarrowLeft className='w-4 h-4 lg:w-6 lg:h-6' />
            <span>Continue Shopping</span>
          </Link>
        </CustomStyle>
      </div>
    </section>
  );

  return (
    <section className='w-full h-full flex flex-col items-center justify-start box-border px-6 md:px-10'>
      <div className='w-full max-w-[90rem] h-full pt-24 flex flex-col items-center justify-start box-border'>
        <div className='w-full mb-8 h-fit flex items-center justify-between gap-4 md:gap-8'>
          <CustomStyle variant='h2' className='w-auto text-left text-[var(--color-n)]'>Your Cart</CustomStyle>
          <CustomStyle variant='l_c_m' asChild>
            <Link to='/cart' onClick={() => { handleClearCart(); }} className='w-fit px-4 py-2 rounded-md text-[var(--color-n-m)] bg-[var(--color-bg-d)] hover:text-[var(--color-bg-b)] hover:bg-[var(--color-s)] flex items-center justify-center gap-2 transition-all duration-300 ease-linear cursor-pointer capitalize'>
              <TbClearAll className='w-5 h-5 lg:w-6 lg:h-6' />
              <span>Clear Cart</span>
            </Link>
          </CustomStyle>
        </div>

        <div className='w-full h-fit lg:min-h-[78vh] lg:max-h-[78vh] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12'>
          <div className='col-span-1 lg:col-span-8 h-full overflow-x-hidden overflow-y-scroll scrollbar-hide'>
            <div className='w-full h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide p-2 flex flex-col items-start justify-start space-y-4'>
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          
          <div className='col-span-1 lg:col-span-4 bg-[var(--color-bg-b)] h-fit p-6 shadow-lg rounded-lg flex flex-col gap-0 items-start justify-start'>
            <CustomStyle variant='h5' className='w-full mb-6 text-left text-[var(--color-n)]'>Order Summary</CustomStyle>
            <div className='w-full mb-2 flex items-center justify-between'>
              <CustomStyle variant='p_r' className='w-fit text-left text-[var(--color-n)]'>Items ({totalQuantity}):</CustomStyle>
              <CustomStyle variant='l_l_b' className='w-fit text-left text-[var(--color-n)]'>${totalAmount.toFixed(2)}</CustomStyle>
            </div>
            <div className='w-full pb-6 mb-4 flex items-center justify-between border-b-1 border-[var(--color-bd)]'>
              <CustomStyle variant='p_r' className='w-fit text-left text-[var(--color-n)]'>Delivery Charge:</CustomStyle>
              <CustomStyle variant='l_l_m' className='w-fit text-left text-[var(--color-p)]'>FREE</CustomStyle>
            </div>
            
            <div className='w-full mb-6 flex items-center justify-between'>
              <CustomStyle variant='l_l_b' className='w-fit text-left text-[var(--color-n)]'>Total:</CustomStyle>
              <CustomStyle variant='p_L_b' className='w-fit text-left text-[var(--color-n)]'>${totalAmount.toFixed(2)}</CustomStyle>
            </div>
            <div className='w-full h-fit flex flex-col items-center justify-center gap-4'>
              <CustomStyle variant='l_l_m' asChild>
                <Link to='/checkout' onClick={() => { window.scrollTo(0,0); }} className='w-full px-4 py-2 rounded-md text-[var(--color-bg-b)] bg-[var(--color-p)] hover:bg-[var(--color-n)] flex items-center justify-center gap-2 transition-all duration-300 ease-linear cursor-pointer capitalize'>
                  <span>Proceed To Pay</span>
                  <TbArrowNarrowRight className='w-4 h-4 lg:w-6 lg:h-6' />
                </Link>
              </CustomStyle>
              <CustomStyle variant='l_l_m' asChild>
                <Link to='/menu' onClick={() => { window.scrollTo(0,0); }} className='w-full px-4 py-2 rounded-md text-[var(--color-n-m)] bg-[var(--color-bg-d)] hover:text-[var(--color-bg-b)] hover:bg-[var(--color-n)] flex items-center justify-center gap-2 transition-all duration-300 ease-linear cursor-pointer capitalize'>
                  <TbShoppingBag className='w-4 h-4 lg:w-6 lg:h-6' />
                  <span>Continue Shopping</span>
                </Link>
              </CustomStyle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;