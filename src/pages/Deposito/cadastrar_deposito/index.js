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

import {Input, Title, Subtitle, Container} from '../../../styles/Components';

function CadastrarDeposito({loading, insertDepositosRequest}) {
  const [deposito_nome, setDepositoNome] = useState(null);
  const [deposito_cep, setDepositoCep] = useState(0);
  const [deposito_bairro, setDepositoBairro] = useState(null);
  const [deposito_municipio, setDepositoMunicipio] = useState(null);
  const [deposito_uf_estado, setUfEstado] = useState(null);

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
            <Input
              placeholder="Nome do deposito"
              value={deposito_nome}
              onChangeText={valor => setDepositoNome(valor)}
            />
            <Input
              keyboardType="number-pad"
              placeholder="CEP"
              value={deposito_cep}
              onChangeText={valor => setDepositoCep(valor)}
            />
            <Input
              placeholder="Bairro"
              value={deposito_bairro}
              onChangeText={valor => setDepositoBairro(valor)}
            />

            <Input
              placeholder="Município"
              value={deposito_municipio}
              onChangeText={valor => setDepositoMunicipio(valor)}
            />

            <Input
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
