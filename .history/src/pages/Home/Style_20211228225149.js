import {StyleSheet, Dimensions, Platform} from 'react-native';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
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
    marginHorizontal: 23,
    flexDirection: 'row',
    borderRadius: 15,
    
    justifyContent:'center'
  },
  viewmenutop:
    {
      // borderWidth: 0.1,
      borderColor: 'red',
      width: width * 0.22,
      height: height * 0.12,
      justifyContent: 'center',
      backgroundColor: '#FFF',
      marginHorizontal: 7,
      borderRadius: 10,
    
  },
  viewtop1:{
    alignItems: 'center'
  },
  viewtop2:{
    alignItems: 'center'
  },
  viewtop3:{
    alignItems: 'center'
  }, viewtop4:{
    alignItems: 'center'
  }
});
