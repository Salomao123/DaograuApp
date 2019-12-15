import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  warnning: {
    color: '#ff6666',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  textDefault: {
    fontSize: 16,
    color: '#000',
    lineHeight: 30,
  },
  preco: {
    fontSize: 14,
    color: '#000',
  },

  preco_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#707070',
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 2,
  },
  icon: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  preco_text: {
    color: '#fff',
  },
  operadores: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
('');
