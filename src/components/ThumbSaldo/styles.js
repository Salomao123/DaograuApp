import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textTitle: {
    fontSize: 16,
    color: '#fff',
  },
  textSubtitle: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'normal',
  },
  textValor: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  containerValor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 50,
    elevation: 5,
  },
  textUser: {
    fontSize: 16,
    color: '#30b2e2',
    fontWeight: 'bold',
  },
});

export default styles;
