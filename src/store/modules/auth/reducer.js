import produce from 'immer';

const ESTADO_INICIAL = {
  token: null,
  logado: false,
  carregando: false,
};

export default function auth(state = ESTADO_INICIAL, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGAR_REQUISICAO': {
        draft.carregando = true;
        break;
      }
      case '@auth/LOGAR_SUCESSO': {
        draft.carregando = false;
        draft.logado = true;
        draft.token = action.payload.token;
        break;
      }
      case '@auth/CRIAR_USUARIO_REQUISICAO': {
        draft.carregando = true;
        break;
      }
      case '@auth/CRIAR_USUARIO_SUCESSO': {
        draft.carregando = false;
        break;
      }
      case '@auth/LOGAR_OU_CRIAR_FALHA': {
        draft.carregando = false;
        break;
      }
      case '@auth/DESLOGAR': {
        draft.token = null;
        draft.logado = false;
        break;
      }
      default:
    }
  });
}
