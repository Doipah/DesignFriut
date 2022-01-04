import {StyleSheet, Dimensions, Platform} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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

    justifyContent: 'center',
  },
  viewmenutop: {
    // borderWidth: 0.1,
    borderColor: 'red',
    width: width * 0.22,
    height: height * 0.12,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 7,
    borderRadius: 10,
  },
  viewtop1: {
    alignItems: 'center',
  },
  viewtop2: {
    alignItems: 'center',
  },
  viewtop3: {
    alignItems: 'center',
  },
  viewtop4: {
    alignItems: 'center',
  },
  viewdarafresh: {
    borderColor: 'red',
    width: width * 0.3,
    height: height * 0.18,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  viewprice: {flexDirection: 'row', marginHorizontal: 10, marginTop: 8},

  viewprice2: {justifyContent: 'center', flex: 1},
  viewbgall: {flex: 1, marginHorizontal: 8, marginTop: 5},
  viewlocation: {borderColor: 'red', flexDirection: 'row', height: 38},
  viewbgtime: {flex: 1, flexDirection: 'row'},
  viewfreshfruit: {
    marginTop: 20,
    shadowColor: '#eff5f6',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
