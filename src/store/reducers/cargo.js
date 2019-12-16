const INITAL_STATE = {
  cargo: {},
  cargoSelecionado: {},
  error: false,
  loading: false,
};

export default function cargo(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_CARGO_REQUEST':
      return {...state, loading: true};
    case 'LOAD_CARGO_SUCCESS':
      return {
        ...state,
        cargo: action.payload.data,
        error: false,
        loading: false,
      };
    case 'LOAD_CARGO_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      };

    case 'LOAD_CARGO_SELECIONADO':
      return {
        ...state,
        cargoSelecionado: action.payload.data,
      };

    default:
      return {...state};
  }
}
