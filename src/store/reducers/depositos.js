const INITAL_STATE = {
  deposito: {},
  depositoSelecionado: {},
  error: false,
  loading: false,
};

export default function depositos(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'DEPOSITO_REQUEST':
      return {...state, loading: true};
    case 'DEPOSITO_SUCCESS':
      return {
        ...state,
        deposito: action.payload.data,
        error: false,
        loading: false,
      };
    case 'DEPOSITO_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'SELECIONAR_DEPOSITO_CADASTRO_PRODUTO':
      return {
        ...state,
        depositoSelecionado: action.payload.depositoSelecionado,
      };
    case 'EXCLUIR_DEPOSITO_CADASTRO_PRODUTO':
      return {
        ...state,
        depositoSelecionado: [],
      };
    default:
      return {...state};
  }
}
