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
} from 'react-native';
import Style from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import react from 'react';

import Carousel from 'react-native-snap-carousel';
import {COLORS} from '../../../css/Allcolors';

import LinearGradient from 'react-native-linear-gradient';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  value

const HomeLonding = () => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        start={ {x: 1.1, y: 0.3} }
        end={ {x: 0.5, y: 0.9} }
        // end={{x: 1, y: 1}}
        locations={[1, 1, 1]}
        colors={['#4f72e5', '#314d7b']}
       
        style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', color: '#FFF'}}>
          Sign in with Facebook
        </Text>
      </LinearGradient>
     
  
    </View>
  );
};

export default HomeLonding;
const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
