import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import RecipesContext from '../context/RecipesContext';

function Categories({ List, Filter }) {
  const [filteredCat, setFilteredCat] = useState(false);

  const filterCategory = (category) => {
    if (!filteredCat) {
      Filter(category, 'category');
      setFilteredCat(true);
    } else {
      Filter('', '');
      setFilteredCat(false);
    }
  };

  return (
    List.map((cat, index) => (
      <Button
        type="button"
        key={ index }
        data-testid={ `${cat.strCategory}-category-filter` }
        onClick={ () => filterCategory(cat.strCategory) }
      >
        { cat.strCategory }
      </Button>
    ))
  );
}

export default Categories;
