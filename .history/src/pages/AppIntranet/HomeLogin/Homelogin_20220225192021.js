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
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Style from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import react from 'react';

import Carousel from 'react-native-snap-carousel';
import {COLORS} from '../../../css/Allcolors';
import {fontSizes} from '../../../css/Allsizefont';

import LinearGradient from 'react-native-linear-gradient';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  value

const Homelogin = () => {
  return (
  
     
      <View style={{flex:1}}>
          <KeyboardAvoidingView 
             behavior={Platform.OS === "ios" && "padding" }
             style={{flex:1}}
          > 
        <LinearGradient
          start={{x: 0.4, y: 0.2}}
          end={{x: 0.1, y: 1}}
          // end={{x: 1, y: 1}}

          colors={[COLORS.bglinearblue, COLORS.bglinearbluedrak]}
          style={styles.LIcssview1}>
          {/* view img logo  */}
          <View style={styles.View1css}>
            <Image
              style={styles.imglogo}
              source={require('../../image/LogoIntranet.png')}
            />
          </View>

          {/* view form login  */}
          <View style={styles.Viewfromlogin1}>
            <View style={styles.Viewfromlogin2}>
              <View style={{marginBottom: 30}}>
                <Text style={styles.texttitlecss}>{'Login'}</Text>
              </View>
              <View style={{marginBottom: 30}}>
                <Text style={styles.textlablecss}>{'Username'}</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.bgborderColorline,
                    borderRadius: 7,
                    height: 35,
                  }}>
                  <TextInput
                    placeholder="Enter your username or email"
                    placeholderTextColor={COLORS.placeholderTextColor}
                    style={{
                      borderRadius: 7,
                      height: 35,
                      marginHorizontal: 20,
                    }}
                  />
                </View>
              </View>
              <View style={{marginBottom: 14}}>
                <Text style={styles.textlablecss}>{'Password'}</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.bgborderColorline,
                    borderRadius: 7,
                    height: 35,
                  }}>
                  <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor={COLORS.placeholderTextColor}
                    style={{
                      borderRadius: 7,
                      height: 35,
                      marginHorizontal: 20,
                    }}
                  />
                </View>
              </View>
              <View style={{borderWidth:1,flexDirection:'row',}}>
                <View style={{borderWidth:1,flexDirection:'row',flex:1}}> 
               <TouchableOpacity
               style={{width:20,height:20}}
               >
               <Text>{'gg'}</Text>
               </TouchableOpacity>
               <Text style={{color:COLORS.placeholderTextColor}} >{'Save my user'}</Text>
               </View>
               <View style={{borderWidth:1,flexDirection:'row',flex:1}}> 
               <TouchableOpacity>
               <Text>{'gg'}</Text>
               </TouchableOpacity>
               </View>
              
            </View>
            </View>
            
          </View>

          {/* view img all ditp */}
          <View style={{flex: 0.1, borderWidth: 0.2, marginHorizontal: 30}}>
          <Text>{'kkkkk'}</Text>
        </View>
        </LinearGradient>
        </KeyboardAvoidingView>
      </View>
 
  );
};

export default Homelogin;
const styles = StyleSheet.create({
  textlablecss: {
    color: '#4f72e5',
    fontSize: fontSizes.labelSize,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texttitlecss: {
    color: '#4f72e5',
    fontSize: fontSizes.TittleSize,
    fontWeight: 'bold',
  },
  Viewfromlogin2: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  Viewfromlogin1: {
    // flex: 1,
    height:'50%',
    marginHorizontal: 30,
    backgroundColor: COLORS.bgfrom,
    borderRadius: 8,
  },

  ////////////////////////////
  View1css: {marginHorizontal: 40, flex: 0.5, borderWidth: 1},
  imglogo: {resizeMode: 'contain', width: '100%'},
  LIcssview1: {
    flex: 1,
    justifyContent: 'flex-start',
    borderWidth: 1,
  },
  carouselContainer: {
    marginTop: 20,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
