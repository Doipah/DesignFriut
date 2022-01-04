import {StyleSheet,Dimensions,Platform} from 'react-native';

const windowns = Dimensions.get('window')
const screen = Dimensions.get('screen')

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
  Textcss1:{
    borderWidth: 1, fontSize: 15, fontWeight: 'bold'

  }
});
