import React, {useState, useEffect} from 'react';

import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';

import HeaderMenu from '../../../components/HeaderMenu';
import ListaDepositos from '../../../pages/Deposito/lista_depositos';

import StepIndicator from 'react-native-step-indicator';

import Icon from 'react-native-vector-icons/FontAwesome';

//arquitetura flux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Title,
  Subtitle,
  Container,
  Input,
  Select,
  Link,
  Small,
  SubContainer,
  TitleDetalhes,
  Excluir,
} from './styled';

const labels = ['Passo 1', 'Passo 2', 'Passo 3', 'Passo 4', 'Passo 5'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0F1E25',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0F1E25',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0F1E25',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0F1E25',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#0F1E25',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#0F1E25',
};

function RegistrarVenda({depositoSelecionado, users}) {
  const [preco, setPreco] = useState(0);
  const [qntProduto, setQtdProduto] = useState([]);

  useEffect(() => {
    setCurrentPosition(0);
  }, []);

  const [currentPosition, setCurrentPosition] = useState();

  function onPageChange(position) {
    setCurrentPosition(position);
  }

  function handleProdutos() {
    return alert('ainda não implementado');
  }

  function calculaPreco(produto) {
    try {
      setPreco(preco + produto.preco_produto);
      setQtdProduto([...qntProduto, produto]);

      console.tron.log(qntProduto);
    } catch (err) {
      console.tron.log(err.message);
    }
  }

  function handleForms(currentPosition) {
    switch (currentPosition) {
      case 0:
        return (
          <Container>
            <Title>Dados do registro</Title>
            <Subtitle>Insira informações a venda dos produtos</Subtitle>

            <Input placeholder="Nome" />
            <Input placeholder="C.N.P.J" />
            <Input placeholder="Fone" />
            <Input placeholder="E-mail" />
            <Input placeholder="CEP" />
          </Container>
        );

      case 1:
        return (
          <Container>
            <Title>Depósito dos produtos</Title>
            <Subtitle>Deposito que irá ser retirado o produto.</Subtitle>

            <ListaDepositos selecionar={true} />
          </Container>
        );
      case 2:
        return (
          <Container>
            <Title>Produtos</Title>
            {depositoSelecionado.deposito_nome ? (
              <>
                <Subtitle>
                  Depósito {depositoSelecionado.deposito_nome}
                </Subtitle>

                {depositoSelecionado.produto.length != null &&
                depositoSelecionado.produto.length != 0 ? (
                  <>
                    <FlatList
                      data={depositoSelecionado.produto}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => (
                        <>
                          <TouchableOpacity
                            onPress={() => calculaPreco(item)}
                            style={styles.card}>
                            <View>
                              <Text style={styles.textDefault}>
                                {item.tipo_produto}
                              </Text>
                              <Text style={styles.textDefault}>
                                {item.categoria}
                              </Text>
                            </View>
                            <Text>R$ {item.preco_produto}</Text>
                          </TouchableOpacity>
                        </>
                      )}
                    />
                    <View style={styles.preco_container}>
                      <View style={styles.row}>
                        <Icon
                          name="cart-plus"
                          size={24}
                          color="#fff"
                          style={{marginHorizontal: 10}}
                        />
                        <Text style={styles.preco_text}>
                          {qntProduto.length}
                        </Text>
                      </View>
                      <Text style={styles.preco_text}>R$ {preco}</Text>
                    </View>
                  </>
                ) : (
                  <Text style={styles.warnning}>
                    Nunhum produto indentificado no Depósito
                  </Text>
                )}
              </>
            ) : (
              <>
                <Title>Nenhum depósito selecionado</Title>
              </>
            )}
          </Container>
        );
      case 3:
        return (
          <Container>
            <Title>Informações do Cliente</Title>
          </Container>
        );
      case 4:
        return (
          <Container>
            <Title>Detalhes</Title>

            <Image />
          </Container>
        );
    }
  }
  return (
    <View style={styles.container}>
      <HeaderMenu titulo="Registrar Venda" goback={'Dashboard'} />
      <View
        style={{
          flex: 1,
          marginVertical: 20,
        }}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          onPress={position => onPageChange(position)}
          labels={labels}
        />

        {handleForms(currentPosition)}
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  depositoSelecionado: state.depositos.depositoSelecionado,
  users: state.users.users,
});

export default connect(mapStateToProps)(RegistrarVenda);
