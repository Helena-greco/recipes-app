import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchInput from './SearchInput';

function Header({ title, search = true }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <header>
      <Link to="/perfil">
        <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{title}</h1>
      {search && (
        <Button type="button" onClick={ () => setIsClicked(!isClicked) }>
          <img src={ searchIcon } alt="Busca" data-testid="search-top-btn" />
        </Button>
      )}
      {isClicked && <SearchInput />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};
export default Header;
