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
} from 'react-native';
import Style from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import react from 'react';

import Carousel from 'react-native-snap-carousel';
import {COLORS} from '../../../css/Allcolors';

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
    <View style={{flex: 1}}>
      <LinearGradient
        start={{x: 0.4, y: 0.2}}
        end={{x: 0.1, y: 1}}
        // end={{x: 1, y: 1}}

        colors={[COLORS.bglinearblue, COLORS.bglinearbluedrak]}
        style={styles.LIcssview1}>
        <View style={styles.View1css}>
          <Image
            style={styles.imglogo}
            source={require('../../image/LogoIntranet.png')}
          />
        </View>
        <View style={styles.Viewfromlogin1}>
          <View
            style={{
              borderWidth: 1,
              flex: 1,
              marginHorizontal: 15,
              marginVertical: 15,
            }}>
            <View style={{borderWidth: 1}}>
              <Text
                style={{color: '#4f72e5', fontSize: 20, fontWeight: 'bold'}}>
                {'Login'}
              </Text>
            </View>
          </View>
        </View>

        <View style={{flex: 1, borderWidth: 1, marginHorizontal: 30}}>
          <Text>{'kkkkk'}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Homelogin;
const styles = StyleSheet.create({
  Viewfromlogin1: {
    flex: 1,
    marginHorizontal: 30,
    backgroundColor: COLORS.bgfrom,
    borderRadius: 8,
  },

  ////////////////////////////
  View1css: {marginHorizontal: 40, flex: 1},
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
