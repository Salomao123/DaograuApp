import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import {navigate} from '../../services/navigation';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function BodyMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigate('CadastroProdutos')}>
            <Icon name="inbox" size={30} color="#30b2e2" />

            <Text style={styles.legend}>Cadastrar Produto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigate('CadastroUsuario')}>
            <Icon name="user" size={30} color="#30b2e2" />
            <Text style={styles.legend}>Cadastrar Usuario</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigate('CadastrarDeposito')}>
            <Icon name="home" size={30} color="#30b2e2" />
            <Text style={styles.legend}>Cadastrar Depósito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default BodyMenu;
