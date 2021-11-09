import React from 'react';
import { Button } from 'react-bootstrap';
// import RecipesContext from '../context/RecipesContext';

function Categories({ List, Filter }) {
  return (
    List.map((cat, index) => (
      <Button
        type="button"
        key={ index }
        data-testid={ `${cat.strCategory}-category-filter` }
        onClick={ () => Filter(cat.strCategory, 'category') }
      >
        { cat.strCategory }
      </Button>
    ))
  );
}

export default Categories;
