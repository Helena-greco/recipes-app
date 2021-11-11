import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';

const BEBIDAS = 'Bebidas';
const MAX_CAT = 5;

function Bebidas() {
  const { filterDrinks, filteredDrinks } = useContext(RecipesContext);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const result = await response.json();
    setCategories([...result.drinks].slice(0, MAX_CAT));
  };

  useEffect(() => { fetchCategories(); }, []);

  const history = useHistory();
  if (filteredDrinks.length === 1) history.push(`bebidas/${filteredDrinks[0].idDrink}`);

  return (
    <div>
      <Header title={ BEBIDAS } Filter={ filterDrinks } />
      <Categories List={ categories } Filter={ filterDrinks } />
      <CardList Type="Drink" />
      <Footer />
    </div>
  );
}

export default Bebidas;
