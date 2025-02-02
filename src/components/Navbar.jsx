import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link

const MyNavbar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo y título */}
        <Navbar.Brand as={Link} to="/"> {/* Usa Link para la navegación */}
          🍕 Pizzería Mamma Mía
        </Navbar.Brand>

        {/* Botón para colapsar en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Usa Link para la navegación */}
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                <Nav.Link as={Link} to="/logout">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link> {/* Usa Link para la navegación */}
                <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link> {/* Usa Link para la navegación */}
              </>
            )}
          </Nav>

          {/* Botón de Total */}
          <Button
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
            🛒 Total: ${total.toLocaleString()}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;