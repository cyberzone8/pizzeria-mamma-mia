import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card className="h-100 shadow">
      <Card.Img 
        variant="top" 
        src={img} 
        alt={name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center fs-4 fw-bold">{name}</Card.Title>
        <Card.Text>
          <p className="fw-bold mb-2">Ingredientes:</p>
          <ul className="list-unstyled">
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <div className="mt-auto">
          <p className="text-center fs-5 fw-bold mb-3">
            Precio: ${price.toLocaleString()}
          </p>
          <div className="d-flex justify-content-between">
            <Button variant="outline-primary" size="sm">
              Ver Más 👀
            </Button>
            <Button variant="warning" size="sm" className="text-white">
              Añadir 🛒
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;