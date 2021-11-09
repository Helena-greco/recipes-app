import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

const mealsInitialState = {
  categories: [], // Lista de categorias recuperadas pela API
  list: [], // Lista de comidas recuperadas pela API
  inProgress: {}, // Objeto onde cada chave é o id da receita em andamento e o valor correspondente é o array com os ingredientes já marcados
};
const drinksInitialState = {
  categories: [], // Lista de categorias recuperadas pela API
  list: [], // Lista de comidas recuperadas pela API
  inProgress: {}, // Objeto onde cada chave é o id da receita em andamento e o valor correspondente é o array com os ingredientes já marcados
};

const Provider = ({ children }) => {
  const [meals, setMeals] = useState(mealsInitialState);
  const [drinks, setDrinks] = useState(drinksInitialState);
  // Fernando: optamos por refatorar o nome ingredientsList por RecipesList por questão semântica; 
  const [recipesList, setRecipesList] = useState([]);
  const [filteredRecipe, setFilteredRecipe] = useState([]);

  const setMealsList = (mealsList) => {
    setMeals({
      ...meals,
      list: mealsList,
    });
  };

  const setDrinksList = (DrinksList) => {
    setDrinks({
      ...drinks,
      list: DrinksList,
    });
  };

  const filterRecipes = async (search, type) => {
    if (type === 'name') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const result = await response.json();
      setFilteredRecipe(result);
    } else if (type === 'ingredient') {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`,
      );
      const result = await response.json();
      setFilteredRecipe(result);
    } else if (type === 'letter') {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`,
      );
      const result = await response.json();
      setFilteredRecipe(result);
    }
  };

  // Fernando: optamos por mudar o nome dessa função de fetchIngredients para fetchRecipes por questão semântica
  const fetchRecipes = useCallback(async (type) => {
    const MAX_INGREDIENTS = 12;
    if (type === 'comidas') {
      const { meals: ingredients } = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
      ).then((response) => response.json());
      const slice = ingredients.slice(0, MAX_INGREDIENTS);
      setIngredientsList(slice);
      return;
    }
    if (type === 'bebidas') {
      const { drinks: ingredients } = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
      ).then((response) => response.json());
      const slice = ingredients.slice(0, MAX_INGREDIENTS);
      setIngredientsList(slice);
      return;
    }
    setIngredientsList([]);
  }, []);

  const context = {
    setDrinksList,
    setMealsList,
    recipesList,
    setRecipesList,
    meals,
    setMeals,
    fetchRecipes,
    filterRecipes,
    filteredRecipe,
    setFilteredRecipe,
  };

  return <RecipesContext.Provider value={ context }>{children}</RecipesContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
