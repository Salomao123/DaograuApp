import React, {useEffect, useState} from 'react';

import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import styles from './styles';

import HeaderMenu from '../../../components/HeaderMenu';

import StepIndicator from 'react-native-step-indicator';

import Icon from 'react-native-vector-icons/FontAwesome';

import {navigate} from '../../../services/navigation';

import ListaDepositos from '../../Deposito/lista_depositos';

//arquitetura flux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProdutoActions from '../../../store/actions/produtos';

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

function CadastroProdutos({
  navigation,
  itemDepositoSelecionado,
  insertProdutosRequest,
  loading,
}) {
  const [currentPosition, setCurrentPosition] = useState(0);

  const [tipoProduto, setTipoProduto] = useState();
  const [categoria, setCategoria] = useState();
  const [subcategoria, setSubcategoria] = useState();
  const [preco, setPreco] = useState();
  const [deposito, setDeposito] = useState();
  const [codigoBarra, setCodigoBarra] = useState();
  const [unidade, setUnidade] = useState();
  const [valorUnidade, setValorUnidade] = useState();

  //gambiarra => será que funcionar?

  const [selecionado, setSelecionado] = useState([]);

  useEffect(() => {
    handleBarcodeAndPosition();
  }, []);

  function handleBarcodeAndPosition() {
    try {
      checkBarcode();
      checkPosition();
    } catch (err) {
      console.tron.log(err.message);
    }
  }

  function checkBarcode() {
    const {barcodes} = navigation.getParam('barcodes', 'barcodes');

    if (barcodes) {
      setCodigoBarra(barcodes[0].data);
    }
  }

  function checkPosition() {
    const position = navigation.getParam('position', 'position');

    if (position != 0) {
      if (position === 2) {
        setCurrentPosition(position);
      }
    }
  }

  function onPageChange(position) {
    setCurrentPosition(position);
  }

  function cadastrarProdutos() {
    const data = {
      deposito_id: itemDepositoSelecionado.id,
      tipo_produto: tipoProduto,
      codigo_barra: codigoBarra,
      categoria,
      subcategoria,
      preco_produto: preco,
      valor_unidade: valorUnidade,
      unidade_medida: unidade,
    };
    insertProdutosRequest(data);
  }

  function handleForms(currentPosition) {
    switch (currentPosition) {
      case 0:
        return (
          <Container>
            <Title>Código de barra</Title>
            <Subtitle>
              Insira o código de barra ou scaneie pela camera do celular
            </Subtitle>

            <Input
              placeholder="Inserir código de barra"
              value={codigoBarra}
              onChangeText={valor => setCodigoBarra(valor)}
            />

            <Link onPress={() => navigation.navigate('CodigoBarra')}>
              Scanear código de barra
            </Link>
          </Container>
        );
      case 1:
        return (
          <Container>
            <Title>Informações sobre depósito</Title>
            <Subtitle>Selecione o depósito que o produto ficará.</Subtitle>

            <ListaDepositos selecionar={true} />
          </Container>
        );
      case 2:
        return (
          <Container>
            <Title>Dados do produto</Title>
            <Subtitle>Insira os campos pertinentes ao produto.</Subtitle>

            <View>
              <Input
                value={tipoProduto}
                onChangeText={item => setTipoProduto(item)}
                placeholder="Tipo de produto"
              />
              <Input
                value={categoria}
                onChangeText={valor => setCategoria(valor)}
                placeholder="Categoria"
              />
              <Input
                value={subcategoria}
                onChangeText={valor => setSubcategoria(valor)}
                placeholder="Subcategoria"
              />
              <Input
                value={preco}
                onChangeText={valor => setPreco(valor)}
                placeholder="Preço"
                keyboardAppearance={'dark'}
                keyboardType={'number-pad'}
              />
            </View>
          </Container>
        );
      case 3:
        return (
          <Container>
            <Title>Unidades</Title>
            <Subtitle>
              Unidade de medida dos produtos a serem cadastrados
            </Subtitle>

            <Input
              value={unidade}
              onChangeText={valor => setUnidade(valor)}
              placeholder="Exemplo: LT"
            />
            <Small>
              Essa é a descrição da unidade de medida do insumo a ser
              cadastrado. Descreva a unidade de medida equivalente ao produto.
            </Small>
            <Input
              keyboardType="number-pad"
              value={valorUnidade}
              onChangeText={valor => setValorUnidade(valor)}
              placeholder="Exemplo: 50"
            />
            <Small>
              Esse campo justifica a inserção do valor que o produto comporta.
              Exemplo: 50.
            </Small>
          </Container>
        );
      case 4:
        return (
          <SubContainer>
            <TitleDetalhes>Detalhes do produtos</TitleDetalhes>
            <Subtitle>Confira se as informações estão corretas.</Subtitle>

            <Title>Tipo produto</Title>
            <Subtitle>{tipoProduto}</Subtitle>

            <Title>Categoria</Title>
            <Subtitle>{categoria}</Subtitle>

            <Title>Subcategoria</Title>
            <Subtitle>{subcategoria}</Subtitle>

            <Title>Preço</Title>
            <Subtitle>R$ {preco}</Subtitle>

            <Title>Deposito</Title>
            <Subtitle>
              {itemDepositoSelecionado.deposito_cep},{' '}
              {itemDepositoSelecionado.deposito_nome}
            </Subtitle>

            <Title>Codigo de barra</Title>
            <Subtitle>{codigoBarra}</Subtitle>

            <Title>Unidade e medidas</Title>
            <Subtitle>
              {valorUnidade}/{unidade}
            </Subtitle>

            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => cadastrarProdutos()}>
              {loading ? (
                <ActivityIndicator color={'white'} size={24} />
              ) : (
                <Text style={styles.textBnt}>CADASTRAR</Text>
              )}
            </TouchableOpacity>
          </SubContainer>
        );
      default:
        return <Text>Você precisa realizar o cadastro do produto</Text>;
    }
  }

  return (
    <View style={styles.background}>
      <HeaderMenu titulo="Cadastrar Produtos" goback="Dashboard" />

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
  itemDepositoSelecionado: state.depositos.depositoSelecionado,
  loading: state.produtos.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProdutoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CadastroProdutos);
