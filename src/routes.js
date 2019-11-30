import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//screens
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Depositos from './pages/Deposito';
import ListarProdutos from './pages/produtos/listar_produtos';
import UserScreen from './pages/UserScreen';
import CadastrarDeposito from './pages/Deposito/cadastrar_deposito';
import CadastroUsuario from './pages/Usuario/cadastro_usuario';
import Vendas from './pages/Vendas';

//validacao
import Validacao from './pages/Validacao';
import ValidaDeposito from './pages/Validacao/valida_deposito';

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
        UserScreen: {screen: UserScreen},
        Validacao: {screen: Validacao},
        CadastrarDeposito: {screen: CadastrarDeposito},
        ValidaDeposito: {screen: ValidaDeposito},
        CadastroUsuario: {screen: CadastroUsuario},
        Vendas: {screen: Vendas},
      },
      {
        initialRouteName: userLogged ? 'Dashboard' : 'Login',
        //initialRouteName: 'Dashboard',
      },
    ),
  );

export default AppNavigator;
