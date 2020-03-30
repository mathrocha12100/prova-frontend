import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Wrapper, Conteudo } from '../_layouts/auth/styles';
import { Container } from './styles';
import api from '../../services/api';

export default function CriarCliente() {
  async function criarCliente({ nome, endereco, cpf, telefone }) {
    try {
      api.post('/clientes', {
        nome,
        endereco,
        cpf,
        telefone,
      });
      toast.success('Usuario cadastrado com sucesso!');
    } catch (error) {
      toast.error('Dados invalidos!');
    }
  }

  return (
    <Container>
      <Wrapper>
        <Conteudo>
          <Form onSubmit={criarCliente}>
            <aside>
              <strong>NOME COMPLETO *</strong>
              <Link to="/clientes">VOLTAR AOS CLIENTES</Link>
            </aside>
            <Input name="nome" placeholder="Nome completo do cliente" />
            <strong>ENDEREÇO *</strong>
            <Input name="endereco" placeholder="Endereço do cliente" />
            <div>
              <strong>CPF *</strong>
              <strong>TELEFONE *</strong>
              <Input name="cpf" placeholder="CPF apenas numeros" />
              <Input name="telefone" placeholder="Telefone com DD" />
            </div>
            <button type="submit">CRIAR CLIENTE</button>
          </Form>
        </Conteudo>
      </Wrapper>
    </Container>
  );
}
