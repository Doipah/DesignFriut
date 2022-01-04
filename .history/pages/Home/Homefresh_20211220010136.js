import React from 'react';
// import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons'
// Icon.loadFont();

function Homefresh() {
    return ( 
        <View style={{borderWidth:1,flex:1,marginHorizontal:8}}>
          <Icon name="location" size={25} color='#60ab95'/>
       
        </View>
     );
}



export default Homefresh;