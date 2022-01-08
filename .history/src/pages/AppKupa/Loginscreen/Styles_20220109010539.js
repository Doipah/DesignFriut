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
  textforgot:{color: COLORS.bgGrreen, fontWeight: '500'},
  buttonlogin:{
    backgroundColor: COLORS.bgGrreen,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 25,
  },
  textbuttonlogin:{
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },viewtextdonthave:{
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 25,
  }
});
