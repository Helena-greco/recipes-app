import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarComidas() {
  const explorar = 'Explorar Comidas';
  return (
    <>
      <Header title={ explorar } search={ false } />
      <Footer />
    </>
  );
}

export default ExplorarComidas;
