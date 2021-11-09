import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CardList from '../components/CardList';

const BEBIDAS = 'bebidas';
const MAX_CAT = 5;

function Bebidas() {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const result = await response.json();
    setCategories([...result.drinks].slice(0, MAX_CAT));
  };

  useEffect(() => { fetchCategories(); }, []);

  return (
    <div>
      <Header title={ BEBIDAS } />
      <Categories List={ categories } />
      <CardList Type="Drink" />
    </div>
  );
}

export default Bebidas;
