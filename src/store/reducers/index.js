import {combineReducers} from 'redux';

import Login from './login';
import Vendas from './vendas';
import depositos from './depositos';
import produtos from './produtos';
import users from './users';

export default combineReducers({
  Login,
  Vendas,
  depositos,
  produtos,
  users,
});
