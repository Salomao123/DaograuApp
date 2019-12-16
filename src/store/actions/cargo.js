export const loadCargoRequest = () => ({
  type: 'LOAD_CARGO_REQUEST',
});

export const loadCargoSuccess = data => ({
  type: 'LOAD_CARGO_SUCCESS',
  payload: {
    data,
  },
});

export const loadCargoFailure = () => ({
  type: 'LOAD_CARGO_FAILURE',
});

export const loadCargoSelecionado = data => ({
  type: 'LOAD_CARGO_SELECIONADO',
  payload: {
    data,
  },
});
