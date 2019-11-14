import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

//formularios
import CadastroProdutos from './pages/produtos/cadastro_produtos';

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
        CadastroProdutos: {screen: CadastroProdutos},
      },
      {
        initialRouteName: userLogged ? 'Dashboard' : 'Login',
      },
    ),
  );

export default AppNavigator;
