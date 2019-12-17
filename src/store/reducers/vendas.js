const INITIAL_STATE = {
  venda: {},
  loading: false,
  error: false,
};

export default function vendas(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_VENDA_REQUEST':
      return {...state, loading: true};
    case 'LOAD_VENDA_SUCCESS':
      return {
        ...state,
        venda: action.payload.data,
        error: false,
        loading: false,
      };
    case 'LOAD_VENDA_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return {...state};
  }
}
