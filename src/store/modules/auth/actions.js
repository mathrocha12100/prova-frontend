export function logarRequisicao(nome, senha) {
  return {
    type: '@auth/LOGAR_REQUISICAO',
    payload: { nome, senha },
  };
}

export function logarSucesso(token, usuario) {
  return {
    type: '@auth/LOGAR_SUCESSO',
    payload: { token, usuario },
  };
}

export function criarUsuarioRequisicao(nome, senha, email, telefone) {
  return {
    type: '@auth/CRIAR_USUARIO_REQUISICAO',
    payload: { nome, senha, email, telefone },
  };
}

export function criarUsuarioSucesso() {
  return {
    type: '@auth/CRIAR_USUARIO_SUCESSO',
  };
}

export function logarOuCriarFalha() {
  return {
    type: '@auth/LOGAR_OU_CRIAR_FALHA',
  };
}

export function deslogar() {
  return {
    type: '@auth/DESLOGAR',
  };
}
