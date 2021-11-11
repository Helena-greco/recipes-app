import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ Filter }) {
  const [searchType, setSearchType] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleClick = () => {
    if (searchType === 'letter' && searchInput.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else Filter(searchInput, searchType);
  };

  return (
    <section>
      <input
        type="text"
        data-testid="search-input"
        value={ searchInput }
        onChange={ ({ target: { value } }) => setSearchInput(value) }
      />

      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="search-type"
          id="ingredient-search-radio"
          onClick={ () => setSearchType('ingredient') }
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          type="radio"
          data-testid="name-search-radio"
          name="search-type"
          id="name-search-radio"
          onClick={ () => setSearchType('name') }
        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="search-type"
          id="first-letter-search-radio"
          onClick={ () => setSearchType('letter') }
        />
        Primeira letra
      </label>
      <input
        type="button"
        data-testid="exec-search-btn"
        value="Buscar"
        onClick={ handleClick }
      />
    </section>
  );
}

SearchBar.propTypes = {
  Filter: PropTypes.func,
}.isRequired;

export default SearchBar;
