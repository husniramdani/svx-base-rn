import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg from '@components/Svg';
import {
  Button,
} from 'react-native';
// Screen
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
      <Tab.Screen
        name="MotoGP"
        component={MotoGP}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Svg icon="gppal_M" size={70} />,
          headerLeft: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="red"
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="blue"
            />
          ),
        }}
      />
      <Tab.Screen name="Moto2" component={Moto2} />
    </Tab.Navigator>
  );
}
