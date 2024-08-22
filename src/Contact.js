import React from 'react';

const Contact = () => {
  return (
    <div className='min-h-screen bg-slate-300 text-indigo-600 font-libre flex flex-col items-center py-8 px-4 lg:px-24'>
      <div className='max-w-3xl w-full bg-slate-300 shadow-lg rounded-lg p-6 lg:p-12'>
        <h1 className='text-3xl lg:text-4xl font-bungee text-center mb-6'>
          CONTACT US
        </h1>
        <p className='mb-2 lg:text-xl text-lg text-indigo-600'>
          Add: 121401, Victoria Island, Lagos state.
        </p>
        <p className='mb-2 lg:text-xl text-lg text-indigo-600'>
          Tel: +2342099944455
        </p>
        <p className='mb-2 lg:text-xl text-lg text-indigo-600'>
          Email: support@uglee.com
        </p>
        <p className='mb-2 lg:text-xl text-lg text-indigo-600'>
          Facebook: @theugleeone
        </p>
        <p className='mb-2 lg:text-xl text-lg text-indigo-600'>
          X (formerly X): @theugleeone
        </p>
        <p className='mb-2 lg:text-xl text-lg text-indigo-600'>
          Instagram: @theugleeone
        </p>
        <div className='text-center mt-8'>
          <a
            href='/entry'
            className='inline-block bg-indigo-600 text-slate-300 rounded-full px-8 py-3 text-lg font-bold hover:bg-indigo-400 transition duration-300'
          >
            Explore Our Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
