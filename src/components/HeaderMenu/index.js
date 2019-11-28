import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import {navigate} from '../../services/navigation';

function HeaderMenu({titulo = 'Daograu', goback}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => navigate(goback)}>
        <Icon name="long-arrow-left" color="#30b2e2" size={24} />
      </TouchableOpacity>

      <Text style={styles.title}>{titulo}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigate('Dashboard')}>
        <Icon name="home" color="#30b2e2" size={24} />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderMenu;
