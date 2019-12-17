import React, {useState, useEffect} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

import {connect} from 'react-redux';

import {navigate} from '../../../services/navigation';

import HeaderMenu from '../../../components/HeaderMenu';

import {Title, Subtitle, Container} from '../../../styles/Components';

import AsyncStorage from '@react-native-community/async-storage';

function ValidaVenda({user, cargo}) {
  const [registroVenda, setRegistroVenda] = useState();

  useEffect(() => {
    handlerVenda();
  }, []);

  async function handlerVenda() {
    const response = await AsyncStorage.getItem('Registro_venda');

    const data = await JSON.parse(response);
    await setRegistroVenda(data);
  }

  return (
    <View style={styles.container}>
      <HeaderMenu goback={'Dashboard'} titulo={'Cadastro Realizado!'} />

      <View style={styles.content}>
        <View>
          <Image
            source={require('../../../assets/logo_daograu.png')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />

          <Title>{user.nome_completo}</Title>

          {user.cargo_id === 2 ? (
            <Subtitle>Administrador</Subtitle>
          ) : (
            <Subtitle>Vendedor</Subtitle>
          )}
        </View>
        <View style={styles.item1}>
          <Text style={styles.description}>Nome cliente</Text>
          <Text style={styles.title}>{registroVenda.nome}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.description}>CNPJ</Text>
          <Text style={styles.title}>{registroVenda.cnpj}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.description}>E-mail</Text>
          <Text style={styles.title}>{registroVenda.email}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.description}>Fone</Text>
          <Text style={styles.title}>{registroVenda.fone}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.description}>CEP</Text>
          <Text style={styles.title}>{registroVenda.cep}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate('CadastrarDeposito')}
        style={styles.btnDefault}>
        <Text style={styles.txtDefault}>COMPARTILHAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.users.users,
});

export default connect(mapStateToProps)(ValidaVenda);
