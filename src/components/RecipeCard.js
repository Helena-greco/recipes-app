import React from 'react';
import { Card, Button } from 'react-bootstrap';

function RecipeCard({ Recipe, Index }) {
  return (
    <Card style={ { width: '18rem' } } data-testid={ `${Index}-recipe-card` }>
      <Card.Img variant="top" src={Recipe.strMealThumb} />
      <Card.Body>
        <Card.Title>{Recipe.strMeal}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
