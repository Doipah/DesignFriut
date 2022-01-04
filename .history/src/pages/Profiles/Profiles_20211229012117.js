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
    menu: 'Payment',
    id: 1,
    icon: require('../image/Payment.png'),
  },
  {
    menu: 'Goods',
    id: 2,
    icon: require('../image/Goods.png'),
  },
  {
    menu: 'Evaluation',
    id: 3,
    icon: require('../image/Evaluation.png'),
  },
  {
    menu: 'Unsubscribe',
    id: 4,
    icon: require('../image/Unsubscibe.png'),
  },
  {
    menu: 'Order',
    id: 5,
    icon: require('../image/Order.png'),
  },
];

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

  const menu = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={()=>{
            alert('menu')
        }}
      style={Style.viewmenutop}>
        <View style={{marginBottom:7}}>
          <Image style={Style.viewtop2} source={item.icon} />
        </View>
        <View style={[{justifyContent:'center',}]}>
          <Text numberOfLines={1} style={{textAlign:'center',fontSize:11}}>{item.menu}</Text>
        </View>
       
      
      </TouchableOpacity>
    );
  };

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
              //   borderWidth: 1,
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
              <Text
                style={{
                  color: '#60ab95',
                  fontWeight: '500',
                  marginTop: 5,
                  fontSize: 13,
                }}>
                {'Remainder : '} {'$70.9'}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row',marginTop:10,marginBottom:25}}>
          <FlatList horizontal={true} data={Datamenu} renderItem={menu} />
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Profiles;
