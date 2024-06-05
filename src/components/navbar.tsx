import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <div className='drawer drawer-end'>
      <input id='drawer-navbar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <div className='navbar bg-base-100'>
          <div className='flex-1'>
            <Link to={'/'} className='btn btn-ghost text-xl px-2'>
              <img src={Logo} className='h-7 w-7' />
              Sahabit
            </Link>
          </div>
          {/* <div className='flex-none'>
            <label
              htmlFor='drawer-navbar'
              aria-label='open sidebar'
              className='btn btn-square btn-ghost'
            >
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
            </label>
          </div> */}
        </div>
      </div>
      {/* <div className='drawer-side'>
        <label
          htmlFor='drawer-navbar'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200'>
          <li>
            <a>Seed data</a>
          </li>
          <li>
            <a>Remove all data</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
