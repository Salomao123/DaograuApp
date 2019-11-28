import React from 'react';

import {View} from 'react-native';

import {SearchInput, Container} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchProdutos() {
  return (
    <>
      <Container>
        <Icon name="search" color="#fff" size={24} />
        <SearchInput placeholder="Pesquisar" placeholderTextColor="#fff" />
      </Container>
    </>
  );
}

export default SearchProdutos;
