import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const AppNavigator = createAppContainer(
  createSwitchNavigator({
    Login: {
      screen: Login,
    },
    Dashboard: {
      screen: Dashboard,
    },
  }),
);

export default AppNavigator;
