import React from 'react';
import { Button } from 'react-bootstrap/Button';

function Login() {
  return (
    <>
      <input type="email" placeholder="Digite seu E-mail" data-testid="email-input" />
      <input
        type="password"
        placeholder="Digite sua senha"
        data-testid="password-input"
      />
      <Button type="submit" data-testid="login-submit-btn">
        Entrar
      </Button>
    </>
  );
}

export default Login;
