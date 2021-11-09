import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Perfil() {
  const perfil = 'Perfil';
  return (
    <>
      <Header title={ perfil } search={ false } />
      <Footer />
    </>
  );
}

export default Perfil;
