import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#dedede',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonMenu: {
    width: Dimensions.get('screen').width,
    maxWidth: 150,
    borderWidth: 1,
    borderColor: '#30B2E2',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  textButtom: {
    alignSelf: 'center',
  },

  textTitle: {
    fontSize: 16,
    color: '#818181',
    marginVertical: 10,
  },
  textDefault: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 30,
    color: '#707070',
    marginVertical: 10,
  },
  valor: {
    fontSize: 30,
    color: '#707070',
    fontWeight: 'normal',
  },

  valorContainer: {
    width: Dimensions.get('screen').width - 250,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  valor1: {
    fontSize: 20,
    color: '#30B2E2',
  },
  valor2: {
    fontSize: 40,
    color: '#30B2E2',
  },
  valor3: {
    fontSize: 14,
    color: '#30B2E2',
  },
});

export default styles;
