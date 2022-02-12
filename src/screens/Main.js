import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MotoGP from './MotoGP';
import Moto2 from './Moto2';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Tab.Screen name="MotoGP" component={MotoGP} />
      <Tab.Screen name="Moto2" component={Moto2} />
    </Tab.Navigator>
  );
}
