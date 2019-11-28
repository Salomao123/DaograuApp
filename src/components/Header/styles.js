import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  content: {
    width: Dimensions.get('window').width,
    height: 200,
    paddingVertical: 15,
    backgroundColor: '#30b2e2',
  },
});

export default styles;
