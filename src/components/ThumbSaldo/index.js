import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import {navigate} from '../../services/navigation';

import styles from './styles';

function ThumbSaldo() {
  return (
    <View style={styles.container}>
      <View styles={styles.valor}>
        <Text style={styles.textTitle}>Saldo em conta</Text>
        <View style={styles.containerValor}>
          <Text style={styles.textValor}>R$ 3.892,43</Text>
          <View style={styles.userContainer}>
            <Text
              onPress={() => alert('ainda não implementado')}
              style={styles.textUser}>
              SB
            </Text>
          </View>
        </View>
        <Text style={styles.textSubtitle}>Atualizado neste momento</Text>
      </View>
    </View>
  );
}

export default ThumbSaldo;
