export const loadCategoriaRequest = () => ({
  type: 'LOAD_CATEGORIA_REQUEST',
});

export const loadCategoriaSuccess = data => ({
  type: 'LOAD_CATEGORIA_SUCCESS',
  payload: {
    data,
  },
});

export const loadCategoriaFailure = () => ({
  type: 'LOAD_CATEGORIA_FAILURE',
});

export const loadCategoriaSelecionada = categoriaSelecionada => ({
  type: 'LOAD_CATEGORIA_SELECIONADA',
  payload: {
    categoriaSelecionada,
  },
});
