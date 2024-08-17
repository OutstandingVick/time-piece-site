import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-slate-400 text-emerald-900 font-libre py-8 px-4 lg:px-6'>
      <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
        <article className='pr-8 lg:px-6'>
          <h2 className='lg:text-lg text-sm font-bold mb-4'>CONTACT US</h2>
          <p className='mb-2 text-sm text-emerald-900'>
            Add: 121401, Victoria Island, Lagos state.
          </p>
          <p className='mb-2 lg:text-sm text-xs text-emerald-900'>
            Tel: +2342099944455
          </p>
          <p className='mb-2 lg:text-sm text-xs text-emerald-900'>
            Email: support@uglee.com
          </p>
          <br />
          <form>
            <div className=''>
              <label
                htmlFor='newsletter'
                className='mb-2 md:mb-0 md:mr-2 lg:text-lg text-sm'
              >
                Our Newsletter
              </label>
              <br />
              <p className='lg:text-sm text-xs'>
                Subscribe to get special offers, discounts and
                once-in-a-lifetime deals,
              </p>
              <br />
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Your Email'
                className='mb-2 lg:w-72 w-44 md:mb-0 md:mr-2 p-2 rounded'
              />
              <br />
              <br />
              <button
                type='submit'
                className='bg-emerald-900 hover:bg-slate-300 hover:text-emerald-900 text-slate-300 font-bold py-2 px-4 lg:w-72 w-44 rounded'
              >
                Subscribe
              </button>
            </div>
          </form>
        </article>
        <div>
          <h2 className='font-bold mb-4 lg:text-base text-sm'>SHOP</h2>
          <div className='flex flex-col lg:text-sm text-xs text-emerald-900'>
            <a href='/entry' className='mb-6 hover:underline'>
              Entry-level
            </a>
            <a href='/mid' className='mb-6 hover:underline'>
              Mid-range
            </a>
            <a href='/classic' className='mb-6 hover:underline'>
              Classic Vintage
            </a>
            <a href='/high' className='mb-6 hover:underline'>
              High-end Luxury
            </a>
            <a href='#' className='mb-6 hover:underline'>
              New Arrivals
            </a>
            <a href='#' className='mb-6 hover:underline'>
              Discounted Pieces
            </a>
          </div>
        </div>
        <div>
          <h2 className='lg:text-base text-sm font-bold mb-4'>KNOWLEDGE</h2>
          <div className='flex flex-col lg:text-sm text-xs'>
            <a href='#' className='mb-6 hover:underline'>
              Core Values and Vision
            </a>
            <a href='#' className='mb-6 hover:underline'>
              Blog
            </a>
            <a href='#' className='mb-6 hover:underline'>
              News
            </a>
            <a href='#' className='mb-6 hover:underline'>
              Guides
            </a>
            <a href='#' className='mb-6 hover:underline'>
              The Uglee Journal
            </a>
            <a href='#' className='mb-6 hover:underline'>
              Community
            </a>
          </div>
        </div>
        <div>
          <h2 className='lg:text-lg text-sm font-bold mb-4'>COMPANY</h2>
          <div className='flex flex-col lg:text-sm text-xs'>
            <a href='#' className='mb-6 hover:underline'>
              About
            </a>
            <a href='#' className='mb-6 hover:underline'>
              Design
            </a>
            <a href='#' className='mb-6 hover:underline'>
              Shipping Policy
            </a>
            <a href='#' className='mb-6 hover:underline'>
              Terms Of Service
            </a>
            <a href='#' className='mb-6 hover:underline'>
              Refund Policy
            </a>
            <a href='#' className='mb-6 hover:underline'>
              Contact Us
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <div className='flex space-x-4 mb-4'>
            <a href='https://www.facebook.com' aria-label='Facebook'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path d='M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z'></path>
              </svg>
            </a>
            <a href='https://www.twitter.com' aria-label='Twitter'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path d='M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z'></path>
              </svg>
            </a>
            <a href='https://www.instagram.com' aria-label='Instagram'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path d='M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9935 16.0297 19.9422C16.8135 19.9053 17.3399 19.7997 17.8271 19.6106C18.2617 19.4418 18.5745 19.2404 18.9065 18.9084C19.2423 18.5723 19.4437 18.2591 19.6097 17.829C19.8008 17.3347 19.9064 16.8095 19.9424 16.0289C19.9941 14.9248 20.0001 14.5389 20.0001 12C20.0001 9.52553 19.9936 9.12221 19.9424 7.97127C19.9056 7.1875 19.8 6.6611 19.6109 6.17388C19.4421 5.73932 19.2407 5.42555 18.9087 5.09359C18.5726 4.75742 18.2594 4.55601 17.8294 4.39003C17.3351 4.19922 16.8098 4.09359 16.0291 4.05778C14.9251 4.00603 14.5393 4 12.001 4ZM12.001 2C14.503 2 14.9283 2.0069 16.1051 2.05742C16.9714 2.09791 17.6266 2.23093 18.2047 2.46146C18.8262 2.71218 19.3526 3.05691 19.891 3.59544C20.4291 4.13354 20.7738 4.65994 21.0245 5.28144C21.2549 5.85958 21.3879 6.5148 21.4284 7.38115C21.4791 8.55806 21.486 8.98276 21.486 11.4998V12.5013C21.486 15.0175 21.4791 15.4422 21.4284 16.6191C21.3879 17.4853 21.2549 18.1405 21.0245 18.7187C20.7738 19.3402 20.4291 19.8666 19.891 20.4047C19.3526 20.9432 18.8262 21.2879 18.2047 21.5386C17.6266 21.7691 16.9714 21.9021 16.1051 21.9426C14.9282 21.9933 14.503 22 12.001 22C9.49899 22 9.07378 21.9933 7.89689 21.9426C7.03054 21.9021 6.37533 21.7691 5.79719 21.5386C5.1757 21.2879 4.64929 20.9432 4.1112 20.4047C3.57309 19.8666 3.22835 19.3402 2.97763 18.7187C2.7471 18.1405 2.61408 17.4853 2.5736 16.6191C2.52285 15.4422 2.51596 15.0175 2.51596 12.5013V11.4998C2.51596 8.98276 2.52285 8.55806 2.5736 7.38115C2.61408 6.5148 2.7471 5.85958 2.97763 5.28144C3.22835 4.65994 3.57309 4.13354 4.1112 3.59544C4.64929 3.05691 5.1757 2.71218 5.79719 2.46146C6.37533 2.23093 7.03054 2.09791 7.89689 2.05742C9.07378 2.0069 9.49899 2 12.001 2Z'></path>
              </svg>
            </a>
            <a href='https://www.youtube.com' aria-label='YouTube'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path d='M21.995 6.1466C21.9247 5.5776 21.7357 5.03464 21.431 4.54445C21.1263 4.05426 20.7137 3.62877 20.228 3.30094C19.6853 2.9028 18.939 2.685 18.186 2.6322C16.566 2.5242 14.933 2.5 13.3 2.5C11.667 2.5 10.034 2.5242 8.414 2.6322C7.661 2.685 6.9147 2.9028 6.372 3.30094C5.8863 3.62877 5.4737 4.05426 5.169 4.54445C4.8643 5.03464 4.6753 5.5776 4.605 6.1466C4.4526 7.8095 4.454 9.4725 4.454 11.1365V12.8635C4.454 14.5275 4.4526 16.1905 4.605 17.8534C4.6753 18.4224 4.8643 18.9654 5.169 19.4556C5.4737 19.9457 5.8863 20.3712 6.372 20.6991C6.9147 21.0972 7.661 21.315 8.414 21.3678C10.034 21.4758 11.667 21.5 13.3 21.5C14.933 21.5 16.566 21.4758 18.186 21.3678C18.939 21.315 19.6853 21.0972 20.228 20.6991C20.7137 20.3712 21.1263 19.9457 21.431 19.4556C21.7357 18.9654 21.9247 18.4224 21.995 17.8534C22.1473 16.1905 22.146 14.5275 22.146 12.8635V11.1365C22.146 9.4725 22.1473 7.8095 21.995 6.1466ZM9.783 15.4455V8.55448L15.727 12L9.783 15.4455Z'></path>
              </svg>
            </a>
            <a href='https://www.linkedin.com' aria-label='LinkedIn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path d='M2.6 0C1.11972 0 0 1.11972 0 2.6V21.4C0 22.8803 1.11972 24 2.6 24H21.4C22.8803 24 24 22.8803 24 21.4V2.6C24 1.11972 22.8803 0 21.4 0H2.6ZM7.12329 20.25H3.64241V8.96523H7.12329V20.25ZM5.38585 7.58906H5.36593C4.27584 7.58906 3.5 6.7543 3.5 5.79574C3.5 4.81896 4.29603 4 5.40501 4C6.51442 4 7.27084 4.81896 7.29076 5.79574C7.29076 6.7543 6.51491 7.58906 5.38585 7.58906ZM20.5 20.25H17.0196V14.55C17.0196 13.2578 16.718 12.2921 15.528 12.2921C14.6988 12.2921 14.1426 12.8122 13.9171 13.3532C13.8317 13.5538 13.8118 13.8447 13.8118 14.1362V20.25H10.3315V11.3176H13.7213V12.4587C13.7228 12.462 13.722 12.4649 13.7228 12.4683H13.7213V11.3176H13.7228C14.1494 10.6756 14.9187 9.85006 16.5247 9.85006C18.7882 9.85006 20.5 11.4075 20.5 14.2827V20.25Z'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className='my-8 border-slate-600' />
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='text-center md:text-left'>
          <p>&copy; {new Date().getFullYear()} Uglee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
