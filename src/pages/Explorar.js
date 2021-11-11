import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorar() {
  const explorar = 'Explorar';
  return (
    <>
      <Header title={ explorar } search={ false } />
      <Footer />
    </>
  );
}

export default Explorar;
