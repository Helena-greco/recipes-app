import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

function Perfil() {
  const perfil = 'Perfil';
  return (
    <>
      <Header title={ perfil } search={ false } />
      <Profile />
      <Footer />
    </>
  );
}

export default Perfil;
