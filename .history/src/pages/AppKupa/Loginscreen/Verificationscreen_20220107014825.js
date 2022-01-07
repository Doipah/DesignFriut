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

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');

//  value
const CELL_COUNT = 4;

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

const Verificationscreen = () => {
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const scrolling = useRef(new Animated.Value(0)).current;
  const [showRealApp, setshowRealApp] = useState(false);
  const [nextone, setnextone] = useState(0);

  const [showPassword, setshowPassword] = useState(true);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  return (
    <SafeAreaView style={[{backgroundColor: COLORS.white, flex: 1}]}>
      <View style={{flex: 1, marginHorizontal: 15,borderWidth:1 }}>
        <TouchableOpacity style={{}}>
          <Icon name="arrow-back" size={23} />
        </TouchableOpacity>
        <View style={{marginTop:35}}>
            <Text style={{textAlign:'center',marginBottom:10,fontWeight:'600',fontSize:23}} >
                {'Veritication Email'}
            </Text>
            <Text style={{textAlign:'center',color:COLORS.colortext,marginBottom:5}} >
                {'Please enter the code we just sent to email'}
            </Text>
            <Text style={{textAlign:'center'}} >
                {'anuchit@gmail.com'}
            </Text>
        </View>
        <View style={{marginTop:35}}>
        <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
        </View>


        {/* <TouchableOpacity
          style={{
            backgroundColor: COLORS.bgGrreen,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            marginBottom: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            {'Continue'}
          </Text>
        </TouchableOpacity> */}
    
      </View>
     
    </SafeAreaView>
  );
};

export default Verificationscreen;

const styles = StyleSheet.create({
    root: {flex: 1, padding:20},
    title: {textAlign: 'center', fontSize: 30, },
    codeFieldRoot: {marginTop: 20,marginHorizontal:50,},
    cell: {
       
      width: 50,
      height: 50,
      lineHeight: 45,
      fontSize: 24,
      borderWidth: 1,
      borderColor: COLORS.bgcolortext,
      backgroundColor:COLORS.bgcolortext,
      textAlign: 'center',
      borderRadius:20
    },
    focusCell: {
        borderColor: COLORS.bgGrreen,
        borderRadius:8,
         
    },
  });
