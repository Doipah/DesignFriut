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
import Allcss from '../../../css/Allcss';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../../css/Allcolors';
import AppIntroSlider from '../../../lib_edit/react-native-app-intro-slider';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

//  value

const slides = [
  {
    key: 1,
    title: 'All Your favorites foods',
    text: 'Description.Say something cool, Description.Say something cool,',
    image: require('../../image/foodskip.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Get delivery at your \n doorstep',
    text: 'Other cool stuff',
    image: require('../../image/foodskip.png'),
    backgroundColor: '#febe29',
  },
];

const Loginscreen = () => {
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const scrolling = useRef(new Animated.Value(0)).current;
  const [showRealApp, setshowRealApp] = useState(false);
  const [nextone, setnextone] = useState(0);
  

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{marginBottom: 20, justifyContent: 'center'}}>
          <Image
            style={{
              height: hp('45%'),
              width: wp('100%'),
            }}
            source={item.image}
          />
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={{textAlign: 'center', fontWeight: '800', fontSize: 25}}>
            {item.title}
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontWeight: '100', fontSize: 15}}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };
  _onDone = () => {
    alert('Next');
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({showRealApp: true});
  };
  onSkip = () => {
    setShowRealApp(true);
  };

  _Nextone = () => {
    // setnextone(true);
  };

  return (
    <SafeAreaView style={[{backgroundColor: COLORS.white, flex: 1}]}>
      <View style={{borderWidth:1, flex: 1, marginHorizontal:10}}>
          <View style={{borderWidth:1}}>
              <Icon name='arrow-back' size={23} />
          </View>
          <View style={{borderWidth:1,marginTop:10}}>
              <Text style={{fontSize:23 ,fontWeight:'600' }}> {'Welcome Back'}</Text>
          </View>
       

   
      
      </View>
    </SafeAreaView>
  );
};

export default Loginscreen;
