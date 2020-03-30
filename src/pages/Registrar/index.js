import React from 'react';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { criarUsuarioRequisicao } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  nome: Yup.string().required(),
  email: Yup.string().email().required(),
  telefone: Yup.string(),
  senha: Yup.string().min(6).required(),
});

export default function Registrar() {
  const dispatch = useDispatch();
  const carregando = useSelector((state) => state.auth.carregando);

  function criarUsuario({ nome, email, senha, telefone }) {
    dispatch(criarUsuarioRequisicao(nome, senha, email, telefone));
  }

  return (
    <Form schema={schema} onSubmit={criarUsuario}>
      <strong>NOME DE USUARIO *</strong>
      <Input name="nome" placeholder="Digite seu nome de usuario" />
      <strong>EMAIL *</strong>
      <Input name="email" type="email" placeholder="Digite seu e-mail" />
      <div>
        <strong>SENHA *</strong>
        <strong>TELEFONE</strong>

        <Input name="senha" type="password" placeholder="Digite sua senha" />
        <Input name="telefone" placeholder="Telefone com DD" />
      </div>
      <Link to="/">Já tenho cadastro</Link>
      <button type="submit">
        {carregando ? <FaSpinner size={22} color="#fff" /> : 'CADASTRAR'}
      </button>
    </Form>
  );
}
