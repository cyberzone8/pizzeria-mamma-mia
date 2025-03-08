// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  // Función para añadir al carrito
  const addToCart = (pizza, quantity = 1) => {
    setCart(prevCart => {
      // Verificar si la pizza ya está en el carrito
      const existingPizza = prevCart.find(item => item.id === pizza.id);
      
      if (existingPizza) {
        // Si ya existe, aumentar la cantidad
        return prevCart.map(item => 
          item.id === pizza.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Si no existe, añadirla al carrito
        return [...prevCart, { ...pizza, quantity }];
      }
    });
  };
  
  // Función para actualizar cantidad
  const updateQuantity = (id, quantity) => {
    setCart(prevCart => 
      prevCart
        .map(item => item.id === id ? { ...item, quantity } : item)
        .filter(item => item.quantity > 0)
    );
  };
  
  // Función para eliminar del carrito
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };
  
  // Función para calcular el total
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      updateQuantity, 
      removeFromCart, 
      getTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};
