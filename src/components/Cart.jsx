import React, { useState } from 'react';
import { pizzas } from '../data/pizzas';
import { Card, Button } from 'react-bootstrap';

const Cart = () => {
  // Inicializamos con algunas pizzas para pruebas
  const initialCart = [
    { ...pizzas[0], quantity: 1 },
    { ...pizzas[1], quantity: 1 }
  ];

  const [cart, setCart] = useState(initialCart);

  // Función para actualizar cantidades
  const updateQuantity = (id, change) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0);

    setCart(updatedCart);
  };

  // Calcular total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((pizza) => (
            <div key={pizza.id} className="d-flex align-items-center mb-3 border p-3 rounded">
              <img 
                src={pizza.img} 
                alt={pizza.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                className="me-4 rounded"
              />
              <div className="flex-grow-1">
                <h5>{pizza.name}</h5>
                <p className="mb-2">${pizza.price.toLocaleString()}</p>
                <div className="d-flex align-items-center">
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => updateQuantity(pizza.id, -1)}
                  >
                    -
                  </Button>
                  <span className="mx-3">{pizza.quantity}</span>
                  <Button 
                    variant="outline-success" 
                    size="sm"
                    onClick={() => updateQuantity(pizza.id, 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end mt-4">
            <h3 className="mb-3">Total: ${calculateTotal().toLocaleString()}</h3>
            <Button variant="dark" size="lg">
              Pagar
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;