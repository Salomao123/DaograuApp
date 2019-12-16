import React from 'react';

import {View, TouchableOpacity, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import {navigate} from '../../services/navigation';

function Cargos({atalho}) {
  return (
    <>
      {atalho && (
        <TouchableOpacity
          onPress={() => navigate('CadastrarCargo')}
          style={styles.card}>
          <View style={styles.column_flex_start}>
            <Text style={styles.title}>Gerenciar cargos</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

export default Cargos;
