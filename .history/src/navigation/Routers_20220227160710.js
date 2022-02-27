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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../css/Allcolors';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const Tabs = createBottomTabNavigator();
StatusBar.setBarStyle('dark-content');



//  datamenu

///////// function ///////

///////// end function ///////

const Routers = () => {
  const [type, setType] = useState<'down' | 'up'>('down');

  const onClickButton = () => {
      if (type === 'up') {
          setType('down');
          alert('Change type curve down');
      } else {
          setType('up');
          alert('Change type curve up');
      }
  }

  

  return (
    <View style={styles.container}>
    <CurvedBottomBar.Navigator
        style={[type === 'down' && {backgroundColor: '#F5F5F5'}]}
        type={type}
        height={60}
        circleWidth={55}
        bgColor="white"
        borderTopLeftRight={true}
        initialRouteName="title1"
        renderCircle={() => (
            <TouchableOpacity
                style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]} onPress={onClickButton}
            >
                <Ionicons name="chatbubbles-outline" size={23} />
            </TouchableOpacity>
        )}
        tabBar={({ routeName, selectTab, navigation }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation(routeName)}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
                {/* {_renderIcon(routeName, selectTab)} */}
            </TouchableOpacity>
        );
        }}>
        <CurvedBottomBar.Screen
            name="title1"
            position="left"
            component={() => <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />}
        />
        <CurvedBottomBar.Screen
            name="title2"
            component={() => <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />}
            position="left"
        />
        <CurvedBottomBar.Screen
            name="title3"
            component={() => <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />}
            position="right"
        />
        <CurvedBottomBar.Screen
            name="title4"
            component={() => <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />}
            position="right"
        />
    </CurvedBottomBar.Navigator>
</View>

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




{/* <NavigationContainer screenOptions={{tabBarVisible: false}}>
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
</NavigationContainer> */}
