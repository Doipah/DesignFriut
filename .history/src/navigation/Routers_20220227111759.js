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
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);


const Tabs = createBottomTabNavigator();
const tabs = [{ name: 'A' },{ name: 'B' }, { name: 'C' }, { name: 'D' }, { name: 'E' }];

//  datamenu


///////// function ///////


  



///////// end function ///////

const Routers = () => {
  return (
    <NavigationContainer>

     
    </NavigationContainer>
  );
};

export default Routers;
const styles = StyleSheet.create({
  
});
