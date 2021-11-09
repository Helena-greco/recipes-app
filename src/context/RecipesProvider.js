import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [mealsList, setMealsList] = useState([]);
  const [drinksList, setDrinksList] = useState([]);

  const fetchLists = async () => {
    const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const meals = await mealsResponse.json();
    setMealsList([...meals.meals]);
    const drinksResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const drinks = await drinksResponse.json();
    setDrinksList([...drinks.drinks]);
  };

  useEffect(() => { fetchLists(); }, []);

  const context = {
    mealsList,
    setMealsList,
    drinksList,
    setDrinksList,
  };
  return (
    <RecipesContext.Provider value={ context }>{ children }</RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
