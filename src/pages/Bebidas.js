import React from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';

function Bebidas() {
  const bebidas = 'Bebidas';
  return (
    <div>
      <Header title={ bebidas } />
      <CardList Type="Drink" />
    </div>
  );
}

export default Bebidas;
