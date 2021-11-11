import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function RecipeCard({ Recipe, Index, Type, Route }) {
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={ () => history.push(`/${Route}/${Recipe[`id${Type}`]}`) }
    >
      <Card style={ { width: '18rem' } } data-testid={ `${Index}-recipe-card` }>
        <Card.Img
          variant="top"
          src={ Recipe[`str${Type}Thumb`] }
          data-testid={ `${Index}-card-img` }
        />
        <Card.Body>
          <Card.Title
            data-testid={ `${Index}-card-name` }
          >
            { Recipe[`str${Type}`] }
          </Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </button>
  );
}

RecipeCard.propTypes = {
  Recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  Index: PropTypes.number.isRequired,
  Type: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
};

export default RecipeCard;
