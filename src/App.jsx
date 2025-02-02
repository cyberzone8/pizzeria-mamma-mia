import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
          <Route path="/login" element={<LoginPage />} /> {/* Ruta para el login */}
          <Route path="/register" element={<RegisterPage />} /> {/* Ruta para el registro */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;