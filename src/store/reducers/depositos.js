const INITAL_STATE = {
  deposito: {},
  depositoSelecionado: {},
  inserirDepositos: {},
  error: false,
  loading: false,
};

export default function depositos(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'DEPOSITO_REQUEST':
      return {...state, loading: true};
    case 'DEPOSITO_SUCCESS':
      return {...state, deposito: action.payload.data, loading: false};
    case 'DEPOSITO_SUCCESS':
      return {...state, error: true, loading: false};

    case 'INSERT_DEPOSITO_REQUEST':
      return {...state, loading: true};
    case 'INSERT_DEPOSITO_SUCCESS':
      return {
        ...state,
        inserirDepositos: action.payload.data,
        error: false,
        loading: false,
      };
    case 'INSERT_DEPOSITO_FAILURE':
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
