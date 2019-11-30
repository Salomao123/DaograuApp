export const insertProdutosRequest = data => ({
  type: 'INSERT_PRODUTO_REQUEST',
  payload: {
    data,
  },
});

export const insertProdutosSuccess = produtos => ({
  type: 'INSERT_PRODUTO_SUCCESS',
  payload: {
    produtos,
  },
});

export const insertProdutosFailure = () => ({
  type: 'INSERT_PRODUTO_FAILURE',
});
