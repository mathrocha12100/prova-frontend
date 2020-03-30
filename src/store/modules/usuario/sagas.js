import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

export function* atualizarUsuario({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { telefone, avatar_id, ...resto } = payload.data;

    const perfil = {
      telefone,
      avatar_id,
      ...(resto.senhaAntiga ? resto : {}),
    };

    yield call(api.put, 'usuarios', perfil);

    toast.success('Perfil atualizado com sucesso');
  } catch (error) {
    toast.error('Erro, confira seus dados');
  }
}

export default all([
  takeLatest('@usuario/ATUALIZAR_USUARIO_REQUISICAO', atualizarUsuario),
]);
