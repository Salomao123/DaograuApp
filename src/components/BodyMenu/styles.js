import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {},
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
    maxWidth: '24%',
    height: 100,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: '2.5%',
    marginVertical: '2.5%',
    elevation: 5,
  },
  legend: {
    fontSize: 12,
    color: '#707070',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  baseContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
