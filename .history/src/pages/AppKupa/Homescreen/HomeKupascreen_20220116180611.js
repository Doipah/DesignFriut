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
import Header from './../Componetheader/Header'
// import ParallaxScrollView from 'react-native-parallax-scrollview';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

//  value




const Homekupascreen = () => {
 

  

  return (
   <View style={{borderWidth:1,flex:1}}>
       <Header/>
       <ParallaxScrollView
  windowHeight={SCREEN_HEIGHT * 0.4}
  backgroundSource='http://i.imgur.com/UyjQBkJ.png'
  navBarTitle='John Oliver'
  userName='John Oliver'
  userTitle='Comedian'
  userImage='http://i.imgur.com/RQ1iLOs.jpg'
  leftIcon={{name: 'rocket', color: 'rgba(131, 175, 41, 1)', size: 30, type: 'font-awesome'}}
  rightIcon={{name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
/>
       


   
   </View>
  );
};

export default Homekupascreen;
