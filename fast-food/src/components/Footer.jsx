import React from 'react';
import { CustomStyle } from '../services/CustomStyle';
import logo from '../assets/logo.png';
import { TbBrandFacebook, TbBrandInstagram, TbBrandX, TbBrandLinkedin, TbBrandWhatsapp, TbMapPin, TbMail } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full px-6 md:px-10 flex flex-col items-center justify-start gap-6 bg-[var(--color-bg-b)] mt-10'>
      <div className='w-full max-w-[90rem] mt-8 lg:mt-20 flex flex-col md:flex-row items-start justify-center gap-6'>
        <div className='w-full flex flex-col items-start justify-start gap-6'>
          <Link to="/">
            <span className='sr-only'>Fast Food</span>
            <img src={logo} alt="Fast Food" className='h-12 w-auto' />
          </Link>
          <div className='w-full flex items-center justify-start gap-4'>
            <Link to="/" target="_blank" className='p-2 rounded-full text-[var(--color-p)] hover:bg-[var(--color-p)] hover:text-[var(--color-bg-b)] transition-colors duration-300'><TbBrandFacebook size={24} /></Link>
            <Link to="/" target="_blank" className='p-2 rounded-full text-[var(--color-p)] hover:bg-[var(--color-p)] hover:text-[var(--color-bg-b)] transition-colors duration-300'><TbBrandInstagram size={24} /></Link>
            <Link to="/" target="_blank" className='p-2 rounded-full text-[var(--color-p)] hover:bg-[var(--color-p)] hover:text-[var(--color-bg-b)] transition-colors duration-300'><TbBrandX size={24} /></Link>
            <Link to="/" target="_blank" className='p-2 rounded-full text-[var(--color-p)] hover:bg-[var(--color-p)] hover:text-[var(--color-bg-b)] transition-colors duration-300'><TbBrandLinkedin size={24} /></Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start">
          <CustomStyle variant='h4' className='mb-4 md:mb-6'>Quick Links</CustomStyle>
          <ul className='w-full flex flex-col items-start justify-start gap-3'>
            <li>
              <CustomStyle variant='p_m'>
                <Link to="/about" className="text-[var(--color-n)] hover:text-[var(--color-p)] transition-colors duration-300">
                  About Us
                </Link>
              </CustomStyle>
            </li>
            <li>
              <CustomStyle variant='p_m'>
                <Link to="/menu" className="text-[var(--color-n)] hover:text-[var(--color-p)] transition-colors duration-300">
                  Our Menu
                </Link>
              </CustomStyle>
            </li>
            <li>
              <CustomStyle variant='p_m'>
                <Link to="/recipes" className="text-[var(--color-n)] hover:text-[var(--color-p)] transition-colors duration-300">
                  Our Recipes
                </Link>
              </CustomStyle>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <CustomStyle variant='h4' className='mb-4 md:mb-6'>Get In Touch</CustomStyle>
          <ul className='flex flex-col items-start justify-start gap-3'>
            <li>
              <CustomStyle variant='p_m' asChild>
                <Link to="https://maps.app.goo.gl/uFr5xWUuimysw9Ei8" className="text-[var(--color-n)] hover:text-[var(--color-p)] transition-colors duration-300 flex items-start justify-start gap-2" target='_blank'>
                  <TbMapPin size={24} />
                  <span className='w-4/5'>C-1408, Bachraj Landmark, Avenue L-3, Narangi Bypass Rd, Opposite Club House, Evershine Globle City, Dongarpada, Rustomjee Global City, Virar (W), Maharashtra 401303.</span>
                </Link>
              </CustomStyle>
            </li>
            <li>
              <CustomStyle variant='p_m' asChild>
                <Link to="https://wa.me/919757246416" className="text-[var(--color-n)] hover:text-[var(--color-p)] transition-colors duration-300 flex items-center justify-start gap-2" target='_blank'>
                  <TbBrandWhatsapp size={24}/>
                  <span>+91-97572-46416</span>
                </Link>
              </CustomStyle>
            </li>
            <li>
              <CustomStyle variant='p_m' asChild>
                <Link to={`https://mail.google.com/mail/?view=cm&fs=1&to=devang.patani0806@gmail.com&su=${encodeURIComponent('Want to talk about - Your subject here')}&body=${encodeURIComponent('Your message here...')}`} className="text-[var(--color-n)] hover:text-[var(--color-p)] transition-colors duration-300 flex items-center justify-start gap-2" target='_blank' rel="noopener noreferrer">
                  <TbMail size={24}/>
                  <span>info@fastfood.in</span>
                </Link>
              </CustomStyle>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full max-w-[90rem] flex flex-row items-center justify-center p-6 border-t border-[var(--color-bd)]'>
        <CustomStyle variant='p_m'>© all rights 2025 by Devang Mrugesh Patani.</CustomStyle>
      </div>

    </footer>
  )
}

export default Footer