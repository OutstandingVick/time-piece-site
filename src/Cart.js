import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='space-y-4'>
          {cart.map((item, index) => (
            <div key={index} className='flex items-center space-x-4'>
              <img src={item.image} alt={item.name} className='w-24' />
              <div>
                <h2 className='text-xl'>{item.name}</h2>
                <p className='text-lg'>₦{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
