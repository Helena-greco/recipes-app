import React from 'react';
import Header from '../components/Header';

function ReceitasFeitas() {
  const receitas = 'Receitas Feitas';
  return (
    <Header title={ receitas } search={ false } />
  );
}

export default ReceitasFeitas;
