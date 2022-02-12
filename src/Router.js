import React, { useState, useEffect } from 'react';
import {
  StatusBar
} from 'react-native'
// navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import SplashScreen from '@screens/Splash';
import MainScreen from '@screens/Main';
// utils
import { main, light } from '@utils/Colors';

const Stack = createStackNavigator();

export default function Router() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isLoading ? "light-content" : "dark-content"}
        backgroundColor={isLoading ? main : light}
      />
      {isLoading ?
        <SplashScreen />
        :
        <MainScreen />
      }
    </NavigationContainer>
  );
}
