import React, {useEffect} from 'react';
import Header from '../../components/Header';

import {connect} from 'react-redux';
import * as UsersActions from '../../store/actions/users';
import {bindActionCreators} from 'redux';

import {ScrollView} from 'react-native';

import styles from './styles';

//screens
import Vendas from '../Vendas';
import Atalhos from '../../components/Atalhos';

function Dashboard({navigation, email, loadUsersRequest}) {
  useEffect(() => {
    handlerUser();
  }, []);

  function handlerUser() {
    return loadUsersRequest(email);
  }
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} logo={true} />
      <Vendas />
      <Atalhos />
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  email: state.Login.email,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
