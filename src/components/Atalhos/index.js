import React from 'react';

import {Title, Subtitle, Container} from '../../styles/Components';
import {View} from 'react-native';

import Cargos from '../../pages/Cargos';

function Atalhos() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: 'center',
      }}>
      <Container>
        <Title>Acesso rápido</Title>
        <Subtitle>Alguns atalhos para melhorar sua navegação</Subtitle>
      </Container>
      <Cargos atalho={true} />
    </View>
  );
}

export default Atalhos;
