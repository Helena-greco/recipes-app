import React from 'react';
import Header from '../components/Header';

function ReceitasFavoritas() {
  const receitas = 'Receitas Favoritas';
  return (
    <Header title={ receitas } search={ false } />
  );
}

export default ReceitasFavoritas;
