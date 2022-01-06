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

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

//  value

const Fristscreen = () => {
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
    <SafeAreaView style={[Allcss.colorbg, {flex: 1}]}>
      {/* <StatusBar backgroundColor='#307A59' barStyle='dark-content' /> */}

      <View style={{borderWidth: 1, flex: 1,justifyContent:'center'}}>
        <View style={{alignItems:'center'}}>
          {/* <Image source={require('../../image/Avocado.png')} /> */}
          <Icon1 name="delivery-dining" size={25} color="#60ab95" />
        </View>

        <Text  >Kupa</Text>
      </View>
    </SafeAreaView>
  );
};

export default Fristscreen;
