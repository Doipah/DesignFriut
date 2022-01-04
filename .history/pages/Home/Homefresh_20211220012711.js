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
  TextInput,
} from 'react-native';
import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
// Icon.loadFont();

function Homefresh() {
  return (
    <View style={{ flex: 1, marginHorizontal: 8}}>
      <View style={{borderColor: 'red', flexDirection: 'row'}}>
        <Icon name="location" size={22} color="#60ab95" />
        <View style={{justifyContent: 'center'}}>
          <Text style={Style.Textcss1}>{'City'}</Text>
        </View>

        <View style={Style.boxSearchcss}>
          <View style={{borderWidth:1}}>

          
          <Icon name="search-outline" size={16} color="#9e9e9e" />
          <TextInput style={{flex: 1}} placeholder="Srarch" />
          </View>
        </View>

        <View style={{flex: 0.3, flexDirection: 'row'}}>
          <Icon1 name="delivery-dining" size={22} color="#60ab95" />
          <View style={{justifyContent: 'center'}}>
            <Text style={Style.Textcss2}>{'1Hour'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Homefresh;
