import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import RecipesContext from '../context/RecipesContext';

function Categories({ List, Filter, Type }) {
  const [filteredCat, setFilteredCat] = useState('');

  const { setFilteredMeals, setFilteredDrinks } = useContext(RecipesContext);

  const filterCategory = async (category) => {
    let filtered = [];
    if (category === filteredCat) {
      filtered = await Filter('', '');
      switch (Type.toLowerCase()) {
      case 'comidas':
        await setFilteredMeals(filtered);
        break;
      case 'bebidas':
        await setFilteredDrinks(filtered);
        break;
      default:
        break;
      }
    } else {
      filtered = await Filter(category, 'category');
      switch (Type.toLowerCase()) {
      case 'comidas':
        await setFilteredMeals(filtered);
        setFilteredCat(category);
        break;
      case 'bebidas':
        await setFilteredDrinks(filtered);
        setFilteredCat(category);
        break;
      default:
        break;
      }
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
  Filter: PropTypes.func,
  List: PropTypes.shape({
    map: PropTypes.func,
  }),
  Type: PropTypes.shape({
    toLowerCase: PropTypes.func,
  }),
}.isRequired;

export default Categories;
