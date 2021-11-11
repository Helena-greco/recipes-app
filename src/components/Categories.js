import PropTypes from 'prop-types';
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
    <>
      { List.map((cat, index) => (
        <Button
          type="button"
          key={ index }
          data-testid={ `${cat.strCategory}-category-filter` }
          onClick={ () => filterCategory(cat.strCategory) }
        >
          { cat.strCategory }
        </Button>
      )) }
      <Button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => filterCategory(filteredCat) }
      >
        All
      </Button>
    </>
  );
}

Categories.propTypes = {
  Filter: PropTypes.func.isRequired,
  List: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default Categories;
