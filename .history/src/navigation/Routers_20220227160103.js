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

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { CurvedBottomBar } from 'react-native-utils-navigation-bar';

// import screen //////

import Homescreen from '../pages/AppIntranet/Home/Homescreen';

import IconEntypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../css/Allcolors';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const Tabs = createBottomTabNavigator();

//  datamenu

///////// function ///////

///////// end function ///////

const Routers = () => {
  return (
    <NavigationContainer screenOptions={{tabBarVisible: false}}>
      <Tabs.Navigator
        //  showLabel={true}
        sceneContainerStyle={{}}
        screenOptions={{
          headerShown: false,
        }}
        backBehavior="none">
        <Tabs.Screen
          
          name="Homescreen"
          component={Homescreen}
          options={{
            
            tabBarLabel: () => (
              <View>
                <Text style={{color: COLORS.placeholderTextColor}}>
                  {'หน้าแรก'}
                </Text>
              </View>
            ),
            tabBarIcon: () => (
              <View>
                <Image
                  style={{resizeMode: 'contain', width: 30, height: 30}}
                  source={require('../../src/pages/image/home.png')}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen name="Homescreen1" component={Homescreen} />
        <Tabs.Screen name="Homescreen2" component={Homescreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  btnCircle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 1,
      bottom: 28
  },
  btnCircleUp: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E8E8E8',
      bottom: 18,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 1,
  },
  imgCircle: {
      width: 30,
      height: 30,
      tintColor: '#48CEF6'
  },
  img: {
      width: 30,
      height: 30,
  }
});
