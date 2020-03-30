import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { logarRequisicao } from '../../store/modules/auth/actions';

/**
 * Validação de dados
 */
const schema = Yup.object().shape({
  nome: Yup.string().required(),
  senha: Yup.string().min(6).required(),
});

export default function Login() {
  const dispatch = useDispatch();
  const carregando = useSelector((state) => state.auth.carregando);

  function logar({ nome, senha }) {
    dispatch(logarRequisicao(nome, senha));
  }

  return (
    <Form onSubmit={logar} schema={schema}>
      <strong>USUARIO *</strong>
      <Input name="nome" placeholder="Digite seu nome de usuario" />
      <strong>SENHA *</strong>
      <Input name="senha" type="password" placeholder="Digite sua senha" />
      <Link to="/registrar">Ainda não tenho cadastro</Link>
      <button type="submit">
        {carregando ? <FaSpinner size={22} color="#fff" /> : 'Logar'}
      </button>
    </Form>
  );
}
