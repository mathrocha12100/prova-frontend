export function atualizarUsuarioRequisicao(data) {
  return {
    type: '@usuario/ATUALIZAR_USUARIO_REQUISICAO',
    payload: { data },
  };
}

export function atualizarUsuarioSucesso(avatar) {
  return {
    type: '@usuario/ATUALIZAR_USUARIO_SUCESSO',
    payload: { avatar },
  };
}
