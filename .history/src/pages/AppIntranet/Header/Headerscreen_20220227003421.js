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

const Headerscreen = () => {
  return (
    <View style={{flex: 0.1}}>
      <LinearGradient
        start={{x: 0.9, y: 0.6}}
        end={{x: 0.1, y: 0.5}}
        // end={{x: 1, y: 1}}

        colors={[COLORS.bglinearblue, COLORS.bglinearbluedrak]}
        style={styles.LIcssview1}>
        <View style={styles.Viewflexrow}>
          <View style={styles.Viewtextname1}>
            <Text style={styles.textname2}>{'Hello !'}</Text>
            <Text style={styles.textname3}>{'Mr Anuchit'}</Text>
          </View>

          <View style={styles.Viewprofile1}>
            <View style={styles.Viewprofile2}>
              <View style={styles.Viewprofile3}>
                <Image
                  style={styles.imglogo}
                  source={require('../../image/anuchit.jpeg')}
                />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Headerscreen;
const styles = StyleSheet.create({
  Viewflexrow: {marginHorizontal: 10, flexDirection: 'row'},
  Viewtextname1: {flex: 1, justifyContent: 'flex-end'},
  textname2: {
    marginBottom: 3,
    fontSize: fontSizes.TittleSize,
    color: COLORS.white,
  },
  textname3: {fontSize: fontSizes.labelSize, color: COLORS.white},
  Viewprofile1: {flex: 1},
  Viewprofile2: {alignSelf: 'flex-end'},
  Viewprofile3: {
    borderRadius: 30,
    width: 52,
    height: 52,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  View1css: {marginHorizontal: 50},
  imglogo: {borderRadius: 250, width: 45, height: 45, resizeMode: 'contain'},
  LIcssview1: {
    flex: 1,
    justifyContent: 'center',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    opacity: 1,
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
