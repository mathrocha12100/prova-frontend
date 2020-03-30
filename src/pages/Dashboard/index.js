import React from 'react';
import {
  Container,
  VizualizarClientes,
  VizualizarUsuarios,
  CriarClientes,
} from './styles';
import vizualizarClientesImagem from '../../assets/vizualizarClientes.svg';
import vizualizarUsuariosImagem from '../../assets/vizualizarUsuarios.svg';
import criarClientes from '../../assets/criarClientes.svg';

export default function Dashboard() {
  return (
    <Container>
      <VizualizarClientes>
        <h1>
          VIZUALIZAR
          <br /> CLIENTES
        </h1>
        <img src={vizualizarClientesImagem} alt="" />
      </VizualizarClientes>
      <VizualizarUsuarios>
        <h1>
          VIZUALIZAR
          <br /> USUARIOS
        </h1>
        <img src={vizualizarUsuariosImagem} alt="" />
      </VizualizarUsuarios>
      <CriarClientes>
        <div>
          <h1>
            CRIAR <br />
            <strong>CLIENTES</strong>
          </h1>
          <img src={criarClientes} alt="" />
        </div>
      </CriarClientes>
    </Container>
  );
}
