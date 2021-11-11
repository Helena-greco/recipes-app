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
    setFilteredMeals([...meals.meals]);
    const drinksResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const drinks = await drinksResponse.json();
    setDrinksList([...drinks.drinks]);
    setFilteredDrinks([...drinks.drinks]);
  };

  const filterMeals = async (search, type) => {
    let response;
    let result;
    switch (type) {
    case 'category':
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`);
      result = await response.json();
      setFilteredMeals(result.meals);
      break;
    case 'name':
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      result = await response.json();
      setFilteredMeals(result.meals);
      break;
    case 'ingredient':
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`,
      );
      result = await response.json();
      setFilteredMeals(result.meals);
      break;
    case 'letter':
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`,
      );
      result = await response.json();
      setFilteredMeals(result.meals);
      break;
    default:
      setFilteredMeals(mealsList);
      break;
    }
  };

  const filterDrinks = async (search, type) => {
    let response;
    let result;
    switch (type) {
    case 'category':
      response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search}`);
      result = await response.json();
      setFilteredDrinks(result.drinks);
      break;
    case 'name':
      response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      result = await response.json();
      setFilteredDrinks(result.drinks);
      break;
    case 'ingredient':
      response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`,
      );
      result = await response.json();
      setFilteredDrinks(result.drinks);
      break;
    case 'letter':
      response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`,
      );
      result = await response.json();
      setFilteredDrinks(result.drinks);
      break;
    default:
      setFilteredDrinks(drinksList);
      break;
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
