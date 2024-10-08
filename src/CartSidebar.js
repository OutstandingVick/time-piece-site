import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { CartSidebarContext } from './CartSidebarContext';

// Utility function to format the currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0, // No decimals
  }).format(value);
};

const CartSidebar = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { isSidebarOpen, toggleSidebar } = useContext(CartSidebarContext);

  const calculateTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`overflow-hidden fixed top-0 right-0 h-full w-full sm:w-80 md:w-96 lg:w-1/3 bg-slate-300 text-indigo-600 shadow-xl transform ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className='p-6'>
        <button
          onClick={toggleSidebar}
          className='text-indigo-600 hover:text-red-500 text-xl mb-4'
        >
          Close &times;
        </button>
        <h2 className='text-2xl font-semibold mb-4'>Your Cart</h2>
        {cart.length === 0 ? (
          <p className='text-indigo-600'>Your cart is empty.</p>
        ) : (
          <ul className='divide-y divide-gray-200'>
            {cart.map((item) => (
              <li
                key={item.uniqueKey}
                className='py-4 flex justify-between items-center'
              >
                <div>
                  <p className='text-lg font-medium'>{item.name}</p>
                  <p className='text-sm text-indigo-00'>
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className='text-right'>
                  <p className='text-lg font-medium'>
                    {/* Use formatCurrency to format the price */}
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.uniqueKey)}
                    className='text-red-500 hover:text-red-700 mt-2'
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className='mt-6 pt-6 border-t border-gray-200'>
            <h3 className='text-xl font-semibold'>
              Total:{' '}
              <span className='text-violet-900'>
                {formatCurrency(calculateTotal)}
              </span>
            </h3>
            <button className='mt-4 w-full bg-indigo-300 text-indigo-600 py-2 rounded hover:bg-indigo-400'>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
