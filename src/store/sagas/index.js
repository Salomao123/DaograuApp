import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import api from '../../services/api';

import {navigate} from '../../services/navigation';

import AsyncStorage from '@react-native-community/async-storage';

//actions
import * as LoginActions from '../actions/login';
import * as DepositosActions from '../actions/depositos';
import * as ProdutosActions from '../actions/produtos';
import * as UsersActions from '../actions/users';

function* login(action) {
  try {
    const {email, password} = action.payload;

    const response = yield call(api.request, {
      method: 'POST',
      url: 'authentication',
      data: {
        email,
        password,
      },
    });

    yield AsyncStorage.setItem('@User_email', email);

    yield AsyncStorage.setItem('@User_token', response.data.token);

    yield put(LoginActions.loginSuccess(email, password));

    navigate('Dashboard');
  } catch (err) {
    yield put(LoginActions.loginFailure());
    console.log(err.message);
  }
}

function* depositos() {
  try {
    const token = yield AsyncStorage.getItem('@User_token');

    const response = yield call(api.request, {
      method: 'GET',
      url: 'depositos',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(DepositosActions.depositosSuccess(response.data));
  } catch (err) {
    yield put(DepositosActions.depositosFailure());
    console.tron.log(err.message);
  }
}

function* inserirProdutos(action) {
  try {
    const {
      deposito_id,
      tipo_produto,
      codigo_barra,
      categoria,
      subcategoria,
      preco_produto,
      valor_unidade,
      unidade_medida,
    } = action.payload.data;

    const token = yield AsyncStorage.getItem('@User_token');

    const response = yield call(api.request, {
      method: 'POST',
      url: 'produtos',
      data: {
        deposito_id,
        tipo_produto,
        codigo_barra,
        categoria,
        subcategoria,
        preco_produto,
        valor_unidade,
        unidade_medida,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(ProdutosActions.insertProdutosSuccess(response));

    navigate('Validacao');
  } catch (err) {
    yield put(ProdutosActions.insertProdutosFailure());
    console.tron.log(err.message);
  }
}

function* users(action) {
  try {
    const token = yield AsyncStorage.getItem('@User_token');
    const storage_email = yield AsyncStorage.getItem('@User_email');

    if (storage_email) {
      const response = yield call(api.request, {
        method: 'GET',
        url: `getUser/${storage_email}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      yield put(UsersActions.loadUsersSuccess(response.data));
    } else {
      const {email} = action.payload;
      const response = yield call(api.request, {
        method: 'GET',
        url: `getUser/${email}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      yield put(UsersActions.loadUsersSuccess(response.data));
    }
  } catch (err) {
    yield put(UsersActions.loadUsersFailure());
  }
}

function* insertDepoitos(action) {
  try {
    const {
      deposito_nome,
      deposito_cep,
      deposito_bairro,
      deposito_municipio,
      deposito_uf_estado,
    } = action.payload.data;

    const token = yield AsyncStorage.getItem('@User_token');

    const response = yield call(api.request, {
      method: 'POST',
      url: 'depositos',
      data: {
        deposito_nome,
        deposito_cep,
        deposito_bairro,
        deposito_municipio,
        deposito_uf_estado,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(DepositosActions.insertDepositosSuccess(response.data));

    navigate('ValidaDeposito');
  } catch (err) {
    yield put(DepositosActions.insertDepositosFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('LOAD_USERS_REQUEST', users),
    takeLatest('DEPOSITO_REQUEST', depositos),
    takeLatest('INSERT_DEPOSITO_REQUEST', insertDepoitos),
    takeLatest('INSERT_PRODUTO_REQUEST', inserirProdutos),
  ]);
}
