import React from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <Link to="/bebidas">
        <img src={ drinkIcon } alt="drinkIcon" />
      </Link>
      <Link to="/explorar">
        <img src={ exploreIcon } alt="exploreIcon" />
      </Link>
      <Link to="/comidas">
        <img src={ mealIcon } alt="mealIcon" />
      </Link>
    </footer>
  );
}

export default Footer;
