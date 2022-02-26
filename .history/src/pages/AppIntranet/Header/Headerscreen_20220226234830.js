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
  KeyboardAvoidingView
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

const Headerscreen = () => {
  return (
    <View style={{flex: 0.1,}}>
       <LinearGradient
        start={{x: 0.9, y: 0.5}}
        end={{x: 0.1, y: 0.3}}
        // end={{x: 1, y: 1}}

        colors={[COLORS.bglinearblue, COLORS.bglinearbluedrak]}
        style={styles.LIcssview1}>
       
      </LinearGradient>
      
    </View>
  );
};

export default Headerscreen;
const styles = StyleSheet.create({
View1css:{marginHorizontal: 50},
  imglogo: {resizeMode: 'contain', width: '100%'},
  LIcssview1: {
    flex: 1,
    justifyContent: 'center',
    borderBottomRightRadius:7,
    borderBottomLeftRadius:7,
    opacity:1
  },
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
