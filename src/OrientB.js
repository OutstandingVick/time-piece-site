import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import CartSidebar from './CartSidebar';

const OrientB = () => {
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    `${process.env.PUBLIC_URL}/img/OrientB.jpeg`
  );
  const additionalImages = [
    `${process.env.PUBLIC_URL}/img/OrientB.jpeg`,
    `${process.env.PUBLIC_URL}/img/OrientB2.jpeg`,
    `${process.env.PUBLIC_URL}/img/OrientB3.jpeg`,
  ];

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: 'Orient Bambino V4',
      price: 350000,
      image: mainImage,
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

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <article className='py-8 px-4 lg:px-32 gap-4 flex flex-col lg:flex-row min-h-screen pt-20'>
      <div className='lg:flex-1 w-full'>
        <img
          src={mainImage}
          alt='Seiko Dolce 7731'
          className='w-full md:max-w-2xl md:mx-auto'
        />
        <div className='flex justify-center space-x-4 mt-4'>
          {additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Seiko Dolce - ${index + 1}`}
              className='w-20 md:w-24 lg:w-32 mt-6 mr-2 cursor-pointer'
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
      <div className='flex-1 m-4 p-4 lg:pb-96 font-libre text-indigo-600 w-full'>
        <h1 className='text-xl pb-4 lg:text-3xl'>₦350,000.00</h1>
        <h1 className='text-xl pb-4 lg:text-4xl'>Orient Bambino V4</h1>
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
          className={`bg-indigo-600 hover:bg-slate-500 text-slate-300 hover:text-indigo-600 w-96 h-10 mb-4 ${
            isAdding ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? 'Adding...' : 'ADD TO CART'}
        </button>
        {message && <p className='text-indigo-800'>{message}</p>}
        <br />
        <button className='bg-indigo-600 text-slate-300 w-96 h-10 mb-4 hover:bg-slate-500 hover:text-indigo-600'>
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

export default OrientB;
