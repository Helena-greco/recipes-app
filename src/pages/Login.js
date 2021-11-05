import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const six = 6;

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  const isEmailValid = (ameil) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(ameil);
  };

  const handleClick = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    history.push('/comidas');
  };

  return (
    <form>
      <input
        type="email"
        placeholder="Digite seu E-mail"
        data-testid="email-input"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        data-testid="password-input"
        value={ password }
        onChange={ ({ target: { value } }) => setPassword(value) }
      />

      <Button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ password.length <= six || !isEmailValid(email) }
        onClick={ handleClick }

      >
        Entrar
      </Button>

    </form>
  );
}

export default Login;
