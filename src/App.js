import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Explorar from './pages/Explorar';
import Perfil from './pages/Perfil';
import Bebidas from './pages/Bebidas';

function App() {
  return (
    <Switch>
      <Route path="/comidas" component={ Comidas } />
      <Route path="/bebidas" component={ Bebidas } />
      <Route path="/explorar" component={ Explorar } />
      <Route path="/perfil" component={ Perfil } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
