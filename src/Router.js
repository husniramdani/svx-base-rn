import React, { useState, useEffect } from 'react';
import {
  StatusBar
} from 'react-native'
// navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import SplashScreen from '@screens/Splash';
import HomeScreen from '@screens/Home';
// utils
import { main, light } from '@utils/Colors';

const Stack = createStackNavigator();

export default function Router() {
  const [isLoading, setLoading] = useState(true);

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
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        {isLoading &&
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }} />
        }
        <Stack.Screen name="MainHome" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
