import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerContainerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: '#30B2E2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logout: {
    color: '#30B2E2',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default styles;
