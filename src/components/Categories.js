import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import RecipesContext from '../context/RecipesContext';

function Categories({ List, Filter }) {
  const [filteredCat, setFilteredCat] = useState('');

  const filterCategory = async (category) => {
    if (category === filteredCat) {
      Filter('', '');
    } else {
      Filter(category, 'category');
      setFilteredCat(category);
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
