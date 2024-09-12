import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <article className='bg-slate-300 pt-20 overflow-hidden'>
      <div className='bg-slate-300'>
        {/* Home Banner */}
        <div className='relative card'>
          {/* Image */}
          <img
            className='w-full h-auto bg-no-repeat bg-center bg-cover'
            src={`${process.env.PUBLIC_URL}/img/home1.jpg`}
            alt='Home Image'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-40'></div>

          {/* Text */}
          <div className='absolute inset-0 flex flex-col items-start justify-start h-full p-4 sm:p-6 lg:pl-12 lg:pt-40 pt-14'>
            <p className='text-indigo-500 text-2xl sm:text-4xl lg:text-7xl font-bold font-bungee mb-2 md:mb-8'>
              LET YOUR WRIST SPEAK
            </p>
            <p className='text-indigo-500 text-2xl sm:text-4xl lg:text-7xl font-bold font-bungee'>
              BEFORE YOUR MOUTH DOES
            </p>
          </div>
        </div>

        <br />
        {/* Collection Section */}
        <div className='font-bold text-lg sm:text-2xl p-4 sm:px-8 lg:text-4xl flex justify-center'>
          <h2 className='font-shippori font-bold text-slate-950'>
            Our Diverse Collection
          </h2>
        </div>

        <div className='mx-4 sm:mx-8 lg:mx-16 my-4 grid grid-cols-2 lg:grid-cols-4 gap-6 font-libre text-slate-950'>
          {/* Collection Items */}
          <div className='card hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-64 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Casio1.jpeg`}
              alt='Entry-level Watches'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>
                <Link to='/entry' className='text-black-500 hover:underline'>
                  Entry-level Watches
                </Link>
              </span>
            </div>
          </div>

          {/* Collection 2 */}
          <div className='card hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-64 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Oris-7445.jpeg`}
              alt='Mid-range Watches'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>
                <Link to='/mid' className='text-black-500 hover:underline'>
                  Mid-range Watches
                </Link>
              </span>
            </div>
          </div>

          {/* Collection 3 */}
          <div className='card hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-64 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Vintage-Piaget.jpeg`}
              alt='Classic Vintage Watches'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>
                <Link to='/classic' className='text-black-500 hover:underline'>
                  Classic Vintage Watches
                </Link>
              </span>
            </div>
          </div>

          {/* Collection 4 */}
          <div className='card hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-64 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Vacheron1.jpeg`}
              alt='High-end Luxury Watches'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>
                <Link to='/high' className='text-black-500 hover:underline'>
                  High-end Luxury Watches
                </Link>
              </span>
            </div>
          </div>
        </div>

        <br />
        {/* Home Banner 2 */}
        <div className='relative card'>
          <img
            className='w-full h-auto bg-no-repeat bg-center bg-cover'
            src={`${process.env.PUBLIC_URL}/img/home3.jpg`}
            alt='Home Image'
          />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>

          <div className='absolute inset-0 flex flex-col items-start justify-start h-full p-4 sm:p-6 lg:pl-12 lg:pt-40'>
            <p className='text-indigo-400 text-2xl sm:text-4xl lg:text-7xl font-bold font-bungee lg:pt-44 pt-20 mb-2 md:mb-16'>
              A TIMEPIECE FOR
            </p>
            <p className='text-indigo-400 text-2xl sm:text-4xl lg:text-7xl font-bold font-bungee'>
              EVERY LIFESTYLE
            </p>
          </div>
        </div>

        <br />
        {/* Bestsellers Section */}
        <div className='font-bold text-lg sm:text-2xl p-4 sm:px-8 lg:text-4xl flex justify-center'>
          <h2 className='font-shippori font-bold text-slate-950'>
            Some of Our Bestsellers
          </h2>
        </div>

        <div className='mx-4 sm:mx-8 lg:mx-32 my-2 grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 font-libre text-slate-950'>
          {/* Bestseller Items */}
          <div className='hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-56 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Casio2.jpeg`}
              alt='Casio MTP Series'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>Casio MTP Series</span>
              <span className='block'>N160,000</span>
            </div>
          </div>

          {/* Bestseller 2 */}
          <div className='hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-56 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Seiko1.jpeg`}
              alt='Seiko 5 Arabic Dial'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>Seiko 5 Arabic Dial</span>
              <span className='block'>N150,000</span>
            </div>
          </div>

          {/* Bestseller 3 */}
          <div className='hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-56 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Casio3.jpeg`}
              alt='Casio MTP Series'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>Casio MTP Series</span>
              <span className='block'>N160,000</span>
            </div>
          </div>

          {/* Bestseller 4 */}
          <div className='hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-56 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Casiof.jpeg`}
              alt='Casio F-91W'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>Casio F-91W</span>
              <span className='block'>N60,000</span>
            </div>
          </div>
        </div>

        <br />
        {/* Recently Viewed Section */}
        <div className='font-bold text-lg sm:text-2xl p-4 sm:px-8 lg:text-5xl flex justify-center'>
          <h2 className='font-shippori text-slate-950 font-bold'>
            Recently Viewed
          </h2>
        </div>

        <div className='mx-4 sm:mx-8 lg:mx-32 my-2 grid grid-cols-2 lg:grid-cols-3 gap-6 p-4 font-libre text-slate-950'>
          {/* Recently Viewed Items */}
          <div className='hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Seiko-Dolce.jpeg`}
              alt='Seiko Dolce 9531-5040'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>Seiko Dolce 9531-5040</span>
              <span className='block'>N1,500,000</span>
            </div>
          </div>
          {/* piece 6 */}
          <div className='hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden '>
            <img
              className='w-full h-40 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/TimexST.jpeg`}
              alt='Card Image'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>Timex Standard Chronograph</span>
              <span className='block'>N280,500</span>
            </div>
          </div>
          {/* piece 7 */}
          <div className='hover:shadow-lg w-full opacity-100 bg-slate-300 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Frederique.jpeg`}
              alt='Card Image'
            />
            <div className='m-4 p-2'>
              <span className='font-bold'>
                Frederique Constant Classic Carree Heartbeat
              </span>
              <span className='block'>N3,500,000</span>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </article>
  );
}

export default Home;
