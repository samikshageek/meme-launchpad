/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useEffect} from 'react';
import  {Node} from 'react';
import Cafe from './components/Cafe';
import MemeCategories from './components/MemeCategories'
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

import SplashScreen from 'react-native-splash-screen'
import BottomDrawerNavigator from './components/BottomNavigationDrawerComponent';
import MemesDisplayScreen from './components/MemeScreen';
import { NavigationContainer , DarkTheme , DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddText from './components/AddTextToMeme';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Stack = createNativeStackNavigator();

  const getBottomDrawer = () => <BottomDrawerNavigator />
  const getMemeScreen = (navigation) => <MemesDisplayScreen navigation={navigation}/>
  const getAddTextScreen = (navigation) => <AddText navigation={navigation} />

  useEffect(() => {
    SplashScreen.hide();
  })

  return (
    
    <NavigationContainer theme={DefaultTheme}>
    <Stack.Navigator>
       <Stack.Screen name="🚀  Meme Launchpad 🚀 " component = {getBottomDrawer} />
       <Stack.Screen name="Memes" component ={getMemeScreen} />
       <Stack.Screen name="Preview" component = { getAddTextScreen} />
    </Stack.Navigator>
  </NavigationContainer>
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
  testStyle:{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'pink'
  }
});

export default App;
