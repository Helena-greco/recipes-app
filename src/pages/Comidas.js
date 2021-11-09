import React from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';

function Comidas() {
  const comidas = 'Comidas';
  return (
    <div>
      <Header title={ comidas } />
      <CardList Type="Meal" />
    </div>
  );
}

export default Comidas;
