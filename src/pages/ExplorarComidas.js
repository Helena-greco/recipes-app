import React from 'react';
import Header from '../components/Header';

function ExplorarComidas() {
  const explorar = 'Explorar Comidas';
  return (
    <Header title={ explorar } search={ false } />
  );
}

export default ExplorarComidas;
