import {StyleSheet} from 'react-native';
import {bold} from 'colorette';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  btnDefault: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#30b2e2',
    borderRadius: 6,
    elevation: 5,
  },
  txtDefault: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
  },

  //tabela
  content: {
    marginHorizontal: 10,
  },

  title1: {
    fontSize: 20,
    lineHeight: 24,
    color: '#707070',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#707070',
    fontWeight: 'bold',
  },

  item1: {
    marginVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },

  item: {
    paddingVertical: 10,
  },
});

export default styles;
