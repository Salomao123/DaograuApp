import axios from 'axios';

//servidor teste
const api = axios.create({
  //baseURL: 'http://192.168.0.108:3333/', // ==> service home
  // baseURL: 'http://192.168.1.121:3333', //==> ws indra
  //baseURL: 'http://172.18.55.118:3333', // ws faculdade
  baseURL: 'http://192.168.43.104:3333', // ws computador
});

export default api;
