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
    icon: require('../image/Avocado.png'),
    detail: 'Avocado and ....',
    price: '$21.9',
    wieght: '300g',
  },
  {
    menu: 'Raspberry',
    id: 2,
    icon: require('../image/res.png'),
    detail: 'Raspberry and ....',
    price: '$22.9',
    wieght: '300g',
  },
  {
    menu: 'Lemon',
    id: 3,
    icon: require('../image/Avocado.png'),
    detail: 'Lemon and ....',
    price: '$25.9',
    wieght: '300g',
  },
  {
    menu: 'Dessert',
    id: 4,
    icon: require('../image/res.png'),
    detail: 'Dessert and ....',
    price: '$26.9',
    wieght: '300g',
  },
];

 const Menutop = ({item, index}) => {
  return (
    <TouchableOpacity
     
     onPress={()=>{
       alert('Menu')
     }}
      style={Style.viewmenutop}>
      <View style={Style.viewtop1}>
        <Image style={Style.viewtop1} source={item.icon} />
      </View>
      <View style={Style.viewtop1}>
        <Text>{item.menu}</Text>
      </View>
    </TouchableOpacity>
  );
};
const dataFresh = ({item, index}) => {
  return (
    <View
      style={Style.viewdarafresh}>
      <View style={Style.viewtop2}>
        <Image style={Style.viewtop2} source={item.icon} />
      </View>
      <View style={{marginHorizontal: 10,}}>
        <Text style={{}}>{item.menu}</Text>
      </View>
      <View style={{marginHorizontal: 10,}}>
        <Text numberOfLines={1} style={{fontSize: 12, color: '#a3a3a3'}}>
          {item.detail}
        </Text>
      </View>
      <View style={Style.viewprice}>
        <View style={Style.viewprice2}>
          <Text style={[Style.Textcss2]}>{item.price}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text numberOfLines={1} style={{fontSize: 12, color: '#a3a3a3'}}>
            {item.wieght}
          </Text>
        </View>
      </View>
    </View>
  );
};
const Homefresh = () => {
  return (
    <View style={Style.viewbgall}>
      {/* location city */}
      
    


      <ScrollView


      
      >
      {/* berner */}
      <View style={{marginTop: 15}}>
        <Image
          style={{width: null, borderRadius: 15}}
          source={require('../image/banner.png')}
        />
      </View>

      {/* menu */}
      <View
        style={Style.viewfreshfruit}>
        <FlatList
          horizontal={true}
          data={Datamenu}
       
          renderItem={Menutop}
          
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
      <View style={{marginTop: 20}}>
        <View>
          <Text style={{fontSize: 18}}>{'Fresh fruit'}</Text>
        </View>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal={true}
            data={Datafriut}
            // style={{}}
            renderItem={dataFresh}
            // keyExtractor={item => item.id}
          />
        </View>
      </View>
       {/* Green vegetable */}
       <View style={{marginTop: 20}}>
        <View>
          <Text style={{fontSize: 18}}>{'Green vegetable'}</Text>
        </View>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal={true}
            data={Datafriut}
            style={{}}
            renderItem={dataFresh}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
       {/* Green vegetable */}
       <View style={{marginTop: 20}}>
        <View>
          <Text style={{fontSize: 18}}>{'Green vegetable'}</Text>
        </View>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal={true}
            data={Datafriut}
            style={{}}
            renderItem={dataFresh}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Homefresh;
