import React, {useEffect} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {navigate} from '../../../services/navigation';

import styles from './styles';

//arquitetura flux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as DepositosActions from '../../../store/actions/depositos';

function ListaDepositos({
  loading,
  depositos,
  depositosRequest,
  selecionar,
  selecionado,
  excluirDepositos,
  depositoSelecionado,
}) {
  useEffect(() => {
    handleDepositos();
  }, []);

  function handleDepositos() {
    return depositosRequest();
  }

  function handleDepositoSelecionado(item) {
    try {
      depositoSelecionado(item);
    } catch (err) {
      console.tron.log(err.message);
    }
  }

  return (
    <>
      {loading ? (
        <ActivityIndicator size={20} color={'gray'} />
      ) : (
        <FlatList
          data={depositos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.container}>
              <View style={styles.cardDeposito}>
                <View style={styles.thumbnailDeposito}>
                  <Text style={styles.textTitle}>{item.deposito_nome}</Text>

                  {selecionar ? (
                    <TouchableOpacity
                      style={styles.btnAcessar}
                      onPress={() => handleDepositoSelecionado(item)}>
                      <Text style={styles.textAcessar}>SELECIONAR</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.btnAcessar}
                      onPress={() => navigate('Produtos')}>
                      <Text style={styles.textAcessar}>ACESSAR</Text>
                    </TouchableOpacity>
                  )}
                </View>

                <Text>{item.deposito_bairro}</Text>

                <View style={styles.footer}>
                  <View style={styles.footerIcon}>
                    <Icon
                      style={styles.icon}
                      name={'map-marker'}
                      size={24}
                      color={'#707070'}
                    />
                    <Text>
                      {item.deposito_municipio}/{item.deposito_uf_estado}
                    </Text>
                  </View>
                  <View style={styles.footerIcon}>
                    <Icon
                      style={styles.icon}
                      name="inbox"
                      size={24}
                      color={'#707070'}
                    />
                    <Text>{item.produto.length}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}

      {selecionado.deposito_nome && (
        <View style={styles.containerItemSelected}>
          <Text style={styles.depositoItemSelectedTitle}>
            Deposito Selecionado
          </Text>
          <View style={styles.cardDepositoItemSelected}>
            <View style={styles.thumbnailDepositoItemSelected}>
              <Text style={styles.textDepositoItemSelected}>
                {selecionado.deposito_cep}, {selecionado.deposito_nome},{' '}
                {selecionado.deposito_uf_estado}
              </Text>

              <TouchableOpacity
                style={styles.btnExcluir}
                onPress={() => excluirDepositos()}>
                <Icon name="trash" color="#ffffff" size={15} />
                <Text style={styles.textExcluir}>EXCLUIR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  loading: state.depositos.loading,
  depositos: state.depositos.deposito,
  selecionado: state.depositos.depositoSelecionado,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DepositosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListaDepositos);
