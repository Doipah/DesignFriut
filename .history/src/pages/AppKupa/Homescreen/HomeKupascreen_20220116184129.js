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
import Header from './../Componetheader/Header';

import Carousel from 'react-native-snap-carousel';


// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

//  value

const Datamenu = [
  {
    menu: 'Staple',
    id: 1,
    icon: require('../../image/icon1.png'),
  },
  {
    menu: 'Vegetable',
    id: 2,
    icon: require('../../image/vegetable.png'),
  },
  {
    menu: 'Fruit',
    id: 3,
    icon: require('../../image/fruit.png'),
  },
  {
    menu: 'Dessert',
    id: 4,
    icon: require('../../image/Dessert.png'),
  },
];




const Homekupascreen = () => {

  _renderItem = ({item, index}) => {
    return (
        <View style={{}}>
            <Text style={styles.menu}>{ item.icon }</Text>
        </View>
    );
}

  return (
   <View style={{borderWidth:1}}><Header/>

<Carousel
              ref={(c) => { this._carousel = c; }}
              data={Datamenu}
              renderItem={_renderItem}
              sliderWidth={width}
              itemWidth={width}
            />
   
   
   </View>
  );
};

export default Homekupascreen;
