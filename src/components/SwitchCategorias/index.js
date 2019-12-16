import React, {useState, useEffect} from 'react';

import {Text, FlatList, Picker} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as CategoriaActions from '../../store/actions/categorias';

import styles from './styles';

function SwitchCategorias({
  loading,
  loadCategoriaRequest,
  categorias,
  loadCategoriaSelecionada,
}) {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    loadCategoriaRequest();
  }, []);

  function handlerCategoria(itemValue, itemIndex) {
    setLanguage(itemValue);
    categorias.map(item =>
      item.id === itemValue ? loadCategoriaSelecionada(item) : null,
    );
  }

  return (
    <>
      <Picker
        selectedValue={language}
        style={styles.switch}
        onValueChange={(itemValue, itemIndex) =>
          handlerCategoria(itemValue, itemIndex)
        }>
        {categorias.map(item => (
          <Picker.Item key={item.id} label={item.descricao} value={item.id} />
        ))}
      </Picker>
    </>
  );
}

const mapStateToProps = state => ({
  loading: state.categoria.loading,
  categorias: state.categoria.categorias,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoriaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SwitchCategorias);
