import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory();
  const email = localStorage.getItem('user') || '{ "email": "email@mail.com" }';
  const parseEmail = JSON.parse(email);

  const handleExitPage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <p data-testid="profile-email">{parseEmail.email}</p>
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
