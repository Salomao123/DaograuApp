import React from 'react';

import ThumbSaldo from '../../components/ThumbSaldo';
import BodyMenu from '../../components/BodyMenu';
import Header from '../../components/Header';

import {View} from 'react-native';

import styles from './styles';

function Dashboard({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} logo={true} />
    </View>
  );
}

export default Dashboard;
