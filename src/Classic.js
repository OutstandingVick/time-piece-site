import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Classic = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const watches = [
    {
      name: 'Vintage Piaget Lapis Lazuli',
      price: '₦90,000,000.00',
      imgSrc: 'img/vintage-piaget.jpeg',
      link: '/vintagepiaget',
    },
    {
      name: 'Seiko Dolce',
      price: '₦1,500,000.00',
      imgSrc: 'img/seiko-dolce.jpeg',
      link: '/seikodolce',
    },
    {
      name: 'Seiko Chariot Checker',
      price: '₦850,000.00',
      imgSrc: 'img/seiko-chariot.jpeg',
      link: '/seikochariot',
    },
    {
      name: 'Oris Worldtimer',
      // price: '₦1,500,000.00',
      imgSrc: 'img/oris-world.jpeg',
      link: '/orisworld',
    },
    {
      name: 'Vintage Seiko Ladies',
      price: '₦850,000.00',
      imgSrc: 'img/vintage-ladies.jpeg',
      link: '/seikolady',
    },
    {
      name: 'Seiko Dolce 7731',
      price: '₦850,000.00',
      imgSrc: 'img/seiko7731.jpeg',
      link: '/seiko7731',
    },
    {
      name: 'Vintage Oris Small Seconds',
      price: '₦850,000.00',
      imgSrc: 'img/oris-small.jpeg',
      link: '/orissmall',
    },
    {
      name: 'Vintage Oris Pointer',
      price: '₦900,000.00',
      imgSrc: 'img/oris-pointer.jpeg',
      link: '/orispointer',
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
          Classic Vintage Watches
        </span>
        <span className='text-sm lg:text-base flex justify-between'>
          <Link to='/mid'>Prev</Link>
          <Link to='/high'>Next</Link>
        </span>
      </div>

      <br />
      <div className='flex justify-center items-center mb-4'>
        <input
          type='text'
          placeholder='Search watches...'
          value={searchQuery}
          onChange={handleSearch}
          className='p-2 border border-gray-300 lg:w-full w-1/2 lg:max-w-lg max-w-md'
        />
      </div>

      <div className='m-2 mx-4 lg:m-8 lg:mx-16 lg:my-20 grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-4 p-4 lg:px-20 font-libre text-slate-950 text-xs lg:text-md'>
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

export default Classic;
