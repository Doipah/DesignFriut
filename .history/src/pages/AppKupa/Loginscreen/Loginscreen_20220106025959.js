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

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

//  value

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

const Loginscreen = () => {
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const scrolling = useRef(new Animated.Value(0)).current;
  const [showRealApp, setshowRealApp] = useState(false);
  const [nextone, setnextone] = useState(0);

  const [showPassword, setshowPassword] = useState(true);

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{marginBottom: 20, justifyContent: 'center'}}>
          <Image
            style={{
              height: hp('45%'),
              width: wp('100%'),
            }}
            source={item.image}
          />
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={{textAlign: 'center', fontWeight: '800', fontSize: 25}}>
            {item.title}
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontWeight: '100', fontSize: 15}}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };
  _onDone = () => {
    alert('Next');
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({showRealApp: true});
  };
  onSkip = () => {
    setShowRealApp(true);
  };

  _Nextone = () => {
    // setnextone(true);
  };

  return (
    <SafeAreaView style={[{backgroundColor: COLORS.white, flex: 1}]}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <TouchableOpacity style={{}}>
          <Icon name="arrow-back" size={23} />
        </TouchableOpacity>
        <View style={{marginTop: 10, marginBottom: 10}}>
          <Text style={{fontSize: 23, fontWeight: '600'}}>
            {' '}
            {'Welcome Back'}
          </Text>
        </View>
        <View style={{marginBottom: 25}}>
          <Text style={{fontSize: 15, color: COLORS.colortext}}>
            {' '}
            {'Sing to your account'}
          </Text>
        </View>

        <View style={{marginBottom: 13}}>
          <View style={{marginBottom: 6}}>
            <Text style={{fontWeight: '500'}}>{'Email'}</Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.bgcolortext,
              height: 50,
              borderRadius: 8,
              justifyContent: 'center',
            }}>
            <TextInput
              style={{marginHorizontal: 15, flex: 1}}
              placeholder="Your Email"
              placeholderTextColor={COLORS.colortext}
            />
          </View>
        </View>
        <View style={{marginBottom: 13}}>
          <View style={{marginBottom: 6}}>
            <Text style={{fontWeight: '500'}}>{'Password'}</Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.bgcolortext,
              height: 50,
              borderRadius: 8,
              //   justifyContent: 'center',
              //   borderWidth: 1,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TextInput
                secureTextEntry={showPassword}
                style={{marginHorizontal: 15, flex: 1}}
                placeholder="Your Password"
                placeholderTextColor={COLORS.colortext}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                if (showPassword === false) {
                  setshowPassword(true);
                } else {
                  setshowPassword(false);
                }
              }}
              style={{flex: 0.15, justifyContent: 'center'}}>
              {showPassword === false ? (
                <Icon name="eye" size={20} />
              ) : (
                <Icon name="eye-off" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => {
            alert('forget Passweord');
          }}>
          <Text style={{color: COLORS.bgGrreen, fontWeight: '500'}}>
            {'Forget Password?'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.bgGrreen,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            marginBottom: 25,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            {'Login'}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginBottom: 25,
          }}>
          <View>
            <Text>{"Don't have an anccount?"} </Text>
          </View>
          <TouchableOpacity>
            <Text style={{fontWeight: '500', color: COLORS.bgGrreen}}>
              {'Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.7}}>
        <View style={{flexDirection: 'row', marginBottom: 30}}>
          <View
            style={{
              height: hp('0.1%'),
              width: wp('40%'),
              borderWidth: 0.5,
              borderColor: COLORS.colortext,
              justifyContent: 'center',
            }}></View>
          <Text
            style={{
              marginHorizontal: 9,
              marginTop: -9,
              color: COLORS.colortext,
            }}>
            {'Or with'}
          </Text>
          <View
            style={{
              height: hp('0.1%'),
              width: wp('50%'),
              borderWidth: 0.5,
              borderColor: COLORS.colortext,
              justifyContent: 'center',
            }}></View>
        </View>
        <View style={{marginHorizontal: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              height: 50,
              borderRadius: 10,
             flexDirection:'row',
              marginBottom: 25,
              borderWidth:1,
              borderColor:COLORS.colortext
            }}>
            <View style={{justifyContent:'center'}}>
              <Icon name="logo-google" size={20} />
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: 16,
                  fontWeight: '500',
                  textAlign: 'center',
                  ustifyContent:'center'
                }}>
                {'Sign in with Google'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Loginscreen;
