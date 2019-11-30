import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {navigate} from '../../services/navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';

function UserContainer({info, users}) {
  return (
    <>
      {info ? (
        <View style={styles.container}>
          <View style={styles.userContainer}>
            <Icon name="user" size={24} />
          </View>
          <Text style={styles.textUser}>{users.nome_completo}</Text>
          <Text style={styles.textUser}>Administrador</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.userContainer}
          onPress={() => navigate('UserScreen')}>
          <Icon name="user" size={24} />
        </TouchableOpacity>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  users: state.users.users,
});

export default connect(mapStateToProps)(UserContainer);
