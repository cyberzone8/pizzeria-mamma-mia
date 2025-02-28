import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <Footer />
    </div>
  );
};


export default App;