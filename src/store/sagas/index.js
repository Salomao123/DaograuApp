import {all, takeLatest, call, put} from 'redux-saga/effects';

import api from '../../services/api';

import {navigate} from '../../services/navigation';

import AsyncStorage from '@react-native-community/async-storage';

//actions
import * as LoginActions from '../actions/login';
import * as DepositosActions from '../actions/depositos';

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

    yield AsyncStorage.setItem('@User_token', response.data.token);

    yield put(LoginActions.loginSuccess(email, password));

    navigate('Dashboard');
  } catch (err) {
    yield put(LoginActions.loginFailure());
    console.tron.log(err.message);
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

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('DEPOSITO_REQUEST', depositos),
  ]);
}
