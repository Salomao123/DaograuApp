import React from 'react';

import {View} from 'react-native';

import styles from './styles';

import ThumbSaldo from '../ThumbSaldo';
import BodyMenu from '../BodyMenu';

function Header({navigation}) {
  return (
    <View style={styles.content}>
      <ThumbSaldo />
      <BodyMenu navigation={navigation} />
    </View>
  );
}

export default Header;
