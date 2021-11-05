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
import ExplorarBebidaArea from './pages/ExplorarBebidaArea';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavorias from './pages/ReceitasFavorias';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Login }
      />
      <Route
        path="/comidas"
        component={ Comidas }
      />
      <Route
        path="comidas/:id - da - receita"
        component={ DetalhesComida }
      />
      <Route
        path="/comidas/:id - da - receita/in-progress"
        component={ ReceitaProgresso }
      />
      <Route
        path="/bebidas"
        component={ Bebidas }
      />
      <Route
        path="/bebidas/:id - da - receita"
        component={ DetalhesBebida }
      />
      <Route
        path="/bebidas/:id - da - receita/in-progress"
        component={ BebidaProgresso }
      />
      <Route
        path="/explorar"
        component={ Explorar }
      />
      <Route
        path="/explorar/comidas"
        component={ ExplorarComidas }
      />
      <Route
        path="/explorar/bebidas"
        component={ ExplorarBebidas }
      />
      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExplorarPorIngrediente }
      />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExplorarPorIngredienteBebida }
      />
      <Route
        path="/explorar/bebidas/area"
        component={ ExplorarBebidaArea }
      />
      <Route
        path="/receitas-feitas"
        component={ ReceitasFeitas }
      />
      <Route
        path="/receitas-favoritas"
        component={ ReceitasFavorias }
      />
      <Route
        path="/perfil"
        component={ Perfil }
      />
    </Switch>
  );
}

export default App;
