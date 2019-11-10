import {all, takeLatest, call, put} from 'redux-saga/effects';

import api from '../../services/api';

import * as LoginActions from '../actions/login';

import {navigate} from '../../services/navigation';

function* login(action) {
  try {
    const {email, password} = action.payload;

    yield call(api.request, {
      method: 'POST',
      url: 'auth',
      data: {
        email,
        password,
      },
    });

    yield put(LoginActions.loginSuccess(email, password));

    navigate('Dashboard');
  } catch (err) {
    yield put(LoginActions.loginFailure());
    console.tron.log(err.message);
  }
}

export default function* rootSaga() {
  return yield all([takeLatest('LOGIN_REQUEST', login)]);
}
