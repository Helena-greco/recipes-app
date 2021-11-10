import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarBebidas() {
  const explorar = 'Explorar Bebidas';
  return (
    <>
      <Header title={ explorar } search={ false } />
      <Footer />
    </>
  );
}

export default ExplorarBebidas;
