import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card
      className="mb-4 shadow"
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid #ddd',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Imagen superior */}
      <Card.Img
        variant="top"
        src={img}
        alt={name}
        style={{ height: '200px', objectFit: 'cover' }}
      />

      {/* Contenido de la tarjeta */}
      <Card.Body className="text-center">
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
          {name}
        </Card.Title>
        <Card.Text className="text-muted mb-3" style={{ fontSize: '1rem' }}>
          <span style={{ fontWeight: 'bold', color: '#FF9800' }}>Ingredientes:</span> {ingredients.join(', ')}
        </Card.Text>
        <Card.Text
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px',
          }}
        >
          Precio: <span style={{ color: '#FF5722' }}>${price.toLocaleString()}</span>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="outline-secondary" size="sm" className="px-3">
            Ver Más 👀
          </Button>
          <Button
            variant="warning"
            size="sm"
            className="px-4 text-white"
            style={{ fontWeight: 'bold' }}
          >
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
