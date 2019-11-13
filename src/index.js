import './config/ReactotronConfig';

import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import createNavigator from './routes';

import {Provider} from 'react-redux';
import store from './store';

import {setNavigator} from './services/navigation';

function App() {
  const [userChecked, setUserChecked] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    validateAuth();
  });

  async function validateAuth() {
    const token_user = await AsyncStorage.getItem('@User_token');

    setUserChecked(true);
    setUserLogged(!!token_user);
  }

  if (!userChecked) return null;

  const Routes = createNavigator(userLogged);

  return (
    <Provider store={store}>
      <Routes ref={setNavigator} />
    </Provider>
  );
}

export default App;
