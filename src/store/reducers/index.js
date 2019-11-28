import {combineReducers} from 'redux';

import Login from './login';
import Vendas from './vendas';
import depositos from './depositos';

export default combineReducers({
  Login,
  Vendas,
  depositos,
});
