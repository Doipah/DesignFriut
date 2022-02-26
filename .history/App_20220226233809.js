/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/pages/Home/Homefresh';
import Profiles from './src/pages/Profiles/Profiles';

import Fristscreen from './src/pages/AppKupa/FristScreen/Fristscreen';
import Skipscreen from './src/pages/AppKupa/SkipScreen/Skipscreen';
import Loginscreen from './src/pages/AppKupa/Loginscreen/Loginscreen';
import Congratulationscreen from './src/pages/AppKupa/Congrascreen/Congratulation'
import Signupscreen from './src/pages/AppKupa/Loginscreen/Signupscreen';
import Verificationscreen from './src/pages/AppKupa/Loginscreen/Verificationscreen';
import Forgotpassword from './src/pages/AppKupa/Forgotpassword/Forgotpassword';
import Homekupascreen from './src/pages/AppKupa/Homescreen/HomeKupascreen';
import Splashscreen from './src/pages/AppIntranet/Splash/Splashscreen';
import Loginscreen from './src/pages/AppIntranet/Login/Loginscreen';
import Homescreen from './src/pages/AppIntranet/Home/Homescreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: '#307A59'}}>
    //   <StatusBar backgroundColor="#307A59" barStyle="light-content" />
    //   <Fristscreen />
    // </SafeAreaView>

    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar backgroundColor="#FFF" barStyle='dark-content' />
       {/* <Homekupascreen/> */}
       {/* <Fristscreen /> */}
       {/* <HomeLonding/> */}
       <Homescreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
