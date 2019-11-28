import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//screens
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Depositos from './pages/Deposito';
import ListarProdutos from './pages/produtos/listar_produtos';

//components
import CodigoBarra from './components/Camera/CodigoBarra';

//formularios
import CadastroProdutos from './pages/produtos/cadastro_produtos';

//loading
import Loading from './pages/loading';

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
        CodigoBarra: {screen: CodigoBarra},
        Depositos: {screen: Depositos},
        ListarProdutos: {screen: ListarProdutos},
        Loading: {screen: Loading},
      },
      {
        initialRouteName: userLogged ? 'Dashboard' : 'Login',
        //initialRouteName: 'Loading',
      },
    ),
  );

export default AppNavigator;
