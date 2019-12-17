import React, {useState, useEffect} from 'react';

import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

import HeaderMenu from '../../../components/HeaderMenu';
import ListaDepositos from '../../../pages/Deposito/lista_depositos';

import StepIndicator from 'react-native-step-indicator';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

import {navigate} from '../../../services/navigation';

//arquitetura flux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Title,
  Title2,
  Subtitle,
  Container,
  Input,
  Select,
  Link,
  Small,
  SubContainer,
  TitleDetalhes,
  Excluir,
  ButtomPrimary,
} from '../../../styles/Components';

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
  const [nome, setNome] = useState(null);
  const [cnpj, setCnpj] = useState(null);
  const [fone, setFone] = useState(null);
  const [email, setEmail] = useState(null);
  const [cep, setCep] = useState(null);

  const [preco, setPreco] = useState(0);
  const [qntProduto, setQtdProduto] = useState([]);

  useEffect(() => {
    setCurrentPosition(0);
  }, []);

  const [currentPosition, setCurrentPosition] = useState();

  function onPageChange(position) {
    setCurrentPosition(position);
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

  function limpar() {
    setQtdProduto([]);
    setPreco(0);
  }

  function removeItemLista(id) {
    qntProduto.splice(0, id);

    console.tron.log(...qntProduto);
  }

  async function realizarVenda() {
    try {
      const data = {
        nome,
        cnpj,
        fone,
        email,
        cep,
        preco,
      };

      await AsyncStorage.setItem('Registro_venda', JSON.stringify(data));

      navigate('ValidaVenda');
    } catch (err) {
      console.tron.log(err.message);
    }
  }

  function handleForms(currentPosition) {
    switch (currentPosition) {
      case 0:
        return (
          <Container>
            <Title>Dados do Cliente</Title>
            <Subtitle>Preencha os campos referente ao Cliente</Subtitle>

            <Input
              placeholder="Nome"
              value={nome}
              onChangeText={valor => setNome(valor)}
            />

            <Input
              keyboardType="number-pad"
              placeholder="C.N.P.J"
              value={cnpj}
              onChangeText={valor => setCnpj(valor)}
            />
            <Input
              keyboardType="number-pad"
              placeholder="Fone"
              value={fone}
              onChangeText={valor => setFone(valor)}
            />
            <Input
              autoCapitalize="none"
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={valor => setEmail(valor)}
            />

            <Input
              keyboardType="number-pad"
              placeholder="CEP"
              value={cep}
              onChangeText={valor => setCep(valor)}
            />
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
                          color="#000"
                          style={{marginHorizontal: 10}}
                        />
                        <Text style={styles.preco_text}>
                          {qntProduto.length}
                        </Text>
                      </View>
                      <Text style={styles.preco_text}>R$ {preco}</Text>

                      {qntProduto.length > 0 && (
                        <TouchableOpacity onPress={() => limpar()}>
                          <Excluir>Limpar</Excluir>
                        </TouchableOpacity>
                      )}
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
                <Text style={styles.warnning}>Nenhum depósito selecionado</Text>
              </>
            )}
          </Container>
        );
      case 3:
        return (
          <Container>
            <Title>Conferir mercadoria</Title>
            <Subtitle>Certifique-se se as mercadorias estão corretas</Subtitle>

            {qntProduto.length === 0 && (
              <Text style={styles.warnning}>Selecionar os produtos</Text>
            )}

            <FlatList
              data={qntProduto}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.card}>
                  <View>
                    <Text style={styles.textDefault}>{item.tipo_produto}</Text>
                    <Text style={styles.textDefault}>{item.categoria}</Text>
                  </View>
                  <Text>R$ {item.preco_produto}</Text>

                  <TouchableOpacity onPress={() => removeItemLista(item.id)}>
                    <Icon name="times" size={24} color="#707070" />
                  </TouchableOpacity>
                </View>
              )}
            />
          </Container>
        );
      case 4:
        return (
          <Container>
            <Title>Detalhes</Title>
            <Subtitle>Certifique-se de que está tudo correto.</Subtitle>

            <Title>Nome</Title>
            <Subtitle>{nome}</Subtitle>

            <Title>CNPJ</Title>
            <Subtitle>{cnpj}</Subtitle>

            <Title>FONE</Title>
            <Subtitle>{fone}</Subtitle>

            <Title>E-mail</Title>
            <Subtitle>{email}</Subtitle>

            <Title>CEP</Title>
            <Subtitle>{cep}</Subtitle>

            <Title>PREÇO</Title>
            <Subtitle>R$ {preco}</Subtitle>

            <ButtomPrimary onPress={() => realizarVenda()}>
              <Title2>Registrar Venda</Title2>
            </ButtomPrimary>
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
