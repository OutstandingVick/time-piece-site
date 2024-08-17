// CartSidebarContext.js
import React, { createContext, useState } from 'react';

export const CartSidebarContext = createContext();

export const CartSidebarContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <CartSidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </CartSidebarContext.Provider>
  );
};
