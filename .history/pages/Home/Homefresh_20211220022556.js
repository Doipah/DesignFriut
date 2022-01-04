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
    icon: require('../image/vegetable.png'),
  },
  {
    menu: 'Fruit',
    id: 3,
    icon: require('../image/fruit.png'),
  },
  {
    menu: 'Dessert',
    id: 4,
    icon: require('../image/Dessert.png'),
  },

];
const Datafriut = [
  {
    menu: 'Avocado',
    id: 1,
    icon: require('../image/icon1.png'),
  },
  {
    menu: 'Raspberry',
    id: 2,
    icon: require('../image/icon1.png'),
  },
  {
    menu: 'Lemon',
    id: 3,
    icon: require('../image/icon1.png'),
  },
  {
    menu: 'Dessert',
    id: 4,
    icon: require('../image/icon1.png'),
  },
  {
    menu: 'Staple',
    id: 5,
    icon: require('../image/icon1.png'),
  },
];

Menutop = ({item, index}) => {
  return (
    <View
      style={{
        borderWidth: 0.1,
        borderColor: 'red',
        width: width * 0.22,
        height: height * 0.12,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        borderRadius: 10,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image style={{alignItems: 'center'}} source={item.icon} />
      </View>
      <View style={{alignItems: 'center'}}>
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

      {/* menu */}
      <View
        style={{
          marginTop: 20,
          shadowColor: '#eff5f6',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}>
        <FlatList
          horizontal={true}
          data={Datamenu}
          style={{}}
          renderItem={this.Menutop}
          keyExtractor={item => item.id}
        />
      </View>

      {/* promotion */}
      <View style={{marginTop: 20}}>
        <Image
          style={{width: null, borderRadius: 15}}
          source={require('../image/promo.png')}
        />
      </View>

      {/* Fresh fruit */}
      <View>
        <View>
          <Text>{'Fresh fruit'}</Text>
        </View>

      </View>
    </View>
  );
};

export default Homefresh;
