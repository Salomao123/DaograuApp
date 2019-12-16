import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

import {connect} from 'react-redux';

import {navigate} from '../../services/navigation';

import HeaderMenu from '../../components/HeaderMenu';

function Validacao({produtos, categoria}) {
  return (
    <View style={styles.container}>
      <HeaderMenu goback={'Dashboard'} titulo={'Cadastro Realizado'} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title1}>Dados do cadastro</Text>

          <View style={styles.item1}>
            <Text style={styles.description}>Código de Barra</Text>
            <Text style={styles.title}>{produtos.codigo_barra}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.description}>Tipo produto</Text>
            <Text style={styles.title}>{produtos.tipo_produto}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.description}>Categoria</Text>
            <Text style={styles.title}>{categoria.descricao}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.description}>Subcategoria</Text>
            <Text style={styles.title}>{produtos.subcategoria}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.description}>Preço</Text>
            <Text style={styles.title}>R$ {produtos.preco_produto}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.description}>Unidades e Medias</Text>
            <Text style={styles.title}>
              {produtos.valor_unidade}/{produtos.unidade_medida}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate('CadastroProdutos')}
        style={styles.btnDefault}>
        <Text style={styles.txtDefault}>Cadastrar novo produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({
  produtos: state.produtos.produtos.data,
  categoria: state.categoria.categoriaSelecionada,
});

export default connect(mapStateToProps)(Validacao);
