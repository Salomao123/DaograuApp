import {combineReducers} from 'redux';

import Login from './login';
import Vendas from './vendas';
import depositos from './depositos';
import produtos from './produtos';
import users from './users';
import categoria from './categoria';
import cargo from './cargo';

export default combineReducers({
  Login,
  Vendas,
  depositos,
  produtos,
  users,
  categoria,
  cargo,
});
