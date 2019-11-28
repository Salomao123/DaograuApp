import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import {navigate} from '../../services/navigation';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function BodyMenu({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigation.navigate('CadastroProdutos')}>
            <Icon name="inbox" size={30} color="#30b2e2" />

            <Text style={styles.legend}>Cadastrar Produto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.items}>
            <Icon name="user" size={30} color="#30b2e2" />
            <Text style={styles.legend}>Cadastrar Vendendor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.items}>
            <Icon name="dollar" size={30} color="#30b2e2" />
            <Text style={styles.legend}>Orçamento</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.base}>
        <View style={styles.baseContainer}>
          <Icon name="arrow-down" size={24} color={'#30b2e2'} />
        </View>
      </View>
    </View>
  );
}

export default BodyMenu;
