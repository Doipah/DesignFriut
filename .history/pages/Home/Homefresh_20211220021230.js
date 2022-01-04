import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

//  value

const Datamenu = [
  {
    menu: 'Staple',
    id: 1,
    icon: require('../image/icon1.png'),
  },
  {
    menu: 'Vegetable',
    id: 2,
    icon: require('../image/icon1.png'),
  },
];

Menutop = ({item, index}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderWidth: 1,
        borderColor: 'red',
        width: width * 0.22,
        height:height*0.14,
        justifyContent:'center',
        backgroundColor:'#FFF',
       

      }}>
      <View style={{borderWidth: 1,  alignItems:'center'}}>
        <Image style={{ alignItems:'center'}} source={item.icon} />
      </View>
      <View>
        <Text>{item.menu}</Text>
      </View>
    </View>
  );
};

const Homefresh = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 8, marginTop: 5, borderWidth: 1}}>
      {/* location city */}
      <View style={{borderColor: 'red', flexDirection: 'row', height: 38}}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
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
        {/* Time */}
        <View style={{flex: 0.3, flexDirection: 'row'}}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              <Icon1 name="delivery-dining" size={25} color="#60ab95" />
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={Style.Textcss2}>{'1Hour'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* berner */}
      <View style={{marginTop: 15}}>
        <Image
          style={{width: null, borderRadius: 15}}
          source={require('../image/banner.png')}
        />
      </View>
      <View style={{ marginTop:20}}>
        <FlatList
          horizontal={true}
          data={Datamenu}
          style={{}}
          renderItem={this.Menutop}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Homefresh;
