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
import {CurvedBottomBar} from 'react-native-utils-navigation-bar';

// import screen //////

import Homescreen from '../pages/AppIntranet/Home/Homescreen';

import IconEntypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../css/Allcolors';
import {fontSizes} from '../css/Allsizefont';

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
          tabBarLabelStyle: {fontSize: fontSizes.labelSize},
          headerShown: false,
          showLabel: true,

          tabBarStyle: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
          //     tabBarInactiveBackgroundColor:COLORS.white,
          // tabBarActiveBackgroundColor:COLORS.bglinearblue
        }}
        backBehavior="none">
        <Tabs.Screen
          name="Homescreen"
          component={Homescreen}
          options={{
            tabBarLabel: ({tintColor, focused}) => (
              <View>
                <Text
                  style={{
                    color: focused
                      ? COLORS.bglinearblue
                      : COLORS.placeholderTextColor,
                  }}>
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
        <Tabs.Screen
          name="Homescreen1"
          component={Homescreen}
          options={{
            tabBarLabel: () => <View />,
            tabBarIcon: ({tintColor, focused}) => (
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: -40,
                  borderRadius: 50,
                  height: 80,
                  width: 80,
                  backgroundColor: COLORS.bggray,
                }}>
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.bglinearblue,
                    borderRadius: 50,
                    height: 65,
                    width: 65,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}>
                  <Image
                    style={{
                      alignSelf: 'center',
                      resizeMode: 'contain',
                      width: 30,
                      height: 30,
                    }}
                    source={require('../../src/pages/image/qrcode.png')}
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Homescreen2"
          component={Homescreen}
          options={{
            tabBarLabel: ({tintColor, focused}) => (
              <View>
                <Text
                  style={{
                    color: focused
                      ? COLORS.bglinearblue
                      : COLORS.placeholderTextColor,
                  }}>
                  {'ประวัติ'}
                </Text>
              </View>
            ),
            tabBarIcon: () => (
              <View>
                <Image
                  style={{resizeMode: 'contain', width: 30, height: 30}}
                  source={require('../../src/pages/image/history.png')}
                />
              </View>
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
const styles = StyleSheet.create({});
