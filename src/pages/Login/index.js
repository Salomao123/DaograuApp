import React, {useState} from 'react';

import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

//arquitetura flux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginActions from '../../store/actions/login';

function Login({loading, error, loginRequest}) {
  const [email, setEmail] = useState('salomaum.batiata@gmail.com');
  const [password, setPassword] = useState('salomaum1234');

  async function entrar() {
    loginRequest(email, password);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo_daograu.png')}
        style={styles.logo}
      />

      {error && <Text style={styles.danger}>Usuário ou senha inváilda</Text>}

      <Text style={styles.subtitle}>
        Você pode usar isso para todos os produtos da Daograu
      </Text>

      <TextInput
        autoCapitalize={'none'}
        keyboardAppearance={'dark'}
        keyboardType={'email-address'}
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={valor => setEmail(valor)}
      />

      <TextInput
        autoCapitalize={'none'}
        keyboardAppearance={'dark'}
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={valor => setPassword(valor)}
      />

      <TouchableOpacity style={styles.btn_entrar} onPress={() => entrar()}>
        {loading ? (
          <ActivityIndicator size={'small'} color="#ffffff" />
        ) : (
          <Text style={styles.btnText}>ACESSAR</Text>
        )}
      </TouchableOpacity>

      <View style={styles.section}>
        <View style={styles.traco} />
        <Text style={styles.textSection}>OU</Text>
        <View style={styles.traco} />
      </View>

      <Text
        style={styles.link}
        onPress={() => alert('Ainda não implementado!')}>
        Esqueci meu usuário ou senha.
      </Text>
    </View>
  );
}

const mapStateToProps = state => ({
  error: state.Login.error,
  loading: state.Login.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
