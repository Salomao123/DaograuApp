import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -150,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    width: 400,
    maxWidth: 120,
    height: 120,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 5,
    elevation: 5,
  },
  legend: {
    fontSize: 12,
    color: '#707070',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  base: {
    bottom: 50,
    height: 400,
    maxHeight: 100,
    zIndex: -1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 2,
  },
  baseContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
