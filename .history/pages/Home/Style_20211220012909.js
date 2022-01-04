import {StyleSheet, Dimensions, Platform} from 'react-native';

const windowns = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  Textcss1: {
    fontSize: 15,
  },
  Textcss2: {
    color: '#60ab95',
  },
  boxSearchcss: {
    backgroundColor: '#eff1f2',
    flex: 1,
    marginHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 15,
    
    justifyContent:'center'
  },
});
