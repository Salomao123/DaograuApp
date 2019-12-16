const INITAL_STATE = {
  categorias: {},
  categoriaSelecionada: {},
  error: false,
  loading: false,
};

export default function categoria(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_CATEGORIA_REQUEST':
      return {...state, loading: true};
    case 'LOAD_CATEGORIA_SUCCESS':
      return {
        ...state,
        categorias: action.payload.data,
        error: false,
        loading: false,
      };
    case 'LOAD_CATEGORIA_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      };

    case 'LOAD_CATEGORIA_SELECIONADA':
      return {
        ...state,
        categoriaSelecionada: action.payload.categoriaSelecionada,
      };

    default:
      return {...state};
  }
}
