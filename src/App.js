import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Explorar from './pages/Explorar';
import Perfil from './pages/Perfil';
import Bebidas from './pages/Bebidas';
import DetalhesComida from './pages/DetalhesComida';
import ReceitaProgresso from './pages/ReceitaProgresso';
import DetalhesBebida from './pages/DetalhesBebida';
import BebidaProgresso from './pages/BebidaProgresso';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarPorIngrediente from './pages/ExplorarPorIngrediente';
import ExplorarPorIngredienteBebida from './pages/ExplorarPorIngredienteBebida';
import ExplorarBebidaOrigem from './pages/ExplorarBebidaOrigem';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ExplorarComidaOrigem from './pages/ExplorarComidaOrigem';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Login }
      />
      <Route
        exact
        path="/comidas"
        component={ Comidas }
      />
      <Route
        exact
        path="/comidas/:id"
        component={ DetalhesComida }
      />
      <Route
        exact
        path="/comidas/:id/in-progress"
        component={ ReceitaProgresso }
      />
      <Route
        exact
        path="/bebidas"
        component={ Bebidas }
      />
      <Route
        exact
        path="/bebidas/:id"
        component={ DetalhesBebida }
      />
      <Route
        exact
        path="/bebidas/:id/in-progress"
        component={ BebidaProgresso }
      />
      <Route
        exact
        path="/explorar"
        component={ Explorar }
      />
      <Route
        exact
        path="/explorar/comidas"
        component={ ExplorarComidas }
      />
      <Route
        exact
        path="/explorar/bebidas"
        component={ ExplorarBebidas }
      />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExplorarPorIngrediente }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExplorarPorIngredienteBebida }
      />
      <Route
        exact
        path="/explorar/bebidas/area"
        component={ ExplorarBebidaOrigem }
      />
      <Route
        exact
        path="/receitas-feitas"
        component={ ReceitasFeitas }
      />
      <Route
        exact
        path="/receitas-favoritas"
        component={ ReceitasFavoritas }
      />
      <Route
        exact
        path="/perfil"
        component={ Perfil }
      />
      <Route
        exact
        path="/explorar/comidas/area"
        component={ ExplorarComidaOrigem }
      />
    </Switch>
  );
}

export default App;
