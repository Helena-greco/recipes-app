import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EXPLORAR = 'Explorar Bebidas';

function ExplorarBebidas() {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(`/explorar/bebidas/${route}`);
  };

  const handleSurprise = async () => {
    const resolve = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const result = await resolve.json();
    history.push(`/bebidas/${result.drinks[0].idDrink}`);
  };

  return (
    <>
      <Header title={ EXPLORAR } search={ false } />
      <Button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ (() => { handleClick('ingredientes'); }) }
      >
        Por Ingredientes
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

export default ExplorarBebidas;
