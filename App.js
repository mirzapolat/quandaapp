// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import { View } from 'react-native';

import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';
import './global.js'

import HomeScreen from './components/Home';
import MenuScreen from './components/Menu';
import CardsScreen from './components/Cards';

const Stack = createNativeStackNavigator();

function App() {
  global.db = SQLite.openDatabase('quanda.db');


  // Loading all Fonts
  const [loaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  });

  if (!loaded) return (<View/>);

  // Returning the Pages
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false,  }} />
        <Stack.Screen name="Cards" component={CardsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;