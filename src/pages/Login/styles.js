import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  fullScreen: {
    width: '100%',
  },

  logo: {
    maxWidth: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#707070',
    lineHeight: 30,
  },
  danger: {
    color: '#DB5A42',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  subtitle: {
    maxWidth: 250,
    fontSize: 14,
    fontWeight: 'normal',
    color: '#4D4040',
    lineHeight: 22,
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    alignSelf: 'stretch',
  },
  btn_entrar: {
    marginVertical: 10,
    backgroundColor: '#30B2E2',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    elevation: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
  link: {
    color: '#30b2e3',
    marginTop: 30,
  },
  section: {
    width: Dimensions.get('screen').width - 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  traco: {
    width: 150,
    height: 1,
    backgroundColor: '#707070',
  },
  textSection: {
    lineHeight: 20,
    marginVertical: 20,
    color: '#707070',
  },
});

export default styles;
