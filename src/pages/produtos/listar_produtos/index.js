import React from 'react';

import {View, Text} from 'react-native';

import styles from './styles';

import Header from '../../../components/Header';

//components
import SearchProdutos from '../../../components/Search/search_produtos';
import ItemProdutos from './item_produtos';

function ListarProdutos() {
  return (
    <View style={styles.container}>
      <Header title={'Produtos'} goback={'Dashboard'} />
      <SearchProdutos />
      <ItemProdutos />
    </View>
  );
}

export default ListarProdutos;
