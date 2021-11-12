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
      >
        Me Surpreenda!
      </Button>
      <Footer />
    </>
  );
}

export default ExplorarComidas;
