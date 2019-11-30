import React, {useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as DepositosActions from '../../../store/actions/depositos';

import HeaderMenu from '../../../components/HeaderMenu';

function CadastrarDeposito({loading, insertDepositosRequest}) {
  const [deposito_nome, setDepositoNome] = useState('Última milha');
  const [deposito_cep, setDepositoCep] = useState(68926024);
  const [deposito_bairro, setDepositoBairro] = useState('Novo Horizonte');
  const [deposito_municipio, setDepositoMunicipio] = useState('Santana');
  const [deposito_uf_estado, setUfEstado] = useState('AP');

  function insertDepositos() {
    const data = {
      deposito_nome,
      deposito_cep,
      deposito_bairro,
      deposito_municipio,
      deposito_uf_estado,
    };

    insertDepositosRequest(data);
  }

  return (
    <View style={styles.container}>
      <HeaderMenu titulo={'Cadastrar depósitos'} goback={'Dashboard'} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title1}>Informações do depósitos</Text>

          <View style={styles.item1}>
            <TextInput
              placeholderTextColor={'#ffffff'}
              style={styles.input}
              placeholder="Nome do deposito"
              value={deposito_nome}
              onChangeText={valor => setDepositoNome(valor)}
            />
            <TextInput
              placeholderTextColor={'#ffffff'}
              style={styles.input}
              placeholder="CEP"
              value={deposito_cep}
              onChangeText={valor => setDepositoCep(valor)}
            />
            <TextInput
              placeholderTextColor={'#ffffff'}
              style={styles.input}
              placeholder="Bairro"
              value={deposito_bairro}
              onChangeText={valor => setDepositoBairro(valor)}
            />

            <TextInput
              placeholderTextColor={'#ffffff'}
              style={styles.input}
              placeholder="Município"
              value={deposito_municipio}
              onChangeText={valor => setDepositoMunicipio(valor)}
            />

            <TextInput
              placeholderTextColor={'#ffffff'}
              style={styles.input}
              placeholder="UF"
              value={deposito_uf_estado}
              onChangeText={valor => setUfEstado(valor)}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => insertDepositos()}
        style={styles.btnDefault}>
        {loading ? (
          <ActivityIndicator size={24} color="#fff" />
        ) : (
          <Text style={styles.txtDefault}>Cadastrar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  loading: state.depositos.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DepositosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CadastrarDeposito);
