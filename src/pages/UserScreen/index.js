import React from 'react';

import {View, Text} from 'react-native';

import styles from './styles';

import HeaderMenu from '../../components/HeaderMenu';

import Icon from 'react-native-vector-icons/FontAwesome';

import ListaOpcoes from './lista_opcoes';

function UserScreen() {
  return (
    <View style={styles.container}>
      <HeaderMenu user={true} goback={'Dashboard'} />

      <View style={styles.iconContainer}>
        <View style={styles.itemIcon}>
          <Icon name="user" color="#fff" size={20} />
        </View>
      </View>

      <ListaOpcoes />
    </View>
  );
}

export default UserScreen;
