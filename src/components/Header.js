import React from 'react';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Button type="button" data-testid="profile-top-btn">
        <img src="../images/profileIcon.svg" alt="Profile" />
      </Button>
      <h1 data-testid="page-title">App de Receitas</h1>
      <Button type="button" data-testid="search-top-btn">
        <img src="../images/searchIcon.svg" alt="Profile" />
      </Button>
    </header>
  );
}

export default Header;
