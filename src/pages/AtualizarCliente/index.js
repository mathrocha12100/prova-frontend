import React from 'react';
import * as Yup from 'yup';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { Wrapper, Conteudo } from '../_layouts/auth/styles';
import { store } from '../../store';
import AvatarInput from '../../components/AvatarInput';
import { atualizarCliente } from '../../store/modules/cliente/actions';

const schema = Yup.object().shape({
  nome: Yup.string().min(6),
  endereco: Yup.string().min(6),
  cpf: Yup.string().min(11),
  telefone: Yup.string().min(10),
  avatar_id: Yup.string(),
});

export default function AtualizarCliente() {
  const { cliente } = store.getState().cliente;
  const dispatch = useDispatch();

  function attCliente(data, id) {
    id = cliente.id;
    dispatch(atualizarCliente(data, id));
  }

  return (
    <Container>
      {cliente ? (
        <Wrapper>
          <Conteudo>
            <Form initialData={cliente} schema={schema} onSubmit={attCliente}>
              <aside>
                <strong>
                  <AvatarInput name="avatar_id" />
                  NOME COMPLETO *
                </strong>

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
              <button type="submit">ATUALIZAR CLIENTE</button>
            </Form>
          </Conteudo>
        </Wrapper>
      ) : (
        <Redirect to="/clientes" />
      )}
    </Container>
  );
}
