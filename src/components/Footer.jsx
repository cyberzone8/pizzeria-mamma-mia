import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-100 bg-dark text-white text-center py-3">
    © {year} - Pizzería Mamma Mía! - Todos los derechos reservados
    </footer>
  );
};

export default Footer;
