import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Categories from '../components/Categories';
import RecipesContext from '../context/RecipesContext';

const COMIDAS = 'Comidas';

const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function Comidas() {
  const { categories, filterMeals, fetchCategories } = useContext(RecipesContext);

  useEffect(() => { fetchCategories(URL); }, []);

  return (
    <div>
      <Header title={ COMIDAS } />
      <Categories List={ categories } Filter={ filterMeals } />
      <CardList Type="Meal" />
    </div>
  );
}

export default Comidas;
