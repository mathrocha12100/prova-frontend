import produce from 'immer';

const ESTADO_INICIAL = {
  usuario: null,
};

export default function usuario(state = ESTADO_INICIAL, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGAR_SUCESSO': {
        draft.usuario = action.payload.usuario;
        break;
      }
      case '@auth/DESLOGAR': {
        draft.usuario = null;
        break;
      }
      default:
    }
  });
}
