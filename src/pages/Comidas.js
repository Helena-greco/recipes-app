import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Comidas() {
  const comidas = 'Comidas';
  return (
    <div>
      <Header title={ comidas } />
      <Footer />
    </div>
  );
}

export default Comidas;
