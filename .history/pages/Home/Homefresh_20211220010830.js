import React from 'react';
// import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';
import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
// Icon.loadFont();

function Homefresh() {
  return (
    <View style={{borderWidth: 1, flex: 1, marginHorizontal: 8}}>
      <View style={{borderWidth: 1,borderColor:'red', flexDirection: 'row'}}>
        <Icon name="location" size={25} color="#60ab95" />
        <View style={{justifyContent: 'center'}}>
          <Text style={{borderWidth:1,fontSize:15,fontWeight:'bold'}}>{'City'}</Text>
        </View>
        <View>
          <TextInput/>
          
        </View>
      </View>
    </View>
  );
}

export default Homefresh;
