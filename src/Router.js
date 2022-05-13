import React, { useState, useEffect } from 'react';
import {
  StatusBar
} from 'react-native'
// navigator
import { NavigationContainer } from '@react-navigation/native';
// screens
import SplashScreen from '@screens/Splash';
import MainScreen from '@screens/Main';
// utils
import { main, light } from '@utils/Colors';

export default function Router() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
