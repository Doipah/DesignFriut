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

const Signupscreen = () => {
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

 

 

  return (
    <SafeAreaView style={[{backgroundColor: COLORS.white, flex: 1}]}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <TouchableOpacity style={{}}>
          <Icon name="arrow-back" size={23} />
        </TouchableOpacity>
        <View style={{marginTop: 10, marginBottom: 10}}>
          <Text style={{fontSize: 23, fontWeight: '600'}}>
            {' '}
            {'Sign Up'}
          </Text>
        </View>
        <View style={{marginBottom: 25}}>
          <Text style={{fontSize: 15, color: COLORS.colortext}}>
            {' '}
            {'Create account and choose favorite menu'}
          </Text>
        </View>
        <View style={{marginBottom: 13}}>
          <View style={{marginBottom: 6}}>
            <Text style={{fontWeight: '500'}}>{'Name'}</Text>
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
              placeholder="Your name"
              placeholderTextColor={COLORS.colortext}
            />
          </View>
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
          style={{
            backgroundColor: COLORS.bgGrreen,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            marginBottom: 25,
            marginTop:20
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
 
      </View>
   
    </SafeAreaView>
  );
};

export default Signupscreen;
