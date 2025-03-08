import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const MyNavbar = () => {
  const { getTotal } = useCart();
  const token = false; // Esto vendría de tu sistema de autenticación
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo y título */}
        <Navbar.Brand as={Link} to="/">
          🍕 Pizzería Mamma Mía
        </Navbar.Brand>

        {/* Botón para colapsar en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                <Nav.Link onClick={() => { /* logout logic */ }}>🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>

          {/* Botón de Total */}
          <Button
            onClick={() => navigate('/cart')}
            style={{
              backgroundColor: 'transparent',
              borderColor: '#ffc107',
              color: '#ffc107',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              borderRadius: '5px',
            }}
            className="ms-2 total-button"
          >
            🛒 Total: ${getTotal().toLocaleString()}
          </Button>
        </Navbar.Collapse>
      </Container>

      {/* Estilos adicionales */}
      <style>
        {`
          .total-button:hover {
            background-color: #ffc107;
            color: #000;
          }
          .total-button:focus {
            outline: none;
            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
          }
        `}
      </style>
    </Navbar>
  );
};

export default MyNavbar;