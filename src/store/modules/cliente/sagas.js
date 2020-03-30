import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

export function* atualizarCliente({ data, id }) {
  try {
    // eslint-disable-next-line camelcase
    const { nome, telefone, cpf, avatar_id, endereco } = data;
    yield call(api.put, `clientes/${id}`, {
      nome,
      telefone,
      endereco,
      cpf,
      avatar_id,
    });
    toast.success('Cliente atualizado com sucesso!');
    history.push('/clientes');
  } catch (error) {
    toast.error('Erro! Verifique os dados');
  }
}

export default all([
  takeLatest('@cliente/ATUALIZAR_CLIENTE', atualizarCliente),
]);
