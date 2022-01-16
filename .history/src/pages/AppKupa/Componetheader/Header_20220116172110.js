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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../../../css/Allcolors';
// import img from '../../image/'

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

//  value

const Homekupascreen = () => {
  return (
    <View style={{flex: 1,flexDirection:'row',justifyContent:'center'}}>
      <View style={{flex:1}}>
        <Text style={{textAlign: 'center', fontWeight: '700', fontSize: 18}}>
          {'Home'}
        </Text>
      </View>
      <View>
          <Icon1  name="notifications" color={COLORS.bgGrreen} size={25} />
      </View>
    </View>
  );
};

export default Homekupascreen;
