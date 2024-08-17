import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // This will treat every addition as a separate item
    setCart((prevCart) => [...prevCart, { ...item, uniqueKey: Date.now() }]);
  };

  const removeFromCart = (uniqueKey) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.uniqueKey !== uniqueKey)
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, calculateTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
