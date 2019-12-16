import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

import {connect} from 'react-redux';

import {navigate} from '../../../services/navigation';

import HeaderMenu from '../../../components/HeaderMenu';

import {Title, Subtitle, Container} from '../../../styles/Components';

function ValidaCargo({user, cargo}) {
  return (
    <View style={styles.container}>
      <HeaderMenu goback={'Dashboard'} titulo={'Cadastro Realizado!'} />

      <View style={styles.content}>
        <View>
          <Title>Dados do cargo</Title>
        </View>

        <View style={styles.item1}>
          <Text style={styles.description}>Cargo</Text>
          <Text style={styles.title}>{cargo.nome_cargo}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate('CadastrarDeposito')}
        style={styles.btnDefault}>
        <Text style={styles.txtDefault}>COMPARTILHAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.users.insertUsers,
  cargo: state.cargo.cargo,
});

export default connect(mapStateToProps)(ValidaCargo);
