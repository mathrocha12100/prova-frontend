export function pegarInformacoesDoCliente(
  nome,
  cpf,
  endereco,
  telefone,
  id,
  avatar
) {
  return {
    type: '@cliente/PEGAR_INFORMACOES_CLIENTE',
    payload: { nome, cpf, endereco, telefone, id, avatar },
  };
}

export function atualizarCliente(data, id) {
  return {
    type: '@cliente/ATUALIZAR_CLIENTE',
    data,
    id,
  };
}
