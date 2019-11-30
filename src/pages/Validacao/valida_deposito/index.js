import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

import {connect} from 'react-redux';

import {navigate} from '../../../services/navigation';

import HeaderMenu from '../../../components/HeaderMenu';

function ValidaDeposito({depositos}) {
  return (
    <View style={styles.container}>
      <HeaderMenu goback={'Dashboard'} titulo={'Cadastro Realizado!'} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title1}>Dados do cadastro</Text>

          <View style={styles.item1}>
            <Text style={styles.description}>Nome depósito</Text>
            <Text style={styles.title}>{depositos.deposito_nome}</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.description}>Localização</Text>
            <Text style={styles.title}>
              {depositos.deposito_municipio}, {depositos.deposito_bairro},{' '}
              {depositos.deposito_cep}, {depositos.deposito_uf_estado}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate('CadastrarDeposito')}
        style={styles.btnDefault}>
        <Text style={styles.txtDefault}>Cadastrar novo depósitos</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  depositos: state.depositos.inserirDepositos,
});

export default connect(mapStateToProps)(ValidaDeposito);
