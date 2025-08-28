import React, { useState } from 'react'
import { CustomStyle } from '../services/CustomStyle';
import { Link } from 'react-router-dom';
import { TbArrowNarrowLeft, TbX } from 'react-icons/tb';
import { cartActions } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector(s => s.cart.items);
  const totalAmount = useSelector(s => s.cart.totalAmount).toFixed(2);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [cardDetails, setCardDetails] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [paypalEmail, setPaypalEmail] = useState('');
  const [bankDetails, setBankDetials] = useState({ accountNumber: '', accountName: '', bankName: '' });
  const [isValid, setIsValid] = useState(false);
  const [err, setErr] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErr(prev => ({ ...prev, [name]: '' }));

    if (name === 'number') {
      
      const digitOnly = value.replace(/\D/g, '');
      const formattedValue = digitOnly.replace(/(.{4})/g, '$1 ').trim();
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));

    } else if (name === 'expiry') {
      
      let formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
      }
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));

    } else if (name === 'cvv') {
      
      let formattedValue = value.replace(/\D/g, '').slice(0, 3);
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
      
    } else if (name === 'name') {

      setCardDetails(prev => ({ ...prev, [name]: value }));

    } else if (name === 'paypalEmail') {
      
      setPaypalEmail(value);

    } else {
      
      setBankDetials(prev => ({ ...prev, [name]: value }));

    };
  };

  const renderPaymentInputs = (err) => {
    switch (paymentMethod) {
      case 'credit-card': return (
        <div className='mt-3 p-3 border border-[var(--color-bd)] rounded-lg'>
          <CustomStyle variant='h6' className='mb-3'>Credit Card Details</CustomStyle>
          <div className="mb-3">
            <CustomStyle variant='l_l_m'>
              <label className='block text-[var(--color-n)] mb-1'>Card Number</label>
              <input type="text" name="number" value={cardDetails.number} maxLength={19} placeholder='1234 5678 9102 3456' onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-s)] ${err.number ? 'border-red-500' : 'border-[var(--color-bd)]'}`} required />
            </CustomStyle>
            {err.number && <CustomStyle variant='small_m' className='mt-1 text-red-500'>{err.number}</CustomStyle>}
          </div>
          <div className="mb-3">
            <CustomStyle variant='l_l_m'>
              <label className='block text-[var(--color-n)] mb-1'>Card Holder Name</label>
              <input type="text" name="name" value={cardDetails.name} placeholder='Jhon Doe' onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-s)] ${err.name ? 'border-red-500' : 'border-[var(--color-bd)]'}`} required />
            </CustomStyle>
            {err.name && <CustomStyle variant='small_m' className='mt-1 text-red-500'>{err.name}</CustomStyle>}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="mb-3">
              <CustomStyle variant='l_l_m'>
                <label className='block text-[var(--color-n)] mb-1'>Expiry Date</label>
                <input type="text" name="expiry" value={cardDetails.expiry} placeholder='MM/YY' onChange={handleChange} maxLength='5' className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-s)] ${err.expiry ? 'border-red-500' : 'border-[var(--color-bd)]'}`} required />
              </CustomStyle>
              {err.expiry && <CustomStyle variant='small_m' className='mt-1 text-red-500'>{err.expiry}</CustomStyle>}
            </div>
            <div className="mb-3">
              <CustomStyle variant='l_l_m'>
                <label className='block text-[var(--color-n)] mb-1'>CVV</label>
                <input type="text" name="cvv" value={cardDetails.cvv} placeholder='123' onChange={handleChange} maxLength='3' className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-s)] ${err.cvv ? 'border-red-500' : 'border-[var(--color-bd)]'}`} required />
              </CustomStyle>
              {err.cvv && <CustomStyle variant='small_m' className='mt-1 text-red-500'>{err.cvv}</CustomStyle>}
            </div>
          </div>
        </div>
      );
      case 'paypal': return (
        <div className='mt-3 p-3 border border-[var(--color-bd)] rounded-lg'>
            <CustomStyle variant='h6' className='text-[var(--color-n)] mb-3'>PayPal Details</CustomStyle>
            <div className='mb-3'>
              <CustomStyle variant='l_l_m'>
                <label className='block text-[var(--color-n)] mb-1'>PayPal Email</label>
                <input type='email' placeholder='your@email.com' value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-s)] ${ err.paypalEmail ? 'border-red-500' : 'border-[var(--color-bd)]' }`} required />
              </CustomStyle>
              {err.paypalEmail && <CustomStyle variant='small_m' className='mt-1 text-red-500'>{err.cvv}</CustomStyle>}
            </div>
          </div>
      );
      case 'bank-transfer': return (
        <div className='mt-3 p-3 border border-[var(--color-bd)] rounded-lg'>
          <CustomStyle variant='h6' className='text-[var(--color-n)] mb-3'>Bank Transfer Details</CustomStyle>
            <div className='mb-3'>
              <CustomStyle variant='l_l_m'>
                <label className='block text-[var(--color-n)] mb-1'>Bank Name</label>
                  <select name='bankName' value={bankDetails.bankName} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-s)] ${ err.bankName ? 'border-red-500' : 'border-[var(--color-bd)]' }`} required >
                    <option value=''>Select a bank</option>
                    <option value='Chase Bank'>Chase Bank</option>
                    <option value='Bank of America'>Bank of America</option>
                    <option value='Wells Fargo'>Wells Fargo</option>
                    <option value='Citibank'>Citibank</option>
                    <option value='HSBC'>HSBC</option>
                    <option value='Other'>Other</option>
                  </select>
                </CustomStyle>
                {err.bankName && <CustomStyle variant='small_m' className='mt-1 text-red-500'>{err.bankName}</CustomStyle>}
              </div>
            <div className='mb-3'>
              <CustomStyle variant='l_l_m'>
                <label className='block text-[var(--color-n)] mb-1'>Account Number</label>
                <input type='text' placeholder='1234567890' name='accountNumber' value={bankDetails.accountNumber} maxLength="10" onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-s)] ${ err.accountNumber ? 'border-red-500' : 'border-[var(--color-bd)]' }`} required />
              </CustomStyle>
              {err.accountNumber && <CustomStyle variant='small_m' className='mt-1 text-red-500'>{err.accountNumber}</CustomStyle>}
            </div>
          <div className='mb-3'>
            <CustomStyle variant='l_l_m'>
              <label className='block text-{var(--color-n)} mb-1'>Account Holder Name</label>
              <input type='text' placeholder='John Doe' name='accountName' value={bankDetails.accountName} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-s)] ${ err.accountName ? 'border-red-500' : 'border-[var(--color-bd)]' }`} required />
            </CustomStyle>
            {err.accountName && <CustomStyle variant='small_m' className='mt-1 text-red-500'>{err.accountName}</CustomStyle>}
          </div>
        </div>
      );
      case 'cash-on-delivery': return (
        <div className='mt-3 p-3 border border-[var(--color-bd)] rounded-lg'>
          <CustomStyle variant='h6' className='mb-3 text-[var(--color-n)]'>Cash on Delivery</CustomStyle>
          <CustomStyle variant='l_l_m' className='text-[var(--color-n-m)]'>Pay with cash when your order is delivered.</CustomStyle>
        </div>
      );
      default:
        return null;
    }
  };

  const isExpiryValid = (expiry) => {
    const [m, y] = expiry.split('/');
    if (!m || !y || m.length !== 2 || y.length !== 2) return (false);

    const cY = parseInt(new Date().getFullYear().toString().slice(2), 10);
    const cM = parseInt(new Date().getMonth().toString() + 1, 10);
    const mInt = parseInt(m, 10);
    const yInt = parseInt(y, 10);

    if (mInt < 1 || mInt > 12) return (false);
    if (yInt < cY) return (false);
    if (yInt === cY && mInt < cM) return (false);

    return (true);
  };

  const validateForm = () => {
    const newErr = {};
    let formIsValid = true;

    switch (paymentMethod) {
      case 'credit-card':
        if (cardDetails.number.replace(/\s/g, '').length !== 16) { newErr.number = 'Please enter a valid 16-digit card number.'; formIsValid = false; }
        if (cardDetails.name.trim().split(/\s+/).length < 2) { newErr.name = 'Please enter a first and last name.'; formIsValid = false; }
        if (!isExpiryValid(cardDetails.expiry)) { newErr.expiry = 'Please enter a valid expiry date (MM/YY) that is not in the past.'; formIsValid = false; }
        if (cardDetails.cvv.length !== 3) { newErr.cvv = 'CVV must be exactly 3 digits.'; formIsValid = false; }
        break;
      case 'paypal':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paypalEmail)) { newErr.paypalEmail = 'Please enter a valid email address.'; formIsValid = false; }
        break;
      case 'bank-transfer':
        if (!bankDetails.bankName.trim()) { newErr.bankName = 'Please select a bank from the list.'; formIsValid = false; }
        if (bankDetails.accountName.trim().split(/\s+/).length < 2) { newErr.accountName = 'Please enter a first and last name.'; formIsValid = false; }
        if (bankDetails.accountNumber.length !== 10) { newErr.accountNumber = 'Account number must be exactly 10 digits.'; formIsValid = false; }
        break;
      case 'cash-on-delivery':
        break;
      default:
        newErr.paymentMethod = 'Please select a payment method.';
        formIsValid = false;
    }

    setErr(newErr);
    return (formIsValid);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsValid(true);

    if (cartItems.length === 0) {
      alert('Your cart is empty! Please add items before checking out.');
      return;
    }

    if (validateForm()) {
      setShowSuccessModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleCompletePayment = () => {
    dispatch(cartActions.clearCart());
    setShowSuccessModal(false);
  };

  return (
    <section className='w-full flex flex-col items-center justify-start box-border px-6 md:px-10'>
      <div className="w-full max-w-[90rem] pt-24 flex flex-col items-center justify-start box-border">
        <div className='w-full flex items-center justify-start box-border mb-4'>
          <CustomStyle variant='l_c_m' asChild>
            <Link to='/cart' onClick={() => { window.scrollTo(0, 0); }} className='w-fit px-8 lg:px-10 py-3 text-[var(--color-n-m)] hover:text-[var(--color-p)] flex items-center justify-center gap-2 transition-all duration-300 ease-linear cursor-pointer capitalize'>
              <TbArrowNarrowLeft className='w-5 h-5 lg:w-6 lg:h-6' />
              <span>Back to Cart</span>
            </Link>
          </CustomStyle>
        </div>
        
        <div className='w-full flex flex-col items-center justify-start box-border mb-10'>
          <CustomStyle variant='h2' className='w-full text-[var(--color-n)] text-center'>Check<span className='text-[var(--color-s)]'>Out</span></CustomStyle>
        </div>

        <div className='w-full h-fit flex flex-col md:flex-row items-start justify-between gap-10'>
          <div className='w-full md:w-3/5 h-fit'>
            <div className='bg-[var(--color-bg-b)] rounded-lg shadow-md p-6 mb-6'>
              <CustomStyle variant='h4' className='w-full text-left text-[var(--color-n)]'>Final Summary</CustomStyle>
              <div className="divide-y divide-[var(--color-bd)] mt-8">
                {cartItems.map(item => (
                  <div key={item.id} className="py-3 flex justify-between items-center">
                    <div>
                      <CustomStyle variant='l_l_m' className='text-[var(--color-n)]'>{item.name}</CustomStyle>
                      <CustomStyle variant='p_r' className='text-[var(--color-n-m)] ml-2'>Quantity: {item.quantity}</CustomStyle>
                    </div>
                      <CustomStyle variant='l_l_b' className='text-[var(--color-n-m)] ml-2'>${item.totalPrice.toFixed(2)}</CustomStyle>
                  </div>
                ))}

                <div className="py-3 flex justify-between items-center mt-6">
                  <CustomStyle variant='h6' className='text-[var(--color-n)]'>Total:</CustomStyle>
                  <CustomStyle variant='h6' className='text-[var(--color-p)]'>${totalAmount}</CustomStyle>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-2/5 h-fit bg-[var(--color-bg-b)] rounded-lg shadow-md p-6'>
            <CustomStyle variant='h4' className='w-full text-left text-[var(--color-n)]'>Payment Methods</CustomStyle>
            <form onSubmit={handlePayment}>
              <div className='mb-4'>
                <CustomStyle variant='l_l_b'>
                  <label className='block text-[var(--color-n)] mb-2'>Select Payment Method</label>
                </CustomStyle>
                <div className='space-y-2'>
                  <CustomStyle variant='l_l_m' asChild>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <input type='radio' name='paymentMethod' value='credit-card' checked={paymentMethod === 'credit-card'} onChange={(e) => { setPaymentMethod(e.target.value); setErr({}); }} className='text-[var(--color-p)]' />
                      <span>Credit Card</span>
                    </label>
                  </CustomStyle>
                  <CustomStyle variant='l_l_m' asChild>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <input type='radio' name='paymentMethod' value='paypal' checked={paymentMethod === 'paypal'} onChange={(e) => { setPaymentMethod(e.target.value); setErr({}); }} className='text-[var(--color-p)]' />
                      <span>Paypal</span>
                    </label>
                  </CustomStyle>
                  <CustomStyle variant='l_l_m' asChild>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <input type='radio' name='paymentMethod' value='bank-transfer' checked={paymentMethod === 'bank-transfer'} onChange={(e) => { setPaymentMethod(e.target.value); setErr({}); }} className='text-[var(--color-p)]' />
                      <span>Bank Transfer</span>
                    </label>
                  </CustomStyle>
                  <CustomStyle variant='l_l_m' asChild>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <input type='radio' name='paymentMethod' value='cash-on-delivery' checked={paymentMethod === 'cash-on-delivery'} onChange={(e) => { setPaymentMethod(e.target.value); setErr({}); }} className='text-[var(--color-p)]' />
                      <span>Cash On Delivery</span>
                    </label>
                  </CustomStyle>
                </div>
              </div>
              {renderPaymentInputs(err)}
              <CustomStyle variant='l_l_m' className='text-center'>
                <button type="submit" className='w-full bg-[var(--color-p)] text-[var(--color-bg-b)] py-3 px-4 rounded-lg hover:bg-[var(--color-n)] transition-all duration-300 ease-in-out mt-4 cursor-pointer'>Complete Payment</button>
              </CustomStyle>
            </form>
          </div>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 bg-[var(--color-n)]/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--color-bg-b)] rounded-lg shadow-xl max-w-lg w-full">
            <div className="w-full h-fit p-6">
              <div className="flex justify-between items-center mb-4">
                <CustomStyle variant='h5'>Order Confirmed!</CustomStyle>
                <button onClick={() => {handleCloseModal(); window.scrollTo(0,0); }} className='text-[var(--color-n-m)] hover:text-[var(--color-n)]'>
                  <TbX size={24} /> 
                </button>
              </div>
              <div className="mb-4">
                <CustomStyle variant='p_r' className='mb-2 text-[var(--color-n)]'>Thank you for the purchase!</CustomStyle>
                <CustomStyle variant='p_r' className='text-[var(--color-n)]'>Your order number is <strong className='text-[var(--color-p)]'>#{Math.floor(Math.random() * 1000000)}</strong></CustomStyle>
              </div>
              <div className='border-t border-b border-[var(--color-bd)] py-4 mb-4'>
                {cartItems.map(i => (
                  <div key={i.id} className="flex justify-between items-center py-1">
                    <CustomStyle variant='p_r' className='text-[var(--color-n-m)]'>{i.name} x {i.quantity}</CustomStyle>
                    <CustomStyle variant='p_r' className='text-[var(--color-n-m)]'>${i.totalPrice.toFixed(2)}</CustomStyle>
                  </div>
                ))}
                <CustomStyle variant='p_L_m' className='text-[var(--color-n)]'>
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-[var(--color-bd)]">
                    <span>Total:</span>
                    <strong className='text-[var(--color-s)]'>${totalAmount}</strong>
                  </div>
                </CustomStyle>
              </div>
              <CustomStyle variant='p_m' className='text-[var(--color-n)] mb-6'>Payment Method: <strong className='text-[var(--color-n-m)]'>{paymentMethod.replace(/-/g, ' ')}</strong></CustomStyle>
              <div className='w-full h-fit flex justify-center'>
                <Link to='/' onClick={() => { handleCompletePayment(); window.scrollTo(0, 0); }} className='w-full bg-[var(--color-p)] text-[var(--color-bg-b)] px-6 py-2 rounded-lg hover:bg-[var(--color-n)] text-center transition-all duration-300 cursor-pointer ease-in-out'>
                  <CustomStyle  variant='l_l_m'>Done</CustomStyle>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;