import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Bebidas() {
  const bebidas = 'Bebidas';
  return (
    <div>
      <Header title={ bebidas } />
      <Footer />
    </div>
  );
}

export default Bebidas;
