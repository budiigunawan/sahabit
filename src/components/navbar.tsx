import React from 'react';
import Logo from '../assets/new-logo.png';

export const Navbar = () => {
  return (
    <div className='navbar bg-base-100 max-w-2xl mx-auto'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl px-2'>
          <img src={Logo} className='h-7 w-7' />
          Sahabit
        </a>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
