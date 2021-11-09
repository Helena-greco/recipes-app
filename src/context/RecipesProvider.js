import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [mealsList, setMealsList] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [drinksList, setDrinksList] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);

  const fetchLists = async () => {
    const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const meals = await mealsResponse.json();
    setMealsList([...meals.meals]);
    const drinksResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const drinks = await drinksResponse.json();
    setDrinksList([...drinks.drinks]);
  };

  const filterMeals = async (search, type) => {
    if (type === 'name') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const result = await response.json();
      setFilteredMeals(result);
    } else if (type === 'ingredient') {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`,
      );
      const result = await response.json();
      setFilteredMeals(result);
    } else if (type === 'letter') {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`,
      );
      const result = await response.json();
      setFilteredMeals(result);
    }
  };

  const filterDrinks = async (search, type) => {
    if (type === 'name') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const result = await response.json();
      setFilteredDrinks(result);
    } else if (type === 'ingredient') {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`,
      );
      const result = await response.json();
      setFilteredDrinks(result);
    } else if (type === 'letter') {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`,
      );
      const result = await response.json();
      setFilteredDrinks(result);
    }
  };

  useEffect(() => { fetchLists(); }, []);

  const context = {
    mealsList,
    setMealsList,
    filteredMeals,
    setFilteredMeals,
    drinksList,
    setDrinksList,
    filteredDrinks,
    setFilteredDrinks,
    fetchLists,
    filterMeals,
    filterDrinks,
  };
  return (
    <RecipesContext.Provider value={ context }>{ children }</RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
