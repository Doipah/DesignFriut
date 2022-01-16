import {StyleSheet, Dimensions, Platform} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../../css/Allcolors';

const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default StyleSheet.create({
  View1text: {marginTop: 10, marginBottom: 10},
  texttitlebold: {fontSize: 23, fontWeight: '600'},
  textSignup: {fontSize: 15, color: COLORS.colortext},
  viewinput: {
    backgroundColor: COLORS.bgcolortext,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
  },
  viewinputpassword: {
    backgroundColor: COLORS.bgcolortext,
    height: 50,
    borderRadius: 8,

    flexDirection: 'row',
  },
  viewinputpassword2: {flex: 1, justifyContent: 'center'},
  textinput: {marginHorizontal: 15, flex: 1},
  textforgot: {color: COLORS.bgGrreen, fontWeight: '500'},
  buttonlogin: {
    backgroundColor: COLORS.bgGrreen,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 25,
  },
  textbuttonlogin: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  viewtextdonthave: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 25,
  },
  textSigndothave: {fontWeight: '500', color: COLORS.bgGrreen},
  Orwith: {flexDirection: 'row', marginBottom: 30},
  vieworwith: {
    height: hp('0.1%'),
    width: wp('40%'),
    borderWidth: 0.5,
    borderColor: COLORS.colortext,
    justifyContent: 'center',
  },
  vieworwith2: {
    height: hp('0.1%'),
    width: wp('50%'),
    borderWidth: 0.5,
    borderColor: COLORS.colortext,
    justifyContent: 'center',
  },
  textorwith: {
    marginHorizontal: 9,
    marginTop: -9,
    color: COLORS.colortext,
  },
  buttonloginwith: {
    backgroundColor: COLORS.white,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.colortext,
    justifyContent: 'center',
  },
  buttonicon: {justifyContent: 'center', marginHorizontal: 10},
  buttonviewloginwith: {justifyContent: 'center', marginHorizontal: 10},
  buttontextloginwith:{
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
 
  }
});
