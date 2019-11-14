import './config/ReactotronConfig';

import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {Provider} from 'react-redux';
import store from './store';

import {setNavigator} from './services/navigation';

import createNavigator from './routes';

class App extends React.Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const token_user = await AsyncStorage.getItem('@User_token');
    this.setState({
      userChecked: true,
      userLogged: !!token_user,
    });
  }

  render() {
    const {userChecked, userLogged} = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}

export default App;
