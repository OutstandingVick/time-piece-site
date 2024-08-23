import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import CartSidebar from './CartSidebar';

const Rolex = () => {
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: 'Rolex Daytona 116506',
      price: 280000000,
      image: `${process.env.PUBLIC_URL}/img/VacheronO.jpeg`,
      quantity,
    };

    console.log(`Adding Product: ${JSON.stringify(product)}`);
    addToCart(product);
    setIsAdding(true);
    setMessage('Added to cart');

    setTimeout(() => {
      setIsAdding(false);
      setMessage('');
    }, 2000); // Display the message for 2 seconds
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <article className='py-8 pt-20 px-4 lg:px-32 gap-4 flex flex-col lg:flex-row min-h-screen overflow-hidden'>
      <div className='lg:flex-1 w-full'>
        <br />
        <img
          src={`${process.env.PUBLIC_URL}/img/Rolex.jpeg`}
          alt='Casio LTP VTO'
          className='w-full md:max-w-2xl md:mx-auto'
        />
      </div>
      <div className='flex-1 m-4 p-4 lg:pb-96 font-libre text-indigo-600 w-full'>
        <h1 className='text-2xl pb-2 lg:text-3xl'>₦280,000,000.00</h1>
        <h1 className='text-2xl pb-2 lg:text-4xl'>Rolex Daytona 116506</h1>
        <div className='flex items-center mb-4'>
          <button
            className='bg-gray-200 text-gray-700 px-3 py-1'
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className='mx-2'>{quantity}</span>
          <button
            className='bg-gray-200 text-gray-700 px-3 py-1'
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
        <button
          className={`bg-indigo-600 hover:bg-slate-500 text-slate-300 hover:text-indigo-600 w-80 md:w-96 h-10 mb-4 ${
            isAdding ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? 'Adding...' : 'ADD TO CART'}
        </button>
        {message && <p className='text-indigo-800'>{message}</p>}
        <br />
        <button className='bg-indigo-600 text-slate-300 w-80 md:w-96 h-10 mb-4 hover:bg-slate-500 hover:text-indigo-600'>
          BUY NOW
        </button>
        <div className='w-full font-space'>
          <p>Lorem ipsum dolor sit amet consectetur adipisi</p>
          <p>delectus, voluptas vero, corporis quasi maiores</p>
          <p>veniam sapiente placeat quidem at sed</p>
          <br />
          <p>doloribus voluptatem, harum tenetur maxime</p>
          <p>corrupti quasi ullam libero porro veritatis</p>
          <p>praesentium. Asperiores enim recusandae sit.</p>
          <p className='pt-4 font-bold'>SPECS</p>
          <ul className='list-disc list-inside'>
            <li>Case size (L x W x H) 36 x 30 x 7.9 mm.</li>
            <li>Weight 25g</li>
            <li>Leather Band</li>
            <li>Water Resistant</li>
            <li> Approx. battery life: 3 years on SR626SW.</li>
          </ul>
        </div>
      </div>
      <CartSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </article>
  );
};

export default Rolex;
