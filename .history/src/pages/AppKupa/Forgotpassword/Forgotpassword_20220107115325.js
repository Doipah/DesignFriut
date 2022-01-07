import React, {useEffect, useState, useRef} from 'react';

// import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import Style from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import react from 'react';
import Allcss from '../../../css/Allcss';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../../css/Allcolors';
import AppIntroSlider from '../../../lib_edit/react-native-app-intro-slider';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

//  value
const CELL_COUNT = 4;

const slides = [
  {
    key: 1,
    title: 'All Your favorites foods',
    text: 'Description.Say something cool, Description.Say something cool,',
    image: require('../../image/foodskip.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Get delivery at your \n doorstep',
    text: 'Other cool stuff',
    image: require('../../image/foodskip.png'),
    backgroundColor: '#febe29',
  },
];

const Forgotpassword = () => {
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const scrolling = useRef(new Animated.Value(0)).current;
  const [showRealApp, setshowRealApp] = useState(false);
  const [nextone, setnextone] = useState(0);

  const [showPassword, setshowPassword] = useState(true);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [choose, setChoose] = useState();

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  //   zone function

  const Choosepoint = index => {
    setChoose(index);
  };

  //////

  return (
    <SafeAreaView style={[{backgroundColor: COLORS.white, flex: 1}]}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <TouchableOpacity style={{}}>
          <Icon name="arrow-back" size={23} />
        </TouchableOpacity>
        <View style={{marginTop: 45}}>
          <Text
            style={{
              textAlign: '',
              marginBottom: 10,
              fontWeight: '600',
              fontSize: 23,
            }}>
            {'Forgot Password'}
          </Text>
          <Text
            style={{textAlign: '', color: COLORS.colortext, marginBottom: 5}}>
            {
              'Select which contact details should we use to reset your password'
            }
          </Text>
        </View>
        <View style={{marginTop: 35, marginBottom: 40, flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              Choosepoint(1);
            }}
            style={{
              borderWidth: 1,
              borderColor: choose ===1? COLORS.bgGrreen:COLORS.bgcolortext,
              height: 80,
              borderRadius: 8,
              backgroundColor:  COLORS.bgcolortext,
              justifyContent: 'center',
              marginBottom: 15,
            }}>
            <View style={{flexDirection: 'row', marginHorizontal: 23}}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: choose ===1?  COLORS.bgGrreenon:COLORS.white,
                  width: wp('15%'),
                  height: wp('15%'),
                  borderRadius: 35,
                }}>
                <Icon1
                  style={{alignSelf: 'center'}}
                  name="email"
                  size={35}
                  color={ choose ===1? COLORS.bgGrreen: COLORS.colortext}
                />
              </View>
              <View style={{marginLeft: 20, marginTop: 10}}>
                <Text style={{fontWeight: '600', marginBottom: 5}}>
                  {'Email'}
                </Text>
                <Text style={{color: COLORS.colortext}}>{'Phone Number'}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Choosepoint(1);
            }}
            style={{
              borderWidth: 1,
              borderColor: choose ===1? COLORS.bgGrreen:COLORS.bgcolortext,
              height: 80,
              borderRadius: 8,
              backgroundColor:  COLORS.bgcolortext,
              justifyContent: 'center',
              marginBottom: 15,
            }}>
            <View style={{flexDirection: 'row', marginHorizontal: 23}}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: choose ===1?  COLORS.bgGrreenon:COLORS.white,
                  width: wp('15%'),
                  height: wp('15%'),
                  borderRadius: 35,
                }}>
                <Icon1
                  style={{alignSelf: 'center'}}
                  name="phone"
                  size={35}
                  color={ choose ===1? COLORS.bgGrreen: COLORS.colortext}
                />
              </View>
              <View style={{marginLeft: 20, marginTop: 10}}>
                <Text style={{fontWeight: '600', marginBottom: 5}}>
                  {'Phone Number'}
                </Text>
                <Text style={{color: COLORS.colortext}}>{'Phone Number'}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Choosepoint(2);
            }}
            style={{
              borderWidth: 1,
              borderColor: COLORS.bgcolortext,
              height: 80,
              borderRadius: 8,
              backgroundColor: COLORS.bgcolortext,
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row', marginHorizontal: 23}}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: COLORS.white,
                  width: wp('15%'),
                  height: wp('15%'),
                  borderRadius: 35,
                }}>
                <Icon1
                  style={{alignSelf: 'center'}}
                  name="phone"
                  size={35}
                  color={COLORS.colortext}
                />
              </View>
              <View style={{marginLeft: 20, marginTop: 10}}>
                <Text style={{fontWeight: '600', marginBottom: 5}}>
                  {'Phone Number'}
                </Text>
                <Text style={{color: COLORS.colortext}}>{'Phone Number'}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: 15}}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.bgGrreen,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            marginBottom: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            {'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Forgotpassword;

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30, fontWeight: '800'},
  codeFieldRoot: {marginTop: 20, marginHorizontal: 50},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 45,
    fontSize: 24,
    borderWidth: 1,

    borderColor: COLORS.colortext,
    backgroundColor: COLORS.bgcolortext,
    textAlign: 'center',
    borderRadius: 8,
  },
  focusCell: {
    borderColor: COLORS.bgGrreen,
    borderRadius: 8,
  },
});
