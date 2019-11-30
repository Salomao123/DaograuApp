import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  danger: {
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#ff4444',
  },
  default: {
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textDisable: {
    color: '#ddd',
  },
});

export default styles;
