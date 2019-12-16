import React, {useState} from 'react';

import {
  Title,
  Title2,
  Subtitle,
  Input,
  Container,
  ButtomPrimary,
} from '../../../styles/Components';
import {View, ActivityIndicator} from 'react-native';
import HeaderMenu from '../../../components/HeaderMenu';
import styles from './styles';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CargoActions from '../../../store/actions/cargo';

function CadastrarCargo({insertCargoRequest, loading}) {
  const [nome_cargo, setNomeCargo] = useState();

  function cadastrarCargo() {
    const data = {nome_cargo};
    insertCargoRequest(data);
  }

  return (
    <View style={styles.content}>
      <HeaderMenu titulo="Cadastrar Cargo" goback={'Dashboard'} />

      <Container>
        <Title>Dados cargo</Title>
        <Subtitle>Insira as informações do cargo</Subtitle>
        <Input
          placeholder="Nome do cargo"
          value={nome_cargo}
          onChangeText={valor => setNomeCargo(valor)}
        />

        <ButtomPrimary style={styles.btnNext} onPress={() => cadastrarCargo()}>
          {loading ? (
            <ActivityIndicator size={24} color="#fff" />
          ) : (
            <Title2>Cadastrar cargo</Title2>
          )}
        </ButtomPrimary>
      </Container>
    </View>
  );
}

const mapStateToProps = state => ({
  loading: state.cargo.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CargoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CadastrarCargo);
