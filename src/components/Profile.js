import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory();
  /** Ref.: Consulta ao repositório do grupo 9 sobre o email no LocalStorage, caso a chave 'user' seja null */
  const email = localStorage.getItem('user') || '{ "email": "" }';
  const parseEmail = JSON.parse(email);

  const handleExitPage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <h3 data-testid="profile-email">{parseEmail.email}</h3>
      <Button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </Button>
      <Button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </Button>
      <Button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleExitPage }
      >
        Sair
      </Button>
    </>
  );
}

export default Profile;
