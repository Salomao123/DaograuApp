import React from 'react';
import {Container, TextoPrincipal} from './styled';
import Header from '../../components/Header';

import ListaDepositos from './lista_depositos';

class Deposito extends React.Component {
  render() {
    return (
      <>
        <Header title={'Depósitos'} goback={'Dashboard'} />
        <Container>
          <TextoPrincipal>
            Acompanhe os depósitos da empresa e seus respectivos produtos
          </TextoPrincipal>

          {/*aqui entra a lista depositos*/}
          <ListaDepositos />
        </Container>
      </>
    );
  }
}

export default Deposito;
