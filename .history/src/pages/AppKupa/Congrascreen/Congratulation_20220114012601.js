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
   Easing
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
import LottieView from 'lottie-react-native';

//  value


const Congratulationscreen = () => {
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const scrolling = useRef(new Animated.Value(0)).current;
  const [showRealApp, setshowRealApp] = useState(false);
  const [nextone, setnextone] = useState(0);

  const [showPassword, setshowPassword] = useState(true);
 
  const progress = new Animated.Value(0)

  useEffect(() => {
    Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
  }, [headerShown]);



  _Nextone = () => {
    // setnextone(true);
  };

  return (
    <SafeAreaView style={[{backgroundColor: COLORS.white, flex: 1,}]}>
      <View style={{flex: 1, marginHorizontal: 15}}>
         <View style={{borderWidth:1,flex:1}}>
             <View style={{borderWidth:1,flex:1}}>
             {/* <LottieView source={require('../../../config/dataimgjson/1.json')} progress={progress}  autoPlay loop /> */}
             <LottieView
        source={require('../../../config/dataimgjson/1.json')}
        colorFilters={[
          {
            keypath: 'button',
            color: '#F00000',
          },
          {
            keypath: 'Sending Loader',
            color: '#F00000',
          },
        ]}
        progress={progress}
        autoPlay
        loop
      />
             
             </View>

         </View>
       
        
        

       
  
      
        <TouchableOpacity style={Style.buttonlogin}>
          <Text style={Style.textbuttonlogin}>{'Get Started'}</Text>
        </TouchableOpacity>
       
      </View>
     
    </SafeAreaView>
  );
};

export default Congratulationscreen;
