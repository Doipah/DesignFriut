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
  Image,
  TouchableOpacity
} from 'react-native';
import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
// Icon.loadFont();

function Homefresh() {
  return (
    <View style={{flex: 1, marginHorizontal: 8,marginTop:5,borderWidth:1}}>
      {/* location city */}
      <TouchableOpacity style={{borderColor: 'red', flexDirection: 'row',height:38}}>
        <TouchableOpacity> 
        <View style={{justifyContent: 'center'}}>
          <Icon name="location" size={22} color="#60ab95" />
        </View>

        <View style={{justifyContent: 'center'}}>
          <Text style={Style.Textcss1}>{'City'}</Text>
        </View>
        </TouchableOpacity>


        <View style={Style.boxSearchcss}>
          <View style={{justifyContent: 'center', padding: 5}}>
            <Icon name="search-outline" size={16} color="#9e9e9e" />
          </View>

          <TextInput style={{flex: 1}} placeholder="Srarch" />
        </View>

        <View style={{flex: 0.3, flexDirection: 'row'}}>
          <View style={{justifyContent: 'center'}}>
            <Icon1 name="delivery-dining" size={25} color="#60ab95" />
          </View>

          <View style={{justifyContent: 'center'}}>
            <Text style={Style.Textcss2}>{'1Hour'}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* berner */}
      <View style={{marginTop:15}}>
        <Image 
        style={{width:null,borderRadius:15}}
        source={require('../image/banner.png')} />
      </View>
    </View>
  );
}

export default Homefresh;
