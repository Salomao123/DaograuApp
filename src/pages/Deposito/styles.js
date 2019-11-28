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
    marginBottom: 10,
    alignItems: 'center',
  },
  btnAcessar: {
    backgroundColor: '#BBD5ED',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    elevation: 5,
  },
  textAcessar: {
    color: '#707070',
    fontWeight: 'bold',
    fontSize: 10,
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
});

export default styles;
