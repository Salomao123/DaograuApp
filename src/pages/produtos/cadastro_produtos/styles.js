import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    position: 'absolute',
    bottom: 12,
  },
  background: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnNext: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: '#2ec4b6',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 5,
  },
  btnVoltar: {
    maxWidth: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginVertical: 16,

    borderRadius: 4,
    backgroundColor: '#BBD5ED',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    elevation: 5,
  },

  textBnt: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'normal',
    marginHorizontal: 5,
  },
  textVoltar: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'normal',
    marginHorizontal: 5,
  },
});

export default styles;
