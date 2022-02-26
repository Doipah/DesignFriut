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
import Style from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import react from 'react';

import Carousel from 'react-native-snap-carousel';
import {COLORS} from '../../../css/Allcolors';

import LinearGradient from 'react-native-linear-gradient';
import Headerscreen from '../Header/Headerscreen';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  datamenu

const Datamenu = [
  {
    namemenu: 'เช็คเครื่องตามสำนัก',
    id: 1,
    icon: require('../../image/addproduct.png'),
  },
  {
    namemenu: 'สร้างรอบนับใหม่',
    id: 2,
    icon: require('../../image/addproduct.png'),
  },
  {
    namemenu: 'ประวัติการเช็คเครื่อง',
    id: 3,
    icon: require('../../image/addproduct.png'),
  },
];

const listDamenu = ({item, index}) => {
  return (
    <View style={{borderWidth: 1,,marginHorizontal:20}}>
        <TouchableOpacity style={{width:100, flex:1 ,marginHorizontal:20}}>

        <Text>{item.namemenu}</Text>

        </TouchableOpacity>
   
    </View>
  );
};

const Homescreen = () => {
  return (
    <View style={{flex: 1}}>
      <Headerscreen />

      <View
        style={{
          flex: 1,
          borderWidth: 1,
          marginVertical: 20,
          marginHorizontal: 25,
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
  View1css: {marginHorizontal: 50},
  imglogo: {resizeMode: 'contain', width: '100%'},
  LIcssview1: {
    flex: 1,
    justifyContent: 'center',
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
