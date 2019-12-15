import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import {navigate} from '../../services/navigation';

function Vendas() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate('RegistrarVendas')}
        style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>Registrar vendas</Text>
          <Icon
            style={styles.icon}
            name="long-arrow-right"
            size={24}
            color="#30b2e2"
          />
        </View>

        <View style={styles.row_flex_start}>
          <Image
            style={styles.img}
            source={require('../../assets/img/sell.jpeg')}
          />

          <Text style={styles.subtitle}>
            Você poderá registrar suas vendas e acompanhar suas comissões e
            saldo pelo aplicativo.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Vendas;
