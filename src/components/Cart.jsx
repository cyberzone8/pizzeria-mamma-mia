import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();

  return (
    <Container className="py-5">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>
      
      {cart.length === 0 ? (
        <div className="text-center my-5">
          <h3>Tu carrito está vacío</h3>
          <p>¡Añade algunas deliciosas pizzas y vuelve aquí!</p>
          <Button 
            variant="warning" 
            as={Link} 
            to="/" 
            className="mt-3"
          >
            Volver al menú
          </Button>
        </div>
      ) : (
        <>
          {cart.map((pizza) => (
            <Card className="mb-3 shadow-sm" key={pizza.id}>
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={12} md={2}>
                    <img 
                      src={pizza.img} 
                      alt={pizza.name} 
                      className="img-fluid rounded"
                      style={{ maxHeight: '80px', objectFit: 'cover' }}
                    />
                  </Col>
                  <Col xs={12} md={3}>
                    <Card.Title>{pizza.name}</Card.Title>
                  </Col>
                  <Col xs={6} md={2} className="text-center">
                    <Card.Text>Precio: ${pizza.price.toLocaleString()}</Card.Text>
                  </Col>
                  <Col xs={6} md={2} className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => updateQuantity(pizza.id, pizza.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{pizza.quantity}</span>
                      <Button 
                        variant="outline-success" 
                        size="sm"
                        onClick={() => updateQuantity(pizza.id, pizza.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                  <Col xs={6} md={2} className="text-center">
                    <Card.Text>Subtotal: ${(pizza.price * pizza.quantity).toLocaleString()}</Card.Text>
                  </Col>
                  <Col xs={6} md={1} className="text-end">
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => removeFromCart(pizza.id)}
                    >
                      X
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
          
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3>Total: ${getTotal().toLocaleString()}</h3>
            <div>
              <Button variant="outline-secondary" className="me-2" as={Link} to="/">
                Seguir comprando
              </Button>
              <Button variant="warning" className="text-white">
                Proceder al pago
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;