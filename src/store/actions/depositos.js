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

export const depositoSelecionado = depositoSelecionado => ({
  type: 'SELECIONAR_DEPOSITO_CADASTRO_PRODUTO',
  payload: {
    depositoSelecionado,
  },
});

export const excluirDepositos = () => ({
  type: 'EXCLUIR_DEPOSITO_CADASTRO_PRODUTO',
});
