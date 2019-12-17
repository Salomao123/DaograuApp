export const loadVendaRequest = data => ({
  type: 'LOAD_VENDA_REQUEST',
  payload: {
    data,
  },
});

export const loadVendaSuccess = data => ({
  type: 'LOAD_VENDA_SUCCESS',
  payload: {
    data,
  },
});

export const loadVendaFailure = () => ({
  type: 'LOAD_VENDA_FAILURE',
});
