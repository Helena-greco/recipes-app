import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarPorIngredienteBebida() {
  const explorar = 'Explorar Ingredientes';
  return (
    <>
      <Header title={ explorar } search={ false } />
      <Footer />
    </>
  );
}

export default ExplorarPorIngredienteBebida;
