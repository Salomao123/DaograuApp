import React, {useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

import HeaderMenu from '../../../components/HeaderMenu';

import {connect} from 'react-redux';

function CadastroUsuario({loading, insertVendedoresRequest}) {
  const [nome_completo, setNomeCompleto] = useState(
    'Enzo Gabriel do Nascimento Batista',
  );
  const [email, setEmail] = useState('enzo.gabriel@gmail.com');
  const [senha, setSenha] = useState('enzo123');
  const [confirmarSenha, setConfirmarSenha] = useState('enzo123');
  const [cargo_usuario, setCargoUsuario] = useState('Vendedor');

  function cadastrarVendedor() {
    const data = {
      nome_completo,
      email,
      senha,
    };

    insertVendedoresRequest(data);
  }

  return (
    <View style={styles.container}>
      <HeaderMenu goback={'Dashboard'} titulo={'Cadastra Usuário'} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title1}>Informações do usuário</Text>

          <View style={styles.item1}>
            <TextInput
              placeholderTextColor={'#707070'}
              style={styles.input}
              placeholder="Nome completo"
              value={nome_completo}
              onChangeText={valor => setNomeCompleto(valor)}
            />
            <TextInput
              placeholderTextColor={'#707070'}
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={valor => setEmail(valor)}
            />
            <TextInput
              secureTextEntry
              placeholderTextColor={'#707070'}
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={valor => setSenha(valor)}
            />

            <TextInput
              secureTextEntry
              placeholderTextColor={'#707070'}
              style={styles.input}
              placeholder="Confirmar senha"
              value={confirmarSenha}
              onChangeText={valor => setConfirmarSenha(valor)}
            />

            <TextInput
              placeholderTextColor={'#707070'}
              style={styles.input}
              placeholder="Cargo usuário"
              value={cargo_usuario}
              onChangeText={valor => setCargoUsuario(valor)}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => cadastrarVendedor()}
        style={styles.btnDefault}>
        {loading ? (
          <ActivityIndicator color="#fff" size={24} />
        ) : (
          <Text style={styles.txtDefault}>Cadastrar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  loading: state.users.loading,
});

export default connect(mapStateToProps)(CadastroUsuario);
