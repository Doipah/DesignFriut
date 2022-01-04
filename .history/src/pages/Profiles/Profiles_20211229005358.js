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
import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import react from 'react';

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
      onPress={() => {
        alert('Menu');
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
    <View style={Style.viewdarafresh}>
      <View style={Style.viewtop2}>
        <Image style={Style.viewtop2} source={item.icon} />
      </View>
      <View style={{marginHorizontal: 10}}>
        <Text style={{}}>{item.menu}</Text>
      </View>
      <View style={{marginHorizontal: 10}}>
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

const Profiles = () => {
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const scrolling = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  return (
    <View style={[Style.viewbgall, {}]}>
      {/* location city */}

      <Animated.View style={[Style.viewlocation, {marginHorizontal: 5}]}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={Style.Textcss1}>{'Setting'}</Text>
          </View>
        </View>

        {/* Time  */}
        <View style={[Style.viewbgtime, {}]}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              <Icon1 name="settings" size={25} color="#60ab95" />
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={event => {
          const scrolling = event.nativeEvent.contentOffset.y;
          console.log(scrolling);
        }}>
        <View style={[Style.viewprofile, {backgroundColor: '#FFF'}]}>
            
          <View
            style={{
              borderWidth: 1,
              flexDirection: 'row',
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            <View style={{}}>
              <Image
                style={{width: 70, height: 70, borderRadius: 35}}
                source={require('../image/profiles.png')}
              />
            </View>
            <View style={{marginLeft: 20, marginVertical: 15}}>
              <Text style={{fontWeight: '500'}}>{'Anuchit Doiphaison'}</Text>
              <Text style={{color: '#60ab95', fontWeight: '500', marginTop: 5,fontSize:13}}>
                {'Remainder : '} {'$70.9'} 
              </Text>
            </View>
          </View>


        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Profiles;
