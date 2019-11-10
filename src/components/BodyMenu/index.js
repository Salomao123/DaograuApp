import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function BodyMenu() {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={styles.items}
        onPress={() => alert('ainda não implementado !')}>
        <Icon name="inbox" size={30} color="#707070" />

        <Text style={styles.legend}>Registrar Venda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.items}>
        <Icon name="edit" size={30} color="#707070" />
        <Text style={styles.legend}>Realizar Orçamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.items}>
        <Icon name="dollar" size={30} color="#707070" />
        <Text style={styles.legend}>Lucros</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.items}>
        <Icon name="products" size={30} color="#707070" />
        <Text style={styles.legend}>Cadastrar Produtos</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BodyMenu;
