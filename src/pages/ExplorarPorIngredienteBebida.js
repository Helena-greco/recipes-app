import React from 'react';
import Header from '../components/Header';

function ExplorarPorIngredienteBebida() {
  const explorar = 'Explorar Ingredientes';
  return (
    <Header title={ explorar } search={ false } />
  );
}

export default ExplorarPorIngredienteBebida;
