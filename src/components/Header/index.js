import React from 'react';

import {View, Text, SafeAreaView} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import {navigate} from '../../services/navigation';

function Header({title = 'Página Principal', goback, subtitle}) {
  async function logout() {
    try {
      await AsyncStorage.removeItem('@User_token');
      navigate('Login');
    } catch (err) {
      console.tron.log('aconteceu alguma cois de errado');
    }
  }

  return (
    <View style={styles.content}>
      <View>
        <View style={styles.headerContainerTitle}>
          {goback && (
            <Icon
              style={styles.icon}
              onPress={() => navigate('Dashboard')}
              name="arrow-left"
              size={24}
              color={'#707070'}
            />
          )}

          <Text style={styles.text}>{title}</Text>
        </View>
        {subtitle && <Text>{subtitle}</Text>}
      </View>

      <View>
        <Text onPress={() => logout()} style={styles.logout}>
          sair
        </Text>
      </View>
    </View>
  );
}

export default Header;
