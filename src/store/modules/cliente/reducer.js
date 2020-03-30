import produce from 'immer';

const ESTADO_INICIAL = {
  cliente: null,
};

export default function cliente(state = ESTADO_INICIAL, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@cliente/PEGAR_INFORMACOES_CLIENTE': {
        draft.cliente = action.payload;
        break;
      }
      default:
    }
  });
}
