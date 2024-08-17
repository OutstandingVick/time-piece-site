import React, { useContext } from 'react';
import { CartSidebarContext } from './CartSidebarContext';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { toggleSidebar } = useContext(CartSidebarContext);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className='overflow-hidden'>
      <nav className='fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-slate-400 text-emerald-900 font-crimson-text font-bold z-50 shadow-md'>
        <a
          href='/'
          className='text-emerald-900 no-underline lg:text-2xl text-xl font-bungee lg:ml-16 ml-4'
        >
          THE UGLEE ONE
        </a>
        <div className='hidden md:flex space-x-8 font-libre'>
          <a href='/' className='text-emerald-900 no-underline'>
            Home
          </a>
          <a href='/entry' className='text-emerald-900 no-underline'>
            Shop
          </a>
          <a href='/about' className='text-emerald-900 no-underline'>
            About
          </a>
          <a href='/contact' className='text-emerald-900 no-underline'>
            Contact
          </a>
          <a href='/faqs' className='text-emerald-900 no-underline'>
            FAQs
          </a>
        </div>
        <button
          className='relative bg-none border-none cursor-pointer lg:mx-20 mr-4'
          onClick={toggleSidebar}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='lg:w-8 lg:h-8 w-6 h-6'
          >
            <path d='M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z'></path>
          </svg>
          {totalItems > 0 && (
            <span className='absolute top-[-8px] right-[-8px] bg-emerald-900 text-slate-400 rounded-full px-2 py-1 text-xs font-bold'>
              {totalItems}
            </span>
          )}
        </button>
      </nav>

      {/* Footer navigation, only visible on mobile */}
      <footer className='fixed bottom-4 w-full bg-slate-400 text-emerald-900 rounded-full font-libre font-bold md:hidden items-center'>
        <div className='mx-4 px-4'>
          {/* Added padding here */}
          <ul className='flex justify-around py-2'>
            <li className='flex flex-col items-center'>
              <a
                href='/'
                className='flex flex-col items-center text-emerald-900 no-underline'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 mb-1'
                >
                  <path d='M12 2L3.5 8.7v11.6h6v-6h5v6h6V8.7L12 2z'></path>
                </svg>
                Home
              </a>
            </li>
            <li className='flex flex-col items-center'>
              <a
                href='/entry'
                className='flex flex-col items-center text-emerald-900 no-underline'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 mb-1'
                >
                  <path d='M16 11v1H8v-1h8m-4-8C7.82 3 4 6.82 4 11s3.82 8 8 8 8-3.82 8-8-3.82-8-8-8m0 18c-5.52 0-10-4.48-10-10S6.48 1 12 1s10 4.48 10 10-4.48 10-10 10z'></path>
                </svg>
                Shop
              </a>
            </li>
            <li className='flex flex-col items-center'>
              <a
                href='/about'
                className='flex flex-col items-center text-emerald-900 no-underline'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 mb-1'
                >
                  <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-10c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 11c-4.41 0-8 3.59-8 8h2c0-3.31 2.69-6 6-6s6 2.69 6 6h2c0-4.41-3.59-8-8-8z'></path>
                </svg>
                About
              </a>
            </li>
            <li className='flex flex-col items-center'>
              <a
                href='/contact'
                className='flex flex-col items-center text-emerald-900 no-underline'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 mb-1'
                >
                  <path d='M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm10 10h-4v2h-2v-2H8v2H6v-2H4v-6h16v6z'></path>
                </svg>
                Contact
              </a>
            </li>
            <li className='flex flex-col items-center'>
              <a
                href='/faq'
                className='flex flex-col items-center text-emerald-900 no-underline'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 mb-1'
                >
                  <path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm1-13h-2v2h2zm0 4h-2v6h2z'></path>
                </svg>
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
