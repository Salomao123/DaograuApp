import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    position: 'absolute',
    bottom: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnNext: {
    maxWidth: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginVertical: 16,

    borderRadius: 4,
    backgroundColor: '#F67F39',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',

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
