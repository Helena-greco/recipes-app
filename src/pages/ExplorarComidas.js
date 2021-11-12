import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EXPLORAR = 'Explorar Comidas';

function ExplorarComidas() {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(`/explorar/comidas/${route}`);
  };

  const handleSurprise = async () => {
    const resolve = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const result = await resolve.json();
    history.push(`/comidas/${result.meals[0].idMeal}`);
  };

  return (
    <>
      <Header title={ EXPLORAR } search={ false } />
      <Button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => { handleClick('ingredientes'); } }
      >
        Por Ingredientes
      </Button>
      <Button
        type="button"
        data-testid="explore-by-area"
        onClick={ () => { handleClick('area'); } }
      >
        Por Local de Origem
      </Button>
      <Button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleSurprise }
      >
        Me Surpreenda!
      </Button>
      <Footer />
    </>
  );
}

export default ExplorarComidas;
