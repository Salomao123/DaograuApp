const INITAL_STATE = {
  produtos: {},
  loading: false,
  error: false,
};

export default function login(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'INSERT_PRODUTO_REQUEST':
      return {...state, loading: true};
    case 'INSERT_PRODUTO_SUCCESS':
      return {
        ...state,
        produtos: action.payload.produtos,
        error: false,
        loading: false,
      };
    case 'INSERT_PRODUTO_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return {...state};
  }
}
