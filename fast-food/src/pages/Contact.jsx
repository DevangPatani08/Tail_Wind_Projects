import { useState } from 'react';
import { CustomStyle } from '../services/CustomStyle';
import { Link } from 'react-router-dom';
import { TbArrowNarrowLeft } from 'react-icons/tb';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    agreed: false
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <section className='w-full flex flex-col items-center justify-start box-border px-6 md:px-10'>
      <div className='w-full max-w-[90rem] pt-24 flex flex-col items-center justify-start box-border isolate'>
        <div className='w-full flex items-center justify-start box-border mb-4'>
          <CustomStyle variant='l_c_m' asChild>
            <Link to='/' onClick={() => { window.scrollTo(0, 0); }} className='w-fit px-8 lg:px-10 py-3 text-[var(--color-n-m)] hover:text-[var(--color-p)] flex items-center justify-center gap-2 transition-all duration-300 ease-linear cursor-pointer capitalize'>
              <TbArrowNarrowLeft className='w-5 h-5 lg:w-6 lg:h-6' />
              <span>Back to home</span>
            </Link>
          </CustomStyle>
        </div>
        <div aria-hidden='true' className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} className='relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[var(--color-s)] to-[var(--color-p)] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75'></div>
        </div>
        
        <div className='w-full h-fit bg-[var(--color-bg-b)] isolate px-6 py-24 sm:py-32 lg:px-8 rounded-2xl shadow-lg'>
          <div className="mx-auto max-w-2xl text-center">
            <CustomStyle variant='h2' className='text-[var(--color-n)]'>Get in <span className='text-[var(--color-s)]'>touch</span></CustomStyle>
            <CustomStyle variant='p_r' className='text-[var(--color-n-m)]'>Aute magna irure deserunt veniam aliqua magna enim voluptate.</CustomStyle>
          </div>
          <form onSubmit={handleSubmit} className='mx-auto mt-16 max-w-4xl sm:mt-20'>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <CustomStyle variant='p_m'>
                  <label htmlFor="first-name" className="block text-[var(--color-n)]">First Name</label>
                </CustomStyle>
                <div className="mt-2.5">
                  <CustomStyle variant='l_l_m'>
                    <input id="first-name" type="text" name="first-name" autoComplete="given-name" className="block w-full rounded-md bg-[var(--color-bg-b)] px-3.5 py-2 text-[var(--color-n)] outline-1 -outline-offset-1 outline-[var(--color-bd)] placeholder:text-[var(--color-n-m)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-s)]" />
                  </CustomStyle>
                </div>
              </div>
              <div>
                <CustomStyle variant='p_m'>
                  <label htmlFor="first-name" className="block text-[var(--color-n)]">Last Name</label>
                </CustomStyle>
                <div className="mt-2.5">
                  <CustomStyle variant='l_l_m'>
                    <input id="last-name" type="text" name="last-name" autoComplete="family-name" className="block w-full rounded-md bg-[var(--color-bg-b)] px-3.5 py-2 text-[var(--color-n)] outline-1 -outline-offset-1 outline-[var(--color-bd)] placeholder:text-[var(--color-n-m)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-s)]" />
                  </CustomStyle>
                </div>
              </div>

              <div className='sm:col-span-2'>
                <CustomStyle variant='p_m'>
                  <label htmlFor="company" className="block text-[var(--color-n)]">Company</label>
                </CustomStyle>
                <div className="mt-2.5">
                  <CustomStyle variant='l_l_m'>
                    <input id="company" type="text" name="company" autoComplete="organization" className="block w-full rounded-md bg-[var(--color-bg-b)] px-3.5 py-2 text-[var(--color-n)] outline-1 -outline-offset-1 outline-[var(--color-bd)] placeholder:text-[var(--color-n-m)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-s)]" />
                  </CustomStyle>
                </div>
              </div>

              <div className='sm:col-span-2'>
                <CustomStyle variant='p_m'>
                  <label htmlFor="email" className="block text-[var(--color-n)]">Email</label>
                </CustomStyle>
                <div className="mt-2.5">
                  <CustomStyle variant='l_l_m'>
                    <input id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-[var(--color-bg-b)] px-3.5 py-2 text-[var(--color-n)] outline-1 -outline-offset-1 outline-[var(--color-bd)] placeholder:text-[var(--color-n-m)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-s)]" />
                  </CustomStyle>
                </div>
              </div>

              <div className='sm:col-span-2'>
                <CustomStyle variant='p_m'>
                  <label htmlFor="phone-number" className="block text-[var(--color-n)]">Phone number</label>
                </CustomStyle>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-[var(--color-bg-b)] outline-1 -outline-offset-1 outline-[var(--color-bd)] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[var(--color-s)]">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                      <select id="country" name="country" autoComplete="country" aria-label="Country" className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-[var(--color-n-m)] placeholder:text-[var(--color-n-m)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-s)]">
                        <option>IN</option>
                        <option>CA</option>
                        <option>US</option>
                      </select>
                      <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[var(--color-n-m)] sm:size-4">
                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                      </svg>
                    </div>
                    <CustomStyle variant='l_l_m'>
                      <input id="phone-number" type="text" name="phone-number" placeholder="123-456-7890" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-[var(--color-n)] placeholder:text-[var(--color-n-m)] focus:outline-none" />
                    </CustomStyle>
                  </div>
                </div>
              </div>

              <div className='sm:col-span-2'>
                <CustomStyle variant='p_m'>
                  <label htmlFor="message" className="block text-[var(--color-n)]">Message</label>
                </CustomStyle>
                <div className="mt-2.5">
                  <CustomStyle variant='l_l_m'>
                    <textarea id="message" name="message" rows="4" className="block w-full rounded-md bg-[var(--color-bg-b)] px-3.5 py-2 text-[var(--color-n)] outline-1 -outline-offset-1 outline-[var(--color-bd)] placeholder:text-[var(--color-n-m)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-s)]"></textarea>
                  </CustomStyle>
                </div>
              </div>

              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-[var(--color-bg-d)] p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-[var(--color-s)] transition-colors duration-200 ease-in-out has-checked:bg-[var(--color-s)] has-focus-visible:outline-2">
                    <span className="size-4 rounded-full bg-[var(--color-bg-b)] shadow-xs ring-1 ring-[var(--color-n)]/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"></span>
                    <input id="agree-to-policies" type="checkbox" name="agree-to-policies" aria-label="Agree to policies" className="absolute inset-0 appearance-none focus:outline-hidden" />
                  </div>
                </div>
                <CustomStyle variant='l_c_m'>
                  <label htmlFor="agree-to-policies" className="text-[var(--color-n-m)]">By selecting this, you agree to our <a href="#" className="font-semibold whitespace-nowrap text-[var(--color-p)]">privacy policy</a>.</label>
                </CustomStyle>
              </div>
            </div>
            <div className="mt-10">
              <CustomStyle variant='l_l_m'>
                <Link to='/pro' onClick={() => { window.scrollTo(0,0); }} className="block w-full rounded-md bg-[var(--color-p)] px-3.5 py-2.5 text-center text-sm font-semibold text-[var(--color-bg-b)] shadow-xs hover:bg-[var(--color-n)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-p)]">Let's talk</Link>
              </CustomStyle>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;