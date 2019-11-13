import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const AppNavigator = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login: {
          screen: Login,
        },
        Dashboard: {
          screen: Dashboard,
        },
      },
      {
        initialRouteName: userLogged ? 'Dashboard' : 'Login',
      },
    ),
  );

export default AppNavigator;
