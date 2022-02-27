import React, {useEffect, useState, useRef} from 'react';

// import type {Node} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
import Style from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';


import Carousel from 'react-native-snap-carousel';
import {COLORS} from '../../../css/Allcolors';

import LinearGradient from 'react-native-linear-gradient';
import Headerscreen from '../Header/Headerscreen';
import {fontSizes} from '../../../css/Allsizefont';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);




//  datamenu


///////// function ///////




///////// end function ///////

const Homescreen = () => {

  return (
    <View style={{flex: 1}}>
      <Headerscreen />

      <View
        style={{
          flex: 1,
          marginVertical: 20,
          alignSelf: 'center',
        }}>
        <FlatList
          horizontal={false}
          numColumns={2}
          data={Datamenu}
          style={{}}
          renderItem={listDamenu}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Homescreen;
const styles = StyleSheet.create({
  
});
