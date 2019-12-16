import React, {useState} from 'react';

import {Picker} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CargoActions from '../../../store/actions/cargo';

import styles from './styles';

function SwitchCargos({cargos, loadCargoSelecionado}) {
  const [cargo, setCargo] = useState(0);

  function handlerCategoria(itemValue, itemIndex) {
    setCargo(itemValue);
    cargos.map(item =>
      item.id === itemValue ? loadCargoSelecionado(item) : null,
    );
  }

  return (
    <>
      <Picker
        selectedValue={cargo}
        style={styles.switch}
        onValueChange={(itemValue, itemIndex) =>
          handlerCategoria(itemValue, itemIndex)
        }>
        {cargos.map(item => (
          <Picker.Item key={item.id} label={item.nome_cargo} value={item.id} />
        ))}
      </Picker>
    </>
  );
}

const mapStateToProps = state => ({
  cargos: state.cargo.cargo,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CargoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SwitchCargos);
