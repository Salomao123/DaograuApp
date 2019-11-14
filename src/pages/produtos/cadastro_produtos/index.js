import React, {useState} from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

import Header from '../../../components/Header';

import StepIndicator from 'react-native-step-indicator';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Title, Subtitle, Container, Input, Select} from './styled';

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

function CadastroProdutos() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [deposito, setDeposito] = useState();

  function onPageChange(position) {
    setCurrentPosition(position);
  }

  function handleForms(currentPosition) {
    switch (currentPosition) {
      case 0:
        return (
          <Container>
            <Title>Dados do produto</Title>
            <Subtitle>Insira os campos pertinentes ao produto.</Subtitle>

            <View>
              <Input placeholder="Tipo de produto" />
              <Input placeholder="Categoria" />
              <Input placeholder="Subcategoria" />
              <Input
                placeholder="Preço"
                keyboardAppearance={'dark'}
                keyboardType={'number-pad'}
              />
            </View>
          </Container>
        );
      case 1:
        return (
          <Container>
            <Title>Informações sobre depósito</Title>
            <Subtitle>Selecione o depósito que o produto ficará.</Subtitle>

            <Select
              selectedValue={deposito}
              onValueChange={(itemValue, itemIndex) => setDeposito(itemValue)}>
              <Select.Item label={'002 - Macapá - 67854069'}>
                001 - Macapá - 68926024
              </Select.Item>
              <Select.Item label={'002 - Belém - 67854069'}>
                002 - Belém - 67854069
              </Select.Item>
            </Select>
          </Container>
        );
      case 2:
        return (
          <Container>
            <Title>Código de barra</Title>
            <Subtitle>Aponte para o código de barra para o produto</Subtitle>
          </Container>
        );
      case 3:
        return (
          <Container>
            <Title>Informações financeiras</Title>
          </Container>
        );
      case 4:
        return (
          <Container>
            <Title>Detalhes do produtos</Title>
          </Container>
        );
      default:
        return <Text>Você precisa realizar o cadastro do produto</Text>;
    }
  }

  return (
    <>
      <Header title={'Cadastrar produtos'} goback={true} />

      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        onPress={position => onPageChange(position)}
        labels={labels}
      />

      {handleForms(currentPosition)}

      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.btnVoltar}
            onPress={() => 'ainda não implementado!'}>
            <Icon name="arrow-left" size={20} color="#ffff" />
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => 'ainda não implementado!'}>
            <Text style={styles.textBnt}>PŔOXIMO</Text>
            <Icon name="arrow-right" size={20} color="#ffff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default CadastroProdutos;
