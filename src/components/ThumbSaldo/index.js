import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

function ThumbSaldo() {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.textTitle}>Saldo em conta</Text>
        <View style={styles.valorContainer}>
          <Text style={styles.valor1}>R$</Text>
          <Text style={styles.valor2}>163</Text>
          <Text style={styles.valor3}>,68</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => alert('ainda nao implementado!')}
          style={styles.buttonMenu}>
          <Text style={styles.textButtom}>Extrato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMenu}>
          <Text style={styles.textButtom}>Depósitos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMenu}>
          <Text style={styles.textButtom}>Produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ThumbSaldo;
