import React from 'react';

function Categories({ List }) {
  return (
    List.map((cat, index) => (
      <button
        type="button"
        key={ index }
        data-testid={ `${cat.strCategory}-category-filter` }
      >
        { cat.strCategory }
      </button>
    ))
  );
}

export default Categories;
