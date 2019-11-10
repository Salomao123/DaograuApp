import React from 'react';

import {View, Text, SafeAreaView} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

function Header({navigation}) {
  async function logout() {
    await AsyncStorage.removeItem('@User_token');
    navigation.navigate('Login');
  }

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Página principal</Text>

      <View>
        <Text onPress={() => logout()} style={styles.logout}>
          sair
        </Text>
      </View>
    </View>
  );
}

export default Header;
