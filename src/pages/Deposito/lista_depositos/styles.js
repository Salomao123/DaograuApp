import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  cardDeposito: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 2,
    borderColor: '#707070',
    borderWidth: 0.5,
  },
  textDeposito: {
    color: '#707070',
  },
  thumbnailDeposito: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnAcessar: {
    backgroundColor: '#BBD5ED',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    elevation: 5,
  },
  btnExcluir: {
    backgroundColor: '#ff4848',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    elevation: 5,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAcessar: {
    color: '#707070',
    fontWeight: 'bold',
    fontSize: 10,
  },
  textExcluir: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 10,
    marginHorizontal: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  //itemselected
  containerItemSelected: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  cardDepositoItemSelected: {},
  textDepositoItemSelected: {
    color: '#707070',
  },
  thumbnailDepositoItemSelected: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  depositoItemSelectedTitle: {
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
