import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import {
  logarSucesso,
  logarOuCriarFalha,
  criarUsuarioSucesso,
} from './actions';

export function* logarRequisicao({ payload }) {
  try {
    const { nome, senha } = payload;

    const response = yield call(api.post, 'sessao', {
      nome,
      senha,
    });

    const { token, usuario } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(logarSucesso(token, usuario));
    history.push('/dashboard');
  } catch (error) {
    yield put(logarOuCriarFalha());
    toast.error('Falha na autentificação verifique seus dados');
  }
}

export function* criarUsuario({ payload }) {
  try {
    const { nome, senha, telefone, email } = payload;

    yield call(api.post, 'usuarios', {
      nome,
      senha,
      email,
      telefone,
    });
    toast.success('Usuario criado com sucesso!');

    yield put(criarUsuarioSucesso());
  } catch (error) {
    yield put(logarOuCriarFalha());

    toast.error('Falha na criação verifique seus dados');
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function deslogar() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGAR_REQUISICAO', logarRequisicao),
  takeLatest('@auth/CRIAR_USUARIO_REQUISICAO', criarUsuario),
  takeLatest('@auth/DESLOGAR', deslogar),
]);
