//pegar depositos
export const depositosRequest = () => ({
  type: 'DEPOSITO_REQUEST',
});

export const depositosSuccess = data => ({
  type: 'DEPOSITO_SUCCESS',
  payload: {
    data,
  },
});

export const depositosFailure = () => ({
  type: 'DEPOSITO_FAILURE',
});

//insert

export const insertDepositosRequest = data => ({
  type: 'INSERT_DEPOSITO_REQUEST',
  payload: {
    data,
  },
});

export const insertDepositosSuccess = data => ({
  type: 'INSERT_DEPOSITO_SUCCESS',
  payload: {
    data,
  },
});

export const insertDepositosFailure = () => ({
  type: 'INSERT_DEPOSITO_FAILURE',
});

//get

export const depositoSelecionado = depositoSelecionado => ({
  type: 'SELECIONAR_DEPOSITO_CADASTRO_PRODUTO',
  payload: {
    depositoSelecionado,
  },
});

//destroy
export const excluirDepositos = () => ({
  type: 'EXCLUIR_DEPOSITO_CADASTRO_PRODUTO',
});
