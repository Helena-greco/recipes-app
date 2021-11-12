import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EXPLORAR = 'Explorar';

function Explorar() {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(`/explorar/${route}`);
  };

  return (
    <>
      <Header title={ EXPLORAR } search={ false } />
      <Button
        type="button"
        data-testid="explore-food"
        onClick={ () => { handleClick('comidas'); } }
      >
        Explorar Comidas
      </Button>
      <Button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => { handleClick('bebidas'); } }
      >
        Explorar Bebidas
      </Button>
      <Footer />
    </>
  );
}

export default Explorar;
