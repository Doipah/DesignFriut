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
import Header from './../Componetheader/Header';

import Carousel from 'react-native-snap-carousel';


// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

//  value

const Datamenu = [
  {
    menu: 'Staple',
    id: 1,
    icon: 'https://katalyst.kasikornbank.com/SiteCollectionDocuments/assets/page/blog/img/food-tech-technology-changes-the-world/food-tech-cover.jpg',
  },
  {
    menu: 'Vegetable',
    id: 2,
    icon: 'https://katalyst.kasikornbank.com/SiteCollectionDocuments/assets/page/blog/img/food-tech-technology-changes-the-world/food-tech-cover.jpg',
  },
 
];




const Homekupascreen = () => {

  _renderItem = ({item, index}) => {
    return (
        <View style={{borderWidth:1  }}>
          <View style={{borderWidth:1,borderColor:'red'}}>
          <Image style={Style.viewtop1} source={{uri:item.icon}} />
          </View>
          <View>
          <Text style={{}}>{ item.menu }</Text>

          </View>

           
        </View>
    );
}

  return (
   <View style={{borderWidth:1,flex:1}}><Header/>

<Carousel
style={{borderWidth:1}}
 layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={Datamenu}
              renderItem={_renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              containerCustomStyle={styles.carouselContainer}
              inactiveSlideShift={0}
              onSnapToItem={(index) => {console.log(index)}}
              // scrollInterpolator={scrollInterpolator}
              // slideInterpolatedStyle={animatedStyles}
            />
   
   
   </View>
  );
};

export default Homekupascreen;
const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue'
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});