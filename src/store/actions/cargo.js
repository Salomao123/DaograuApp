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

//insert

export const insertCargoRequest = data => ({
  type: 'INSERT_CARGO_REQUEST',
  payload: {
    data,
  },
});

export const insertCargoSuccess = data => ({
  type: 'INSERT_CARGO_SUCCESS',
  payload: {
    data,
  },
});

export const insertCargoFailure = () => ({
  type: 'INSERT_CARGO_FAILURE',
});
