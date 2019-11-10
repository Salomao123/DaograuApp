import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  content: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  items: {
    width: 400,
    maxWidth: 100,
    height: 100,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  legend: {
    fontSize: 12,
    color: '#707070',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

export default styles;
