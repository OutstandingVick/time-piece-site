import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const High = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const watches = [
    {
      name: 'Vacheron Constantin Historiques 222',
      price: '₦120,000,000',
      imgSrc: 'img/Vacheron1.jpeg',
      link: '/vacheron',
    },
    {
      name: 'Audemars Piguet Royal Oak Concept',
      price: '₦245,650,000',
      imgSrc: 'img/AP.jpeg',
      link: '/ap',
    },
    {
      name: 'Richard Mille RM72-01',
      price: '₦637,500,000',
      imgSrc: 'img/RM.jpeg',
      link: '/rm',
    },
    {
      name: 'Patek Phillipe Nautilus Tiffany 5711/1A-018',
      price: '₦2,250,000,000',
      imgSrc: 'img/PatekT.jpeg',
      link: '/patekt',
    },
    {
      name: 'Patek Phillipe Grand Complication Celestial',
      price: '₦1,050,000,000',
      imgSrc: 'img/PatekG.jpeg',
      link: '/patekg',
    },
    {
      name: 'Vacheron Constantin Overseas Tourbillion',
      price: '₦181,200,000',
      imgSrc: 'img/VacheronO.jpeg',
      link: '/vache',
    },
    {
      name: 'Rolex Daytona 116506',
      price: '₦280,000,000',
      imgSrc: 'img/Rolex.jpeg',
      link: '/rolex',
    },
    {
      name: 'Rolex Daytona Baguette cut',
      price: '₦547,743,900',
      imgSrc: 'img/Rolex2.jpeg',
      link: '/rolex2',
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
          High-end Luxury Watches
        </span>
        <span className='text-sm lg:text-base'>
          <Link to='/classic'>Prev</Link>
        </span>
      </div>
      <div className='flex justify-center items-center mb-4'>
        <input
          type='text'
          placeholder='Search watches...'
          value={searchQuery}
          onChange={handleSearch}
          className='p-2 border border-gray-300 lg:w-full w-1/2 lg:max-w-lg max-w-md'
        />
      </div>

      <div className='m-2 mx-4 lg:m-8 lg:mx-16 lg:my-20 grid sm:grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-4 lg:px-20 font-libre text-slate-950 text-xs lg:text-md'>
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

export default High;
