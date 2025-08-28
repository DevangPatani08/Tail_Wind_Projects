import logo from '../assets/logo.png';
import { CustomStyle } from '../services/CustomStyle';
import { TbMenu3, TbShoppingCartFilled, TbX } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalUniqueItems = useSelector(s => s.cart.totalUniqueItems).toString().padStart(2, '0');
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className='w-full text-center px-7 md:px-10 py-4 bg-transparent flex items-center justify-center box-border fixed top-0 inset-x-0 z-[999]'>
      <nav aria-label='Global' className='w-full max-w-[90rem] flex items-center justify-between p-2 shadow-lg rounded-lg bg-[var(--color-bg-b)]'>
        <div className='flex lg:flex-1 md:ml-2'>
          <Link to="/" onClick={() => { window.scrollTo(0, 0); }}>
            <span className='sr-only'>Fast Food</span>
            <img src={logo} alt="Fast Food" className='h-8 w-auto'/>
          </Link>
        </div>

        <div className='flex lg:hidden'>
          <button type='button' command='show-modal' commandfor='mobile-menu' className='inline-flex items-center justify-center rounded-md p-2 text-[var(--color-bg-b)] bg-[var(--color-s)]'>
            <span className='sr-only'>Open main menu</span>
            <TbMenu3 size={32} />
          </button>
        </div>

        <div className='hidden lg:flex lg:gap-x-8 items-center justify-center w-fit'>
          <CustomStyle variant={isActiveLink('/menu') ? 'p_b' : 'p_m'}> <Link to="/menu" onClick={() => { window.scrollTo(0, 0); }} className={`text-center transition-colors duration-300 ${isActiveLink('/menu') ? 'text-[var(--color-s)] hover:text-[var(--color-p)]' : 'text-[var(--color-m)] hover:text-[var(--color-p)]'}`}>Menu</Link> </CustomStyle>
          <CustomStyle variant={isActiveLink('/recipes') ? 'p_b' : 'p_m'}> <Link to="/recipes" onClick={() => { window.scrollTo(0, 0); }} className={`text-center transition-colors duration-300 ${isActiveLink('/recipes') ? 'text-[var(--color-s)] hover:text-[var(--color-p)]' : 'text-[var(--color-m)] hover:text-[var(--color-p)]'}`}>Recipes</Link> </CustomStyle>
          <CustomStyle variant={isActiveLink('/contact') ? 'p_b' : 'p_m'}> <Link to="/contact" onClick={() => { window.scrollTo(0, 0); }} className={`text-center transition-colors duration-300 ${isActiveLink('/contact') ? 'text-[var(--color-s)] hover:text-[var(--color-p)]' : 'text-[var(--color-m)] hover:text-[var(--color-p)]'}`}>Get in touch</Link> </CustomStyle>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <CustomStyle variant='p_m' asChild>
            <Link to="/cart" onClick={() => { window.scrollTo(0, 0); }} className={`px-4 py-2 flex gap-2 items-center rounded transition-all duration-300 ease-in-out ${isActiveLink('/cart') ? 'bg-[var(--color-s)] hover:bg-[var(--color-p)]' : 'bg-[var(--color-p)] hover:bg-[var(--color-s)]'}`}>
              <span className='sr-only'>Cart</span>
              <TbShoppingCartFilled size={20}/>
              <span>Cart</span>
              <span className='px-2.5 py-0.5 text-sm rounded-full bg-[var(--color-n)] text-[var(--color-bg-b)]'>{totalUniqueItems}</span>
            </Link>
          </CustomStyle>
        </div>
      </nav>
      <el-dialog>
        <dialog id='mobile-menu' className='backdrop:bg-transparent'>
          <div tabIndex='0' className='fixed inset-0 focus:outline-none'>
            <el-dialog-panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[var(--color-bg-b)] p-6 sm:max-w-sm sm:ring-1 sm:ring-[var(--color-n-m)]/10'>
              <div className='flex items-center justify-between'>
                <Link to="/" className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Fast Food</span>
                  <img src={logo} alt="Fast Food" className='h-8 w-auto'/>
                </Link>
                <button type='button' command='close' commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-[var(--color-n-m)]">
                  <TbX size={32} />
                </button>
              </div>
              <div className="mt-12 flow-root">
                <div className="-my-6 divide-y divide-[var(--color-bd)]">
                  <div className="space-y-6 py-6">
                    <CustomStyle variant={`${isActiveLink('/menu') ? 'p_L_b' : 'p_L_r'}`}> <a href="/menu" onClick={() => { window.scrollTo(0, 0); }} className={`block w-full text-left ${isActiveLink('/menu') ? 'text-[var(--color-s)]' : 'text-var(--color-n)'}`}>Menu</a> </CustomStyle>
                    <CustomStyle variant={`${isActiveLink('/recipes') ? 'p_L_b' : 'p_L_r'}`}> <a href="/recipes" onClick={() => { window.scrollTo(0, 0); }} className={`block w-full text-left ${isActiveLink('/recipes') ? 'text-[var(--color-s)]' : 'text-var(--color-n)'}`}>Recipes</a> </CustomStyle>
                    <CustomStyle variant={`${isActiveLink('/contact') ? 'p_L_b' : 'p_L_r'}`}> <a href="/contact" onClick={() => { window.scrollTo(0, 0); }} className={`block w-full text-left ${isActiveLink('/contact') ? 'text-[var(--color-s)]' : 'text-var(--color-n)'}`}>Get in touch</a> </CustomStyle>
                  </div>
                </div>
              </div>
              <div className='mt-12 flex flex-1 justify-end'>
                <CustomStyle variant='p_L_m' asChild>
                  <Link to="/cart" onClick={() => { window.scrollTo(0, 0); }} className={`px-4 py-2 flex gap-2 items-center rounded w-full justify-center ${isActiveLink('/cart') ? 'bg-[var(--color-s)]' : 'bg-[var(--color-p)]'}`}>
                    <span className='sr-only'>Cart</span>
                    <TbShoppingCartFilled size={24}/>
                    <span>Cart</span>
                    <span className='px-2.5 py-0.5 text-sm rounded-full bg-[var(--color-n)] text-[var(--color-bg-b)]'>{totalUniqueItems}</span>
                  </Link>
                </CustomStyle>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </header>
  )
}

export default Header