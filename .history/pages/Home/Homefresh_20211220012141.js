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
    <View style={{borderWidth: 1, flex: 1, marginHorizontal: 8}}>
      <View style={{ borderWidth: 1, borderColor: 'red', flexDirection: 'row'}}>
        <Icon name="location" size={22} color="#60ab95" />
        <View style={{justifyContent: 'center'}}>
          <Text style={{borderWidth: 1, fontSize: 15, fontWeight: 'bold'}}>
            {'City'}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#eff1f2',
            flex: 1,
            borderWidth: 1,
            marginHorizontal: 5,
            flexDirection: 'row',
            borderRadius:15
          }}>
          <Icon name="search-outline" size={22} color="#9e9e9e" />
          <TextInput
          placeholder='Srarch'
           />
        </View>
        <View style={{flex:0.3,flexDirection:'row'}}>
          <Icon1 name="delivery-dining" size={22} color="#60ab95"/>
          <View style={{justifyContent:'center'}}>
          <Text>{'1Hour'}</Text>
          </View>
        

        </View>
      </View>
    </View>
  );
}

export default Homefresh;
