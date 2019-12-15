import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -99,
    paddingVertical: 70,
  },
  card: {
    backgroundColor: '#30b2e2',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row_flex_start: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 20,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#fff',
  },
  icon: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  cardBody: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    width: 230,
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default styles;
