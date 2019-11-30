import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#ddd',
    borderBottomColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    paddingVertical: 10,
    backgroundColor: '#efefef',
  },
  itemIcon: {
    maxWidth: 50,
    backgroundColor: '#707070',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
