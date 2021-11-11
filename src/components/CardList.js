import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import RecipeCard from './RecipeCard';
import RecipesContext from '../context/RecipesContext';

const MAX_RECIPES = 12;

function CardList({ Type }) {
  const { filteredMeals, filteredDrinks } = useContext(RecipesContext);

  if (filteredMeals && Type === 'Meal') {
    const meals = filteredMeals.slice(0, MAX_RECIPES);
    return (
      meals.map((meal, index) => (
        <RecipeCard
          key={ index }
          Recipe={ meal }
          Index={ index }
          Type={ Type }
          Route="comidas"
        />
      ))
    );
  }

  if (filteredDrinks && Type === 'Drink') {
    const drinks = filteredDrinks.slice(0, MAX_RECIPES);
    return (
      drinks.map((drink, index) => (
        <RecipeCard
          key={ index }
          Recipe={ drink }
          Index={ index }
          Type={ Type }
          Route="bebidas"
        />
      ))
    );
  }

  return (<h1>Nenhuma receita encontrada</h1>);
}

CardList.propTypes = {
  Type: PropTypes.string,
}.isRequired;

export default CardList;
