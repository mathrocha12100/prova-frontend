import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Registrar from '../pages/Registrar';
import Dashboard from '../pages/Dashboard';
import Clientes from '../pages/Clientes';
import CriarCliente from '../pages/CriarCliente';
import Usuarios from '../pages/Usuarios';
import AtualizarCliente from '../pages/AtualizarCliente';
import AtualizarUsuario from '../pages/AtualizarUsuario';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/registrar" component={Registrar} />
      <Route path="/dashboard" component={Dashboard} ehPrivado />
      <Route path="/clientes" component={Clientes} ehPrivado />
      <Route path="/criarcliente" component={CriarCliente} ehPrivado />
      <Route path="/usuarios" component={Usuarios} ehPrivado />
      <Route path="/atualizarcliente" component={AtualizarCliente} ehPrivado />
      <Route path="/perfil" component={AtualizarUsuario} ehPrivado />
    </Switch>
  );
}
