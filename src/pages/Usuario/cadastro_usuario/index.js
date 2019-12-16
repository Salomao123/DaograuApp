import React, {useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import {Input, Title, Subtitle} from '../../../styles/Components';

import styles from './styles';

import HeaderMenu from '../../../components/HeaderMenu';
import SwitchCargo from '../../../components/SwitchCategorias/SwitchCargos';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '../../../store/actions/users';

function CadastroUsuario({loading, insertUsersRequest, cargo}) {
  const [nome_completo, setNomeCompleto] = useState();
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [confirmarSenha, setConfirmarSenha] = useState(null);

  function cadastrarVendedor() {
    const data = {
      nome_completo,
      email,
      senha,
      cargo_id: cargo.id,
    };

    insertUsersRequest(data);
  }

  return (
    <View style={styles.container}>
      <HeaderMenu goback={'Dashboard'} titulo={'Cadastra Usuário'} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title1}>Informações do usuário</Text>

          <View style={styles.item1}>
            <Input
              placeholder="Nome completo"
              value={nome_completo}
              onChangeText={valor => setNomeCompleto(valor)}
            />
            <Input
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="E-mail"
              value={email}
              onChangeText={valor => setEmail(valor)}
            />
            <Input
              autoCapitalize="none"
              secureTextEntry
              placeholder="Senha"
              value={senha}
              onChangeText={valor => setSenha(valor)}
            />

            <Input
              autoCapitalize="none"
              secureTextEntry
              placeholder="Confirmar senha"
              value={confirmarSenha}
              onChangeText={valor => setConfirmarSenha(valor)}
            />

            <Title>Cargo</Title>

            <Subtitle>Seleciona o cargo do usuário</Subtitle>

            <SwitchCargo />
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
  cargo: state.cargo.cargoSelecionado,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CadastroUsuario);
