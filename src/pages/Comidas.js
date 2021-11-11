import React, { useEffect, useContext, useState } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';

const COMIDAS = 'Comidas';
const MAX_CAT = 5;

function Comidas() {
  const { filterMeals, filteredMeals } = useContext(RecipesContext);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const result = await response.json();
    setCategories([...result.meals].slice(0, MAX_CAT));
  };

  useEffect(() => { fetchCategories(); }, []);

  if (!filteredMeals) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return (
    <div>
      <Header title={ COMIDAS } Filter={ filterMeals } />
      <Categories List={ categories } Filter={ filterMeals } Type="comidas" />
      <CardList Type="Meal" />
      <Footer />
    </div>
  );
}

export default Comidas;
