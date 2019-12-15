import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

import {navigate} from '../../../services/navigation';

import AsyncStorage from '@react-native-community/async-storage';

function ListaOpcoes() {
  async function logout() {
    try {
      await AsyncStorage.removeItem('@User_token');
      navigate('Login');
    } catch (err) {
      console.tron.log(err.message);
    }
  }

  return (
    <View styles={styles.container}>
      <TouchableOpacity
        onPress={() => navigate('CadastroProdutos')}
        style={styles.item}>
        <Text style={styles.default}>Cadastrar produto</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Vendas')} style={styles.item}>
        <Text style={styles.default}>Registrar Venda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.default}>Orçamento</Text>
      </TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.textDisable}>Versão 0.0.67</Text>
      </View>
      <TouchableOpacity onPress={() => logout()} style={styles.item}>
        <Text style={styles.danger}>Sair do App</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListaOpcoes;
