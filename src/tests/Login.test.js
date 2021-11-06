import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';

const EMAIL_INPUT_TEST_ID = 'email-input';
const PASSWORD_INPUT_TEST_ID = 'password-input';
const BUTTON_TEST_ID = 'login-submit-btn';
const VALID_EMAIL = 'alguem@email.com';
const VALID_PASSWORD = '1234567';

describe('1. Testa o componente Tela de Login', () => {
  test('A rota para esta página deve ser \'/\'', () => {
    const { history } = renderWithRouter(<Login />, '/');
    expect(history.location.pathname).toBe('/');
  });

  test('se a aplicação contém os inputs de email e login', () => {
    renderWithRouter(<Login />);
    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const password = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

describe(`2. Realize as seguintes verificações nos campos de 
  email, senha e botão`, () => {
  test('se botão de "Entrar" está desabilitado ao entrar na página', () => {
    renderWithRouter(<Login />, '/');
    const button = screen.getByTestId('login-submit-btn');
    expect(button).toBeDisabled();
  });

  test('O botão de "Entrar está desabilitado quando um email inválido é digitado', () => {
    renderWithRouter(<Login />);

    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const password = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    userEvent.type(email, 'email');
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'email@com@');
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'emailcom@');
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'alguem@email.');
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();
  });

  test(`O botão de "Entrar está desabilitado quando 
    uma senha inválida é digitada`, () => {
    renderWithRouter(<Login />);

    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const password = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, '23456');
    expect(button).toBeDisabled();
  });

  test(`O botão de "Entrar" está habilitado quando um 
    email e uma senha válidos são passados`, () => {
    renderWithRouter(<Login />);

    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const password = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeEnabled();
  });
});

describe('3. Ao clicar no botão, a rota deve ser mudada', () => {
  test('A rota deve ser mudada para \'/comidas\' após o clique no botão.', () => {
    const { history } = renderWithRouter(<Login />);
    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const password = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    userEvent.click(button);

    expect(history.location.pathname).toBe('/comidas');
  });
});
