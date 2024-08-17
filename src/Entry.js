import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Entry = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const watches = [
    {
      name: 'Casio LTP-VT02BL-3A',
      price: '₦160,000',
      imgSrc: 'img/Casio1.jpeg',
      link: '/casio1',
    },
    {
      name: 'Casio GM-2100',
      price: '₦160,000',
      imgSrc: 'img/CasioGshock.jpeg',
      link: '/casiog',
    },
    {
      name: 'Timex Waterbury',
      price: '₦130,000',
      imgSrc: 'img/Timex1.jpeg',
      link: '/timex1',
    },
    {
      name: 'Casio G-shock Virtual Rainbow',
      price: '₦350,000',
      imgSrc: 'img/CasioVirt.jpeg',
      link: '/casiovirtual',
    },
    {
      name: 'Timex Standard Chronograph',
      price: '₦350,000',
      imgSrc: 'img/TimexST.jpeg',
      link: '/timexst',
    },
    {
      name: 'Orient Bambino V4',
      price: '₦350,000',
      imgSrc: 'img/OrientB.jpeg',
      link: '/orientb',
    },
    {
      name: 'Casio Edifice EFR-S108D-2AV',
      price: '₦350,000',
      imgSrc: 'img/CasioED.jpeg',
      link: '/casioed',
    },
    {
      name: 'Pierre Paulin World Time',
      price: '₦350,000',
      imgSrc: 'img/Pierre.jpeg',
      link: '/pierre',
    },
  ];

  const filteredWatches = watches.filter((watch) =>
    watch.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='font-lora bg-slate-300 font-libre text-slate-950 overflow-hidden pt-20'>
      <div className='opacity-100 border border-slate-300 bg-slate-400 m-2 mx-8 px-5 lg:m-8 lg:mx-32 p-2 lg:px-20 h-28 lg:h-40 overflow-hidden flex flex-col justify-center'>
        <span className='text-xs lg:text-xl mb-2 lg:mb-4'>COLLECTION</span>
        <span className='font-bold text-lg lg:text-xl mb-2 lg:mb-4'>
          Entry-level Watches
        </span>
        <span className='text-sm lg:text-base'>
          <Link to='/mid' className='flex justify-end'>
            Next
          </Link>
        </span>
      </div>
      <br />
      <div className='flex justify-center items-center mb-4'>
        <input
          type='text'
          placeholder='Search watches...'
          value={searchQuery}
          onChange={handleSearch}
          className='p-2 border border-gray-300 lg:w-full lg:max-w-lg max-w-md'
        />
      </div>

      <div className='m-2 mx-4 lg:m-8 lg:mx-16 lg:my-20 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-4 lg:px-20 font-libre text-slate-950 text-xs lg:text-md'>
        {filteredWatches.map((watch) => (
          <div
            key={watch.id}
            className='card hover:shadow-lg w-40 sm:w-44 lg:w-72 opacity-100 bg-slate-300 shadow-md rounded-sm overflow-hidden'
          >
            <img
              className='w-full h-32 sm:h-44 lg:h-64 object-cover'
              src={`${process.env.PUBLIC_URL}/${watch.imgSrc}`}
              alt={watch.name}
            />
            <div className='m-1 lg:m-4 lg:p-2 text-xs lg:text-base'>
              <Link to={watch.link} className='font-bold'>
                {watch.name}
              </Link>
              <br />
              <span>{watch.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entry;
