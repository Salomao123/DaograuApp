import './config/ReactotronConfig';

import React, {Component} from 'react';

import Routes from './routes';

import {Provider} from 'react-redux';
import store from './store';

import {setNavigator} from './services/navigation';

export default class src extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}
