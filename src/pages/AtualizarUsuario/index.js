import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { Wrapper, Conteudo } from '../_layouts/auth/styles';
import AvatarInput from '../../components/AvatarInput';
import { atualizarUsuarioRequisicao } from '../../store/modules/usuario/actions';

const schema = Yup.object().shape({
  telefone: Yup.string().min(10),
  senhaAntiga: Yup.string(),
  senha: Yup.string().when('senhaAntiga', (senhaAntiga, field) =>
    senhaAntiga ? field.min(6).required() : field
  ),
  confirmarSenha: Yup.string().when('senha', (senha, field) =>
    senha ? field.min(6).required() : field
  ),
  avatar_id: Yup.string(),
});

export default function AtualizarUsuario() {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.usuario.usuario);

  function atualizarUsuario(data) {
    dispatch(atualizarUsuarioRequisicao(data));
  }

  return (
    <Container>
      <Wrapper>
        <Conteudo>
          <Form
            onSubmit={atualizarUsuario}
            initialData={usuario}
            schema={schema}
          >
            <aside>
              <strong>
                <AvatarInput name="avatar_id" />
                TELEFONE
              </strong>

              <Link to="/dashboard">VOLTAR A DASHBOARD</Link>
            </aside>
            <Input name="telefone" placeholder="Alterar Telefone" />

            <strong>SENHA ANTIGA *</strong>
            <Input
              name="senhaAntiga"
              placeholder="Senha antiga"
              type="password"
            />
            <strong>NOVA SENHA </strong>
            <Input name="senha" placeholder="Nova senha" type="password" />
            <strong>CONFIRMAR SENHA </strong>
            <Input
              name="confirmarSenha"
              placeholder="Nova senha"
              type="password"
            />
            <button type="submit">ATUALIZAR PERFIL</button>
          </Form>
        </Conteudo>
      </Wrapper>
    </Container>
  );
}
