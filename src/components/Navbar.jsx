import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const MyNavbar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo y título */}
        <Navbar.Brand href="#">
          🍕 Pizzería Mamma Mía
        </Navbar.Brand>

        {/* Botón para colapsar en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="#">🔓 Profile</Nav.Link>
                <Nav.Link href="#">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#">🔐 Login</Nav.Link>
                <Nav.Link href="#">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>

          {/* Botón de Total */}
          <Button
            style={{
              backgroundColor: 'transparent', // Fondo transparente para integrarse
              borderColor: '#ffc107', // Borde amarillo
              color: '#ffc107', // Texto amarillo
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              borderRadius: '5px',
            }}
            className="ms-2 total-button"
          >
            🛒 Total: ${total.toLocaleString()}
          </Button>
        </Navbar.Collapse>
      </Container>

      {/* Estilos adicionales */}
      <style>
        {`
          .total-button:hover {
            background-color: #ffc107; /* Fondo amarillo en hover */
            color: #000; /* Texto negro en hover */
          }
          .total-button:focus {
            outline: none; /* Sin borde azul */
            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); /* Sombra amarilla */
          }
        `}
      </style>
    </Navbar>
  );
};

export default MyNavbar;
